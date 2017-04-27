import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'
import { Container, Content , Footer} from 'native-base';

const mockData='Popis projektu je Gaudeamus igitur iuvenes dum sumus: post iucundam iuventutem, post molestam senectutem nos habebit humus.';

export default class Description extends Component{
  constructor(props){
    super(props);
    this.state={descripton:'',editing:false,height:0};
    this.updateDescription.bind(this);
  }

  componentDidMount(){
    this.setState({descripton:mockData});
  }
  updateDescription(event){
    this.setState({descripton:event.nativeEvent.text,height: event.nativeEvent.contentSize.height,});
  }

  render(){
  if(this.state.editing){
    return(
    <Container>
      <Content>
        <TextInput
          multiline = {true}
          style={{marginTop:10,borderWidth:2,borderColor: "#000000",height: Math.max(35, this.state.height)}}
          placeholder={this.state.descripton}
          value={this.state.descripton}
          onChange={(event) => this.updateDescription(event)}
          onEndEditing= {()=>this.setState({editing:false,})}
          />
      </Content>
    </Container>)
  }
  else{
    return(
      <Container>
        <Content>
          <Text>{this.state.descripton}</Text>
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
          <Button
            title='Edit'
            onPress={()=>this.setState({editing:true,})}
          />
        </Footer>
      </Container>
    )
  }
}
}

const styles = StyleSheet.create({
  editButton: {
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3
}});
AppRegistry.registerComponent('Description',()=> Description);
