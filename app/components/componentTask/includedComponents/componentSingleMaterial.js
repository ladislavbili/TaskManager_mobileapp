import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';

export default class SingleMaterial extends Component{
  constructor(props){
    super(props);
    this.viewStyle=props.odd?styles.colored:styles.border;
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
        <Text>Name:{this.props.name}</Text>
        <Text>Unit:{this.props.unit}</Text>
        <Text>Price:{this.props.price}</Text>
        <Text>Price total:{this.props.price*this.props.unit}</Text>
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

AppRegistry.registerComponent('SingleMaterial',()=> SingleMaterial);

const styles = StyleSheet.create({
  border:{
    borderWidth:2,
    borderColor: "#000000"
  },
  colored: {
    backgroundColor:'#959595',
    borderWidth:2,
    borderColor: "#000000"
  },
  deleteView:{
    position: 'absolute',
    right:0,
    top:0,
    width:20,
    padding:5,
    height:20
  }
});
