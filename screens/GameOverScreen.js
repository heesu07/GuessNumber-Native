import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';


const GameOverScreen = (props) => {
  return(
    
      <Card style={styles.screen}>        
        <TitleText > Game Over!</TitleText>
        <BodyText> Number of Round: {props.round} </BodyText>
        <BodyText> Answer was {props.answer}</BodyText>
        <Button title='NEW GAME' onPress={props.startAgain}/>  
      </Card>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default GameOverScreen;