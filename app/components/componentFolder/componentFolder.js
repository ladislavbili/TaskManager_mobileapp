import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet,Navigator,ScrollView} from 'react-native';
import SingleTask from './componentSingleTask';
import { Button } from 'react-native-elements';
import Task from './../componentTask/componentTask';

const mockData=[
  {name:'task-name 1',folder:'testingFolder',assignedTo:'person 1',deadline:'19.12.2017'},
  {name:'task-name 2',folder:'testingFolder',assignedTo:'person 2',deadline:'21.12.2017'},
  {name:'task-name 3',folder:'testingFolder3',assignedTo:'person 1',deadline:'20.12.2017'},
]

export default class Folder extends Component{
  constructor(props){
    super(props);
    this.state={tasksData:[],}
  }
  componentDidMount(){
    this.setState({tasksData:mockData});
  }

render(){
  return(
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
          {
            this.state.tasksData.map((material, i) => (
              <SingleTask
              name={material.name}
              folder={material.folder}
              assignedTo={material.assignedTo}
              deadline={material.deadline}
              navigator={this.props.navigator}
              />
            ))
        }
      </View>
    </ScrollView>
    <View style={styles.addButton}>
      <Button
        title='+'
      />
    </View>
    </View>)
}

}

const styles = StyleSheet.create({
  Navig: {
    flex:1,
  },
  addButton: {
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3
  },
});
AppRegistry.registerComponent('Folder',()=> Folder);
