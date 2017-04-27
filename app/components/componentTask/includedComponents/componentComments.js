import React,{Component} from 'react';
import {AppRegistry,Text,View,TextInput,StyleSheet,ListView} from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Footer, Content } from 'native-base';


const mockData=[
  {name:'John',comment:'Needs update',date:'16.4.2017'},
  {name:'Clara',comment:'Is should be up to date',date:'17.4.2017'},
  {name:'John',comment:'Thanks',date:'17.4.2017'}
]

export default class Comments extends Component{
  constructor(props){
      super(props);

      this.state = {
          inputText:'',
          canSubmit:false,
          commentData:[],
      }
      this.updateComments.bind(this);
  }

  updateComments(data){
    this.setState({
      commentData: this.state.commentData.concat(data)
    });
  }

  componentDidMount(){
    this.updateComments(mockData);
  }

  renderComment(user, sectionId, rowId, highlightRow){
        return(
            <View>
              <Text style={styles.commentInfo}>{user.name} {user.date}</Text>
              <Text>{user.comment}</Text>
            </View>
        )
    }

  updateInput(input){
    this.setState({
      inputText:input,
      canSubmit:input!=''
    });
  }

  submitComment(){
    if(this.state.canSubmit){
      this.updateComments([{name:'novyKomentator',comment:this.state.inputText,date:'Aktualny Datum'}]);
      this.setState({inputText:''})
    }
  }

  render(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let comments=ds.cloneWithRows(this.state.commentData);
    return(
      <Container>
        <Content>
          <ListView
              style={styles.ListStyle}
              dataSource={comments}
              renderRow={this.renderComment.bind(this)}
          />
        </Content>
        <Footer style={{height:110,backgroundColor: 'white', }}>
          <View style={{flex:1,flexDirection:'column',}}>
            <TextInput
             placeholder="Enter Comment"
             value={this.state.inputText}
             onChangeText={(value) => this.updateInput(value)}
             />
            <Button
              title='SUBMIT COMMENT'
              onPress={() => this.submitComment()}
            />
          </View>
        </Footer>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  ListStyle:{
    paddingLeft:15
  },
  SubmitComment: {
    position: 'absolute',
    left:0,
    right:0,
    bottom:1,
    padding:40
  },
  Main: {
    flex:1,
    flexDirection: 'column',
  },
  commentInfo:{
    fontWeight: 'bold'
  },
  commentBox:{
    backgroundColor:'#f4f4f4'
  }
});

AppRegistry.registerComponent('Comments', () => Comments);
