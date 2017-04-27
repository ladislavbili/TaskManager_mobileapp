import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator,StyleSheet} from 'react-native';
import { Container, Header, Content } from 'native-base';

import Comments from './includedComponents/componentComments';
import TaskMenu from './includedComponents/componentTaskMenu';
import Material from './includedComponents/componentMaterial';
import Atributes from './includedComponents/componentAtributes';
import TopMenu from './../componentMain/componentTopMenu';

export default class Task extends Component{
  constructor(props){
    super(props);
  }

  renderScene(route, navigator){
   switch(route.id){
    case 'Atributes':
      return (
        <Container>
          <Header style={{backgroundColor: 'white',height:75,}}>
            <TaskMenu navigator={navigator}/>
            <TopMenu NowIn='Task' navigator={this.props.mainNavigator}/>
          </Header>
          <Content>
            <Atributes/>
          </Content>
      </Container>)

    case 'Material':
    return (
      <Container>
        <Header style={{backgroundColor: 'white',height:75,}}>
          <TaskMenu navigator={navigator}/>
          <TopMenu NowIn='Task' navigator={this.props.mainNavigator}/>
        </Header>
        <Content>
          <Material/>
        </Content>
    </Container>)
    case 'Comments':
    return (
      <Container>
        <Header style={{backgroundColor: 'white',height:75,}}>
          <TaskMenu navigator={navigator}/>
          <TopMenu NowIn='Task' navigator={this.props.mainNavigator}/>
        </Header>
        <Content>
          <Comments/>
        </Content>
    </Container>)
   }
 }


  render(){
    return(
        <Container>
          <Navigator
            style={styles.Navig}
            initialRoute={{id: 'Atributes'}}
            renderScene={this.renderScene.bind(this)}
            configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
          />
        </Container>


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
