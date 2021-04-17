import React from 'react';
import { StyleSheet, Text } from 'react-native';


const BodyText = (props) => (
      <Text style = {{...styles.body, ...props.style}}> {props.children} </Text>
  );

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    fontFamily: 'OpenSans',
  }
});
export default BodyText;