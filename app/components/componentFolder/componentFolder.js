import React,{Component} from 'react';
import {AppRegistry, Text,TextInput,View,StyleSheet,Navigator,ScrollView} from 'react-native';
import SingleTask from './componentSingleTask';
import { List,ListItem,Button } from 'react-native-elements';
import { Container, Footer, Right, Content } from 'native-base';
import Task from './../componentTask/componentTask';

const mockData=[
  {name:'task-name 1',folder:'testingFolder',assignedTo:'person 1',deadline:'19.12.2017'},
  {name:'task-name 2',folder:'testingFolder',assignedTo:'person 2',deadline:'21.12.2017'},
  {name:'task-name 3',folder:'testingFolder3',assignedTo:'person 1',deadline:'20.12.2017'},
]

export default class Folder extends Component{
  constructor(props){
    super(props);
    this.state={tasksData:[],}
  }
  componentDidMount(){
    this.setState({tasksData:mockData});
  }
  switchScene(){
    this.props.navigator.push({
        id:'Task',
    });
  }


render(){
  return(
    <Container>
      <Content>
        <ScrollView>
          <View>
            <List>
              {
                this.state.tasksData.map((task, i) => (
                  <ListItem
                    key={i}
                    title={task.name}
                    subtitle={
                      <View>
                        <Text>{task.folder}</Text>
                        <Text>{task.assignedTo}</Text>
                        <Text>{task.deadline}</Text>
                      </View>
                    }
                    onPress={this.switchScene.bind(this)}
                  />
                ))
            }
          </List>
        </View>
      </ScrollView>
      </Content>
    <Footer style={{backgroundColor: 'white',}}>
      <Right>
        <Button
          title='+'
        />
      </Right>
    </Footer>
  </Container>)
}

}
AppRegistry.registerComponent('Folder',()=> Folder);
