import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator,StyleSheet} from 'react-native';
import Comments from './includedComponents/componentComments';
import TopMenu from './includedComponents/componentTopMenu';
import Material from './includedComponents/componentMaterial';
import Atributes from './includedComponents/componentAtributes';

export default class Task extends Component{
  renderScene(route, navigator){
   switch(route.id){
    case 'Atributes':
    return (
      <View style={styles.Main}>
        <TopMenu navigator={navigator}/>
        <View style={styles.content}>
          <Atributes/>
        </View>
      </View>)
    case 'Material':
      return (
        <View style={styles.Main}>
          <TopMenu navigator={navigator}/>
          <View style={styles.content}>
            <Material/>
          </View>
        </View>)
    case 'Comments':
      return (
          <View style={styles.Main}>
            <TopMenu navigator={navigator}/>
            <View style={styles.content}>
            <Comments/>
            </View>
          </View>)
   }
 }


  render(){
    return(
        <Navigator
            style={styles.Navig}
            initialRoute={{id: 'Atributes'}}
            renderScene={this.renderScene}
            configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
          />


    )
  }
}
const styles = StyleSheet.create({
  Navig: {
    flex:1,
  },
  Main: {
    flex:1,
    flexDirection: 'column',
  },
  content:{
    flex:1,
    flexDirection: 'column',
    paddingTop:50,
  }
}
);
AppRegistry.registerComponent('Task',()=> Task);
