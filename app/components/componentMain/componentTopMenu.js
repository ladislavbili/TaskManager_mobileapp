import React, {Component} from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';
import { Tabs, Tab } from 'react-native-elements';
import { Icon } from 'react-native-elements';
export default class TopMenu extends Component{
  constructor(props){
    super(props);
  }

  swichItems(command){
    switch (command) {
      case 'Go back':
        this.props.navigator.push({
          id:'Main'
        });

    }
}

  render(){
    let userName=(<Tab
        titleStyle={{fontSize: 20,}}
        title='User Name'
      />)
    let folderName=(<Tab
        titleStyle={{fontSize: 20,}}
        title='Folder Name'
      />)
    let taskName=(<Tab
        titleStyle={{fontSize: 20,}}
        title='Task Name'
      />)
    let projectName=(<Tab
        titleStyle={{fontSize: 20,}}
        title='ProjectName'
      />)
    let goBack =(<Tab
        titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
        title='<---'
        onPress={() => this.swichItems("Go back")}
      />)
    let search=(<Tab
      titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
      title='Search'
      onPress={() => this.swichItems("Go back")}
    />)

    let messages=(<Tab
      titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
      title='Messages'
      onPress={() => this.swichItems("Go back")}
    />)

    let extra=(<Tab
      titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
      title='Extra'
      onPress={() => this.swichItems("Go back")}
    />)
    let edit=(<Tab
      titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
      title='Edit'
      onPress={() => this.swichItems("Go back")}
    />)
    let deleteThis=(<Tab
      titleStyle={{fontWeight: 'bold', fontSize: 20,borderWidth:2,borderColor: "#000000"}}
      title='Delete'
      onPress={() => this.swichItems("Go back")}
    />)
    return(
      <Tabs style={styles.topLevel}>
      {this.props.NowIn!='Main'&&goBack}
      {this.props.NowIn=='Main'&&userName}
      {this.props.NowIn=='Folder'&&folderName}
      {this.props.NowIn=='Project'&&projectName}

      {(this.props.NowIn=='Main'||this.props.NowIn=='Folder')&&search}
      {(this.props.NowIn=='Main'||this.props.NowIn=='Folder')&&messages}
      {(this.props.NowIn=='Main'||this.props.NowIn=='Folder')&&extra}
      {(this.props.NowIn=='Task'||this.props.NowIn=='Project')&&deleteThis}
      {(this.props.NowIn=='Task'||this.props.NowIn=='Project')&&edit}
      </Tabs>
    )
  }
}

AppRegistry.registerComponent('TopMenu',()=> TopMenu);

const styles = StyleSheet.create({
  topLevel: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    padding:17
  }
}
);
/*
priklad na vkladanie ikonky namiesto textu
let test=(<Tab
     titleStyle={{fontWeight: 'bold', fontSize: 10}}
     selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
     title='TEST'
     renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
     renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30}  />}
     />
)
*/
