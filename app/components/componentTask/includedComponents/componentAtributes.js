import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet,ScrollView} from 'react-native';
import {List,ListItem } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import SmallTask from './componentSmallTask';
import Attachement from './componentAttachement';

//vytvor mockData ktore budu obsahovat vsetko, vsetko nech su klikatelne linky vo svojich podkategoriach, sprav horne menu VSADE

const mockTasks=[{name:'task1'},{name:'task2'}];
const mockAttachements=[{name:'attachement 1'},{name:'attachement 2'}];

export default class Atributes extends Component{
  constructor(){
    super();
    this.state={
      rating:0,
      smallTasks:[],
      attachements:[],
      inputNewTask:'',
      inputNewAttachement:'',
    };
    this.onStarRatingPress.bind(this);
    this.onSubmitAttachement.bind(this);

  }
  componentDidMount(){
    this.setState({
      smallTasks:mockTasks,
      attachements:mockAttachements,
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


  render(){
    return(
    <View>
      <ScrollView>
        <Text>Task descripton</Text>
        <List containerStyle={{marginBottom: 20}}>
        <ListItem
          title="Select Project"
        />
        <ListItem
          title="Select Assigned"
        />
        <ListItem
          title="Add work hours"
        />
        <ListItem
          title="Remind me"
        />
        <ListItem
          title="Deadline"
        />
        <ListItem
          title="Set repeat"
        />
        <ListItem
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
  }
);
