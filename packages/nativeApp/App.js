/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Provider} from 'react-redux';
import {store} from '@monorepo/common/stores';
import Counter from "./counter";

const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    height: '100%',
  };


  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <Text>native app is running!</Text>
        <Counter/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
