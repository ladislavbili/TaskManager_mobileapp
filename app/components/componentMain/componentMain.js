import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,Navigator,TouchableHighlight,ScrollView} from 'react-native';
import {List,ListItem,Button } from 'react-native-elements';
import { Container, Header, Content } from 'native-base';


import Project from './../componentProject/componentProject';
import Task from './../componentTask/componentTask';
import Folder from './../componentFolder/componentFolder';
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

    case 'Task':
      return (
        <Task mainNavigator={navigator}/>
    )
    case 'Project':
      return (
        <Project mainNavigator={navigator}/>
    )
    case 'Folder':
      return (
        <Container>
          <Header style={{backgroundColor: 'white',}}>
            <TopMenu NowIn='Folder' navigator={navigator}/>
          </Header>
          <Content>
            <Folder navigator={navigator}/>
          </Content>
      </Container>
      )
    case 'Main':
    //pre vykreslenie lokálnych obrázkov treba použiť avatar={require('../images/avatar1.jpg')}
      return (
        <Container>
          <Header style={{backgroundColor: 'white',}}>
              <TopMenu NowIn='Main' navigator={navigator}/>
          </Header>
          <Content>
              <List containerStyle={{marginBottom: 20}}>
                {
                  this.state.folders.map((folder, i) => (
                    <ListItem
                      key={i}
                      avatar={{uri:"http://icon-park.com/imagefiles/folder_icon_green.png"}}
                      title={folder}
                      onPress={()=>navigator.push({id:'Folder'})}
                    />
                  ))
                }
              </List>

              <View style={styles.hasBorder}>
              {
                this.state.projects.map((project, i) => (
                  <ListItem
                    key={i}
                    avatar={{uri:"https://maxcdn.icons8.com/Share/icon/Logos//ms_project1600.png"}}
                    title={project}
                    onPress={()=>navigator.push({id:'Folder'})}
                  />
                ))
              }
              </View>
              <View style={styles.hasBorder}>
                {
                  this.state.projects.map((kontext, i) => (
                    <ListItem
                      key={i}
                      avatar={{uri:"https://cdn0.iconfinder.com/data/icons/ux-metods-01/100/UX_icon-11-512.png"}}
                      title={kontext}
                      onPress={()=>navigator.push({id:'Folder'})}
                    />
                  ))
                }
              </View>
              <View style={{marginTop:3,}}>
                <Button
                onPress={()=>navigator.push({
                    id:'Project'
                  })}
                  title='Add project'
                />
              </View>
              <View style={{marginTop:3,}}>
                <Button
                  title='Add task'
                />
              </View>
          </Content>
      </Container>
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
      margin:5,
    },
    hasBorder:{
      borderBottomWidth:2,
      borderColor: "#000000",
    },
    topElement:{
      borderBottomWidth:2,
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
    titles:{
      fontSize: 20,
    },
  }
);
AppRegistry.registerComponent('Main',()=> Main);
