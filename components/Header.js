import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    textAlign:'center',
    fontFamily: 'OpenSansBold'
  }
})
export default Header;