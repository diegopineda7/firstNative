import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class PlayButton extends Component {
  render(){
    return(
      <TouchableOpacity onPress={this.props.action}>
        <Text style={styles.gameButton}>Play Game</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gameButton: {
    marginTop: 35,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#010F58',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#010F58',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10
  }
});
