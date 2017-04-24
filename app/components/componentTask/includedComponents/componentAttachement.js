import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,TouchableHighlight} from 'react-native';


export default class Attachement extends Component{
  constructor(props){
    super(props);
    this.state={hide:false}
  }
  deleteThis(){
    this.setState({hide:true});
  }
  render(){
    if(this.state.hide){
      return(<View/>);
    }
    return(
      <View style={this.viewStyle}>
      <Text style={{fontSize:16,}}>{this.props.name}</Text>
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

AppRegistry.registerComponent('Attachement',()=> Attachement);

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
