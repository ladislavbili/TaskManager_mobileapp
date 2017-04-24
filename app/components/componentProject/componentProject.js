import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator,StyleSheet} from 'react-native';
import TopMenu from './includedComponents/componentTopMenu';
import Description from './includedComponents/componentDescription';
import Authorization from './includedComponents/componentAuthorization';


export default class Project extends Component{
  renderScene(route, navigator){
   switch(route.id){
    case 'Description':
      return (
        <View style={styles.Main}>
          <TopMenu navigator={navigator}/>
          <View style={styles.content}>
            <Description title="Description"/>
          </View>
        </View>)
    case 'Authorization':
      return (
        <View style={styles.Main}>
          <TopMenu navigator={navigator}/>
          <View style={styles.content}>
            <Authorization title="Authorization"/>
          </View>
        </View>)
   }
 }


  render(){
    return(
        <Navigator
            style={styles.Navig}
            initialRoute={{id: 'Description'}}
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
AppRegistry.registerComponent('Project',()=> Project);
