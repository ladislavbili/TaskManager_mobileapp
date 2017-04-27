import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet} from 'react-native';
import SingleAuthorization from './componentSingleAuthorization';
import { Button } from 'react-native-elements';
import { Container, Footer, Content } from 'native-base';
const mockData=[
  {name:'Michael',role:"role 1"},
  {name:'Mathew',role:"role 2"},
]

export default class Authorization extends Component{
  constructor(props){
    super(props);
    this.state={employeeData:[],}
  }
  addUser(){
    console.log("Form to add user");
  }
  componentDidMount(){
    this.setState({employeeData:mockData});
  }
  render(){
    return(
    <Container>
      <Content>
      {
        this.state.employeeData.map((material, i) => (
          <SingleAuthorization
          name={material.name}
          role={material.role}
          />
        ))
    }
    </Content>
    <Footer style={{backgroundColor: 'white'}}>
      <Button
        title='+ User'
        onPress={() => this.addUser.bind(this)}
      />
    </Footer>
  </Container>)
  }

}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3
  },
});
AppRegistry.registerComponent('Authorization',()=> Authorization);
