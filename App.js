import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)  
  const [dataLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')  
  });


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);    
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const gameOverHandler = numberOfRound => {
    setGuessRounds(numberOfRound);
  };

  let content = !dataLoaded ? <AppLoading /> : <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice = {userNumber} onGameOver = {gameOverHandler} /> ;
  }else if(guessRounds > 0 ){
    content = <GameOverScreen answer ={userNumber} round={guessRounds} startAgain={configureNewGameHandler}/>;
  }


  return (    
    <View style={styles.screen}>
      <Header title='Guess Number'/>      
      { content }
    </View>    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
