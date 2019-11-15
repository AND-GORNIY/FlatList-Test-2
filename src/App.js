//@flow
import React from 'react';
import {SafeAreaView, StyleSheet,View} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from './MainScreen/MainScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import HomeIcon from './HomeIcon';

const menuIcon = <Icon name="align-right" size={30} color="#FFFFFF" />;

const App = () => {
  return (
    <View>
      <SafeAreaView style={styles.mainView}>
        <Router>
          <Scene key="root">
            <Tabs
              key="tabBar"
              drawer={true}
              drawerIcon={menuIcon}
              title="Patient Care Opportunities"
              navigationBarStyle={styles.navbarColor}
              titleStyle={styles.navbarTextStyle}>
              <Scene
                key="main"
                tabBarComponent={HomeIcon}
                component={MainScreen}
                hideNavBar={true}
              />
            </Tabs>
            <Scene key="home" component={HomeScreen} />
          </Scene>
        </Router>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#C7C7C7',
  },
  navbarColor: {
    backgroundColor: '#50316D',
  },
  navbarTextStyle: {
    color: '#FFFFFF',
  },
});

export default App;
