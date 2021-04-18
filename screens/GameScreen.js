import React, { useRef, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions} from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const generateRandomBetween =(min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min; 
  if( rndNum === exclude){
    return generateRandomBetween( min, max, exclude);
  }
  return rndNum;
};

const renderListItem = (value, numberOfRound) => (
  <View key={value} style={styles.listItem}>
  <BodyText> # {numberOfRound}</BodyText>
  <BodyText>{value}</BodyText>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [ currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1); 
  const currentHigh = useRef(100); 
  
  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if( currentGuess === userChoice){
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if( (direction === 'lower' && currentGuess < userChoice ) 
        || (direction === 'greater' && currentGuess > userChoice )
    ) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'}
      ]);
      return;
    }
    if(direction === 'lower'){
      currentHigh.current = currentGuess;
    }
    else{
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, 0);
    console.log(`(${currentLow}- ${currentHigh})`);
    setCurrentGuess(nextNumber);
    console.log(nextNumber);
    //setRounds( curRound => curRound + 1 );
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };

  return(
    <View style={ styles.screen }>
      <BodyText>Opponent's Guess </BodyText>
      <NumberContainer >{ currentGuess }</NumberContainer>
      <Card style={ styles.buttonContainer }>
        <MainButton  onPress={ nextGuessHandler.bind(this, 'lower') } > 
          <AntDesign name='caretdown' size={24} color='white' />
        </MainButton>
        <MainButton  onPress={  nextGuessHandler.bind(this, 'greater')} >  
          <AntDesign name='caretup' size={24} color='white' />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list} >
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView>
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: Dimensions.get('window').height > 600 ? 20 : 10,
    minWidth: 300,
  },
  listItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row',   
    justifyContent: 'space-between', 
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window').width > 600 ? '90%' : '70%',    
  },
  list: {
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  }
});
export default GameScreen;