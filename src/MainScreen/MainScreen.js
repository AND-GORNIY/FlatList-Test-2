//@flow
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FlatListItem from './FlatListItem';
import {useSearch} from './useSearch';

const MainScreen = () => {
  const {setLocalState, filterItem} = useSearch();
  return (
    <View style={styles.mainView}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Search"
          placeholderTextColor="#50316D"
          onChangeText={setLocalState}
        />
        <Icon
          style={styles.searchImage}
          name="search"
          size={16}
          color="#50316D"
        />
        <TouchableOpacity style={styles.buttonStyle}>
          <Icon name="sliders" size={32} color="#50316D" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filterItem()}
        keyExtractor={item => item.key}
        renderItem={({item}) => <FlatListItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#C7C7C7',
  },
  searchBar: {
    height: 70,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInputStyle: {
    position: 'relative',
    width: '80%',
    height: '60%',
    borderRadius: 200,
    backgroundColor: '#B7ACB6',
    paddingLeft: '12%',
    color: '#50316D',
    fontSize: 16,
  },
  searchImage: {
    position: 'absolute',
    marginLeft: 15,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
