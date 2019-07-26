import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Nametext extends Component {
  render(){
    return(
      <Text style={styles.text}>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25, 
    color: '#FAC42F',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10
  }
});
