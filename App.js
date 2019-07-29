import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import PlayButton from './src/components/PlayButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dice1: require('./assets/images/dice1.png'),
      dice2: require('./assets/images/dice1.png'),
      sum: null,
      total: null
    };
  }

  /*getRandomColor = () => {
    return(
      "rgb(" + 
      Math.floor(Math.random() * 256)  + ", " +
      Math.floor(Math.random() * 256)  + ", " +
      Math.floor(Math.random() * 256)  + ")"
    )
  }

  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() });
  }*/

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  playButtonPressed = () => {
    var d1 = this.getRandomValue(),
        d2 = this.getRandomValue();
    this.setState({
      sum: d1 + d2,
      total: this.state.total + d1 + d2
    });
    switch (d1) {
      case 1:
        this.setState({dice1: require('./assets/images/dice1.png')});
        break;
      case 2:
        this.setState({dice1: require('./assets/images/dice2.png')});
        break;
      case 3:
        this.setState({dice1: require('./assets/images/dice3.png')});
        break;
      case 4:
        this.setState({dice1: require('./assets/images/dice4.png')});
        break;
      case 5:
        this.setState({dice1: require('./assets/images/dice5.png')});
        break;
      case 6:
        this.setState({dice1: require('./assets/images/dice6.png')});
        break;
    }

    switch (d2) {
      case 1:
        this.setState({dice2: require('./assets/images/dice1.png')});
        break;
      case 2:
        this.setState({dice2: require('./assets/images/dice2.png')});
        break;
      case 3:
        this.setState({dice2: require('./assets/images/dice3.png')});
        break;
      case 4:
        this.setState({dice2: require('./assets/images/dice4.png')});
        break;
      case 5:
        this.setState({dice2: require('./assets/images/dice5.png')});
        break;
      case 6:
        this.setState({dice2: require('./assets/images/dice6.png')});
        break;
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={this.state.dice1}></Image>
        <Image source={this.state.dice2}></Image>
        <View style={styles.values}>
          <Text style={styles.gameButton}>{this.state.sum}</Text>
          <Text style={styles.gameButton}>{this.state.total}</Text>
        </View>
        <PlayButton action={this.playButtonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5A40E',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  },
  values: {
    flexDirection: 'row',
  }
});
