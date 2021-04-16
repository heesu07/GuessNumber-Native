import React from 'react';
import { 
  View,  
  StyleSheet, 
  Text, Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Input from '../components/Input';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = React.useState('');
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState(null);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setSelectedNumber(null);
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if( isNaN(chosenNumber) || chosenNumber <= 0 ) {
      Alert.alert(
        'Invalid number!',
        'nuber has to be a number between 1 and 99', 
        [{text: 'Okey', style: 'destructive',  onPress: resetInputHandler}]
      );      
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if(confirmed){
    confirmedOutput = (
      <Card style={styles.summaryContainer}>        
        <Text > You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>  
        <Button title='START GAME' onPress={() => {props.onStartGame(selectedNumber)}}/>  
      </Card>
    );
  };

  return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={ styles.screen }>
        <Text style={ styles.title }> Start New Game! </Text>
        <Card style={{...styles.inputContainer, ...styles.card}}>
          <Text> Select a Number </Text>
          <Input 
            style={styles.input} 
            blurOnSubmit autoCorrect={false}  
            autoCapitalize='none'
            keyboardType='number-pad'
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={ styles.buttonContainer }>
            <View style={styles.button}>
              <Button  title= "Reset" onPress={resetInputHandler} color={Colors.accent}/>
              </View>
            <View style={styles.button } >
              <Button  title= "Confirm" onPress={confirmInputHandler} color={Colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'OpenSansBold'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'    
  },
  input: {
    width: 100, 
    textAlign: 'center', 
  },
  buttonContainer: {    
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  card: {    
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }

});
export default StartGameScreen;