import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';
import { Button,FormLabel, FormInput,FormValidationMessage } from 'react-native-elements'

export default class AddMaterial extends Component{
  constructor(props){
    super(props);
    this.state = {
      wrongName:true,
      wrongQuantity:true,
      wrongtUnit:true,
      wrongPrice:true,
      justLoaded:true,
    }
  }

  goBack(){
    this.props.navigator.push({
        id:"Material"
    });
  }
  someFunction(input){
    this.setState({wrongName:true,
    wrongQuantity:true,
    wrongtUnit:true,
    wrongPrice:true,
    justLoaded:false,});
  }

  render(){
    return(
      <View style={styles.main}>
      <View>
      <FormLabel>Name</FormLabel>
      <FormInput onChangeText={this.someFunction.bind(this)}/>
      {
        !this.state.justLoaded && this.state.wrongName &&
        <FormValidationMessage>Name is required</FormValidationMessage>
      }

      <FormLabel>Quantity</FormLabel>
      <FormInput keyboardType='numeric' onChangeText={this.someFunction.bind(this)}/>
      {
        !this.state.justLoaded && this.state.wrongQuantity &&
        <FormValidationMessage>Quantity is required and must be a number.</FormValidationMessage>
      }
      <FormLabel>Unit</FormLabel>
      <FormInput onChangeText={this.someFunction.bind(this)}/>
      {
        !this.state.justLoaded && this.state.wrongName &&
        <FormValidationMessage>Unit required</FormValidationMessage>
      }
      <FormLabel>Price</FormLabel>
      <FormInput keyboardType='numeric' onChangeText={this.someFunction.bind(this)}/>
      {
        !this.state.justLoaded && this.state.wrongName &&
        <FormValidationMessage>Price is required and must be a number.</FormValidationMessage>
      }


      </View>
        <View style={styles.cancelButton}>
          <Button
            title='Cancel'
            onPress={() => this.goBack()}
          />
        </View>
        <View style={styles.saveButton}>
          <Button
            title='Save'
          />
        </View>
        <Text>"Tu bude formular"</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('AddMaterial',()=> AddMaterial);
const styles = StyleSheet.create({
  cancelButton: {
    position: 'absolute',
    left:10,
    bottom:10,
    padding:3
  },
  saveButton: {
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3
  },
  main:{
    flex:1,
  }
});
