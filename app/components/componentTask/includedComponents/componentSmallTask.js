import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';
import CheckBox from 'react-native-checkbox';


export default class SmallTask extends Component{
  constructor(props){
    super(props);
    this.state={hide:false,checked:false}
  }
  deleteThis(){
    this.setState({hide:true});
  }
  checkTrigger(checked){
    this.setState({checked});
  }
  render(){
    if(this.state.hide){
      return(<View/>);
    }
    return(
      <View style={this.viewStyle}>
        <CheckBox
          label={this.props.name}
          labelStyle={{fontSize:16,}}
          checked={this.state.checked}
          onChange={(checked) => this.checkTrigger(!checked)}
        />
        <View style={styles.deleteView}>
          <TouchableHighlight
            style={styles.deleteButton}
            onPress={this.deleteThis.bind(this)}>
            <Text>X</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('SmallTask',()=> SmallTask);

const styles = StyleSheet.create({
  deleteView:{
    position: 'absolute',
    right:0,
    top:0,
    width:20,
    padding:5,
    height:20
  }
});
