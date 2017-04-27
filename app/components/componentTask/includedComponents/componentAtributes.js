import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet,ScrollView,Input} from 'react-native';
import {List,ListItem } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

import SmallTask from './componentSmallTask';
import Attachement from './componentAttachement';
import { Picker } from 'native-base';
import DatePicker from 'react-native-datepicker'
//vytvor mockData ktore budu obsahovat vsetko, vsetko nech su klikatelne linky vo svojich podkategoriach, sprav horne menu VSADE

const mockTasks=[{name:'task1'},{name:'task2'}];
const mockAttachements=[{name:'attachement 1'},{name:'attachement 2'}];
const mockProjects=[{name:'Project 1',id:0},{name:'Project 2',id:1},{name:'Project 3',id:2},{name:'Project 4',id:3},{name:'Project 5',id:4},{name:'Project 6',id:5},{name:'Project 7',id:6},{name:'Project 8',id:7},{name:'Project 9',id:8},{name:'Project 10',id:9},{name:'Project 11',id:10},{name:'Project 12',id:11},{name:'Project 13',id:12},];
const mockResponsiblePersons=[{name:'Robert',id:0},{name:'Patrik',id:1}];

export default class Atributes extends Component{
  constructor(){
    super();
    this.state={
      rating:0,
      smallTasks:[],
      attachements:[],
      projects:[],
      selectedProject:-1,
      inputNewTask:'',
      inputNewAttachement:'',
      responsiblePersons:[],
      selectedResponsible:-1,
      workHours:'',
      remindMeDate:'',
      deadlineDate:'',

    };
    this.onStarRatingPress.bind(this);
    this.onSubmitAttachement.bind(this);

  }
  componentDidMount(){
    this.setState({
      smallTasks:mockTasks,
      attachements:mockAttachements,
      projects:mockProjects,
      responsiblePersons:mockResponsiblePersons,
    });
  }
  onStarRatingPress(rating) {
    this.setState({
      rating
    });
  }
  onSubmitAttachement(){
    this.setState({
      attachements:this.state.attachements.concat([{name:this.state.inputNewAttachement}]),
      inputNewAttachement:'',
    });
  }
  onSubmitSmallTask(){
    this.setState({
      smallTasks:this.state.smallTasks.concat([{name:this.state.inputNewTask}]),
      inputNewTask:'',
    });
  }

  changedProject(value){
    console.log(value);
    this.setState({selectedProject:value})
  }
  changedAssigned(value:string){
    this.setState({responsible:value})
  }
  render(){
    return(

    <View>
      <ScrollView>
        <Text style={styles.textHeader}>Select project</Text>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedProject}
          onValueChange={this.changedProject.bind(this)}>
          {
            this.state.projects.map((project, i) => (
              <Picker.Item label={project.name} value={project.id} />
            ))
          }
       </Picker>

       <Text style={styles.textHeader}>Select Assigned</Text>
       <Picker
         mode="dropdown"
         selectedValue={this.state.selectedResponsible}
         onValueChange={this.changedAssigned.bind(this)}>
         {
           this.state.responsiblePersons.map((responsible, i) => (
             <Picker.Item label={responsible.name} value={responsible.id} />
           ))
         }
      </Picker>
      <TextInput
        placeholder='Add work hours'
        keyboardType='numeric'
        onChangeText={(text) => this.setState({workHours:text})}
        value={this.state.workHours}
      />
      <Text style={styles.textHeader}>Remind me</Text>
      <DatePicker
        date={this.state.remindMeDate}
        style={{width:200}}
        mode="datetime"
        placeholder="Remind me"
        format="DD.MM.YYYY HH:MM"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={true}
        onDateChange={(date) => {this.setState({remindMeDate: date})}}
      />
      <Text style={styles.textHeader}>Deadline</Text>
      <DatePicker
        date={this.state.deadlineDate}
        style={{width:200}}
        mode="datetime"
        placeholder="Deadline"
        format="DD.MM.YYYY HH:MM"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={true}
        onDateChange={(date) => {this.setState({deadlineDate: date})}}
      />

        <List containerStyle={{marginBottom: 20}}>
        <ListItem
          key={0}
          title="Set repeat"
        />
        <ListItem
          key={1}
          title="Call"
        />
        </List>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>Rating</Text>
          <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          starSize={30}
          rating={this.state.rating}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starColor={'#d6e821'}
          />

        </View>
        {
          this.state.smallTasks.map((task, i) => (
            <SmallTask
              name={task.name}
            />
          ))
      }
      <TextInput
       placeholder="Enter new small task"
       value={this.state.inputNewTask}
       onChangeText={(value) => this.setState({inputNewTask:value})}
       onSubmitEditing={() => this.onSubmitSmallTask()}
       />
      {
        this.state.attachements.map((task, i) => (
          <Attachement
            name={task.name}
          />
        ))
    }
    <TextInput
     placeholder="Enter new attachement"
     value={this.state.inputNewAttachement}
     onChangeText={(value) => this.setState({inputNewAttachement:value})}
     onSubmitEditing={() => this.onSubmitAttachement()}
     />
    </ScrollView>
  </View>)
  }

}

AppRegistry.registerComponent('Atributes',()=> Atributes);
const styles = StyleSheet.create({
  rating: {
      flexDirection:'row',
    },
    ratingText: {
      padding:5,
      paddingRight:150,
      fontSize:17,

    },
    textHeader:{
      fontSize:17,
      color:'black',
    }
  }
);
