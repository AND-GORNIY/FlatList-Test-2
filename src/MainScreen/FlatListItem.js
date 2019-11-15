//@flow
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const compareStyle = (string, subSrtNumber, normlVar) => {
  const subStr = +string.slice(0, subSrtNumber);
  return subStr > normlVar;
};

type Data = {|
  a1c: string,
  age: number,
  birthDay: string,
  bladPrss: string,
  gender: string,
  key: string,
  lastCheckup: string,
  name: string,
  surname: string,
  doctor: string,
|};

const FlatListItem = ({data}) => {
  return (
    <View style={styles.flatlistItem}>
      <Text style={styles.mainTextStyle}>
        {data.name +
          ' ' +
          data.surname +
          ', ' +
          data.gender +
          ', ' +
          data.birthDay +
          ' (' +
          data.age +
          ')'}
      </Text>
      <Text style={styles.titleTextStyle}>{data.doctor}</Text>
      <View style={styles.separator} />
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.titleTextStyle}>BP</Text>
          <Text
            style={[
              styles.indicesTextStyle,
              compareStyle(data.bladPrss, 3, 120)
                ? styles.attentionColor
                : styles.normColor,
            ]}>
            {data.bladPrss}
          </Text>
        </View>
        <View>
          <Text style={styles.titleTextStyle}>A1C</Text>
          <Text
            style={[
              styles.indicesTextStyle,
              data.a1c > 5 ? styles.attentionColor : styles.normColor,
            ]}>
            {data.a1c}
          </Text>
        </View>
        <View>
          <Text style={styles.titleTextStyle}>Last Checkup</Text>
          <Text
            style={[
              styles.indicesTextStyle,
              compareStyle(data.lastCheckup, 2, 5)
                ? styles.attentionColor
                : styles.normColor,
            ]}>
            {data.lastCheckup}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistItem: {
    marginHorizontal: 8,
    minHeight: 125,
    margin: 3,
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  mainTextStyle: {
    color: '#50316D',
    fontSize: 17,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#B7ACB6',
  },
  titleTextStyle: {
    color: '#B7ACB6',
    paddingBottom: 5,
  },
  indicesTextStyle: {
    color: '#50316D',
    fontSize: 17,
    fontWeight: 'bold',
  },
  normColor: {
    color: '#50316D',
  },
  attentionColor: {
    color: 'red',
  },
});

export default FlatListItem;
