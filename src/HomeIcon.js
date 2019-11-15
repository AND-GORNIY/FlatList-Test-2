//@flow
import React from 'react';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const HomeIcon = () => {
  return (
    <TouchableOpacity style={styles.iconStyle} onPress={() => Actions.home()}>
      <Icon name="home" size={30} color="#50316D" />
      <Text style={styles.textStyle}>Home</Text>
    </TouchableOpacity>
  );
};

export default HomeIcon;

const styles = StyleSheet.create({
  iconStyle: {
    height: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    color: '#50316D',
  },
});
