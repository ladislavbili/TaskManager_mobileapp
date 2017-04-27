import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator,StyleSheet} from 'react-native';
import ProjectMenu from './includedComponents/componentProjectMenu';
import Description from './includedComponents/componentDescription';
import Authorization from './includedComponents/componentAuthorization';
import TopMenu from './../componentMain/componentTopMenu';
import { Container, Header, Content } from 'native-base';

export default class Project extends Component{
  constructor(props){
    super(props);
  }
  renderScene(route, navigator){
   switch(route.id){
    case 'Description':
      return (
        <Container>
          <Header style={{backgroundColor: 'white',height:75,}}>
            <ProjectMenu navigator={navigator}/>
            <TopMenu NowIn='Project' navigator={this.props.mainNavigator}/>
          </Header>
          <Content>
            <Description/>
          </Content>
      </Container>)
    case 'Authorization':
      return (
        <Container>
          <Header style={{backgroundColor: 'white',height:75,}}>
            <ProjectMenu navigator={navigator}/>
            <TopMenu NowIn='Project' navigator={this.props.mainNavigator}/>
          </Header>
          <Content>
            <Authorization/>
          </Content>
      </Container>)
   }
 }


  render(){
    return(
        <Container>
          <Navigator
              style={styles.Navig}
              initialRoute={{id: 'Description'}}
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
AppRegistry.registerComponent('Project',()=> Project);
