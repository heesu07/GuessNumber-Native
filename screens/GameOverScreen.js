import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/color';

const GameOverScreen = (props) => {
  return(
    
      <Card style={styles.screen}>        
        <TitleText > Game Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image 
            fadeDuration={1000}
            style={styles.image} 
            source={ require('../assets/images/success.png')} 
            //source={{ uri: 'https://image.shutterstock.com/image-photo/mountaineers-help-each-other-reach-260nw-1340104646.jpg' }} 
            resizeMethod= 'auto'
          />
        </View>
        <BodyText> Number of Round: <Text style={styles.highlight}>{props.round} </Text> </BodyText>
        <BodyText> Answer was <Text style={styles.highlight}>{props.answer}</Text></BodyText>
        <Button title='NEW GAME' onPress={props.startAgain}/>  
      </Card>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',    
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#f7287b',
    width: 300,
    height: 300, 
    overflow: 'hidden',
    margin: 10,
  },
  highlight: {
    color: Colors.primary,
  }
})
export default GameOverScreen;