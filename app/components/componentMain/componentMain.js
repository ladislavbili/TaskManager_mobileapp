import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,Navigator,TouchableHighlight} from 'react-native';
import Project from './../componentProject/componentProject';
import Task from './../componentTask/componentTask';
import Folder from './../componentFolder/componentFolder';
import { Button } from 'react-native-elements';
import TopMenu from './componentTopMenu';

const mockFolders=['DO IT','SCHEDULED','DONE','REPEATED']
const mockProjects=['LanSystems','Administratíva']
const mockKontext=['Telefonovat','Osobne']

export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      folders:mockFolders,
      projects:mockProjects,
      kontext:mockKontext,
    }
  }
  renderScene(route, navigator){
   switch(route.id){
    case 'Project':
      return (
        <View style={styles.isFlexed}>
          <TopMenu NowIn='Project' navigator={navigator}/>
          <View style={styles.topComponent}>
            <Project/>
          </View>
        </View>)

    case 'Task':
    return (
      <View style={styles.isFlexed}>
        <TopMenu NowIn='Task' navigator={navigator}/>
        <View style={styles.topComponent}>
          <Task/>
        </View>
      </View>)
    case 'Folder':
      return (
        <View style={styles.isFlexed}>
          <TopMenu NowIn='Folder' navigator={navigator}/>
          <View style={styles.topComponent}>
            <Folder navigator={navigator}/>
          </View>
        </View>)
    case 'Main':
      return (
        <View style={styles.isFlexed}>
          <TopMenu NowIn='Main' navigator={navigator}/>
          <View style={styles.isFlexed}>
            <View style={styles.topElement}>
              {
                this.state.folders.map((folder, i) => (
                  <TouchableHighlight
                    onPress={()=>navigator.push({id:'Folder'})}>
                    <View>
                      <Text>{folder}</Text>
                    </View>
                  </TouchableHighlight>
                ))
              }
            </View>
            <View style={styles.hasBorder}>
            <Text>PROJECTS</Text>
            {
              this.state.projects.map((project, i) => (
                <TouchableHighlight
                  onPress={()=>navigator.push({id:'Project'})}>
                  <View>
                    <Text>{project}</Text>
                  </View>
                </TouchableHighlight>
              ))
            }
            </View>
            <View style={styles.hasBorder}>
              <Text>KONTEXT</Text>
              {
                this.state.kontext.map((kontext, i) => (
                  <TouchableHighlight>
                    <View>
                      <Text>{kontext}</Text>
                    </View>
                  </TouchableHighlight>
                ))
              }
            </View>
            <TouchableHighlight>
              <View>
                <Text>ARCHIVED</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.addButton}>
              <Button
                title='+'
              />
            </View>
          </View>
        </View>

      )
   }
 }

  render(){
    return(
        <Navigator
            style={styles.isFlexed}
            initialRoute={{id: 'Main'}}
            renderScene={this.renderScene.bind(this)}
            configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
          />
    )
  }
}
const styles = StyleSheet.create({
  isFlexed: {
    flex:1,
  },
  hasBorder:{
    borderWidth:2,
    borderColor: "#000000",
  },
  topElement:{
    borderWidth:2,
    borderColor: "#000000",
    marginTop:50,
  },
  topComponent:{
    flex:1,
    marginTop:50,
  },

  addButton: {
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3
  },
}
);
AppRegistry.registerComponent('Main',()=> Main);
