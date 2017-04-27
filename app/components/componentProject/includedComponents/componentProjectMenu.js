import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';
import { Tabs, Tab } from 'react-native-elements'

export default class ProjectMenu extends Component{
  constructor(props){
    super(props);
  }

  swichItems(target){
    this.props.navigator.push({
        id:target
    });
}

  render(){
    return(
      <Tabs>

      <Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='Description'
        onPress={() => this.swichItems("Description")}
      />
      <Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='Authorization'
        onPress={() => this.swichItems("Authorization")}
      />
      </Tabs>
    )
  }
}

AppRegistry.registerComponent('ProjectMenu',()=> ProjectMenu);

const styles = StyleSheet.create({
  topLevel: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    padding:17
  }
}
);
