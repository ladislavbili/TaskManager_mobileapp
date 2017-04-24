import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';

export default class SingleMaterial extends Component{
  constructor(props){
    super(props);
    this.state={hide:false}
  }
  switchScene(){
    this.props.navigator.push({
        id:'Task',
    });
  }
  render(){
    return(
      <View style={styles.mainView}>
        <TouchableHighlight
          onPress={this.switchScene.bind(this)}>
          <View>
            <Text># {this.props.name}</Text>
            <Text>Folder: {this.props.folder}</Text>
            <Text>Assigned to: {this.props.assignedTo}</Text>
            <Text>Deadline: {this.props.deadline}</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.callButton}>
          <Button
            title='Call'
          />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('SingleMaterial',()=> SingleMaterial);

const styles = StyleSheet.create({
  callButton:{
    width:100,
  },
  mainView:{
    borderWidth:2,
    borderColor: "#000000",
    padding:10,
  },
});
