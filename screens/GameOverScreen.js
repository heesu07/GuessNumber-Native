import React from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions } from 'react-native';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/color';
import MainButton from '../components/MainButton';

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
        <BodyText style={styles.resultText}> Number of Round: <Text style={styles.highlight}>{props.round} </Text> </BodyText>
        <BodyText style={styles.resultText}> Answer was <Text style={styles.highlight}>{props.answer}</Text></BodyText>
        <MainButton onPress={props.startAgain}> NEW GAME </MainButton>
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
    borderRadius:  Dimensions.get('window').width * 0.35,
    borderWidth: 3,
    borderColor: '#f7287b',
    width: Dimensions.get('window').width * 0.7,
    height:  Dimensions.get('window').width * 0.7, 
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height /30 ,
  },  
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height > 1000 ? 18 : 16,
    marginBottom: 10,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSansBold',
    textAlign: 'center',
  }
})
export default GameOverScreen;