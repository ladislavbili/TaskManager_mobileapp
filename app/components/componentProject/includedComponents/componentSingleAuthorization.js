import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,TouchableHighlight} from 'react-native';

export default class SingleMaterial extends Component{
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
      <View style={styles.mainView}>
          <View style={styles.dataView}>
            <Text style={{flex:0.4}}>{this.props.name}</Text>
            <Text style={{flex:0.4}}>{this.props.role}</Text>
          </View>
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
  mainView:{
    borderWidth:2,
    borderColor: "#000000",
  },
  dataView:{
    flexDirection: 'row',
    padding:10,
  },
  deleteView:{
    position: 'absolute',
    right:0,
    top:0,
    width:20,
    padding:5,
    height:200
  }
});
