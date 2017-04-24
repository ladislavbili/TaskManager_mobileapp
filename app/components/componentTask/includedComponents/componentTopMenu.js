import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';
import { Tabs, Tab } from 'react-native-elements'

export default class TopMenu extends Component{
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
      <Tabs style={styles.topLevel}>

      <Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='Atributes'
        onPress={() => this.swichItems("Atributes")}
      />
      <Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='Comments'
        onPress={() => this.swichItems("Comments")}
      />
      <Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='Material'
        onPress={() => this.swichItems("Material")}
      />
      </Tabs>
    )
  }
}

AppRegistry.registerComponent('TopMenu',()=> TopMenu);

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
