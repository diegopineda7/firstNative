import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NameText from './src/components/NameText';

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.vertical}>
          {/*Div escondido
          <NameText name="Diego"/>
          <Image style={styles.image} source={require("./assets/background.jpg")}></Image>*/}
          <View style={styles.div1}></View>
          <View style={styles.div2}></View>
          <View style={styles.div3}></View>
        </View>
        <View style={styles.horizontal}>
          <View style={styles.div1}></View>
          <View style={styles.div2}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vertical: {
    flex: .7, //El div ocupa el 70% del espacio (vertical)
  },
  horizontal: {
    flex: .3,
    flexDirection: "row-reverse",
  },
  image: {
    width: 300,
    height: 300,
    display: "none"
  },
  div1: {
    flex: 1,
    backgroundColor: '#FFC107',
  },
  div2: {
    flex: 2, //2 de las 6 partes (1+2+3) de la pantalla
    backgroundColor: '#5DADE2',
  },
  div3: {
    flex: 3, //3 de las 6 partes (1+2+3) de la pantalla
    backgroundColor: '#873600',
  }
});
