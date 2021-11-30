import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import getString from '@toilcrew/common/main';

const App = () => {
  const header = getString();

  return (
    <SafeAreaView>
      <Text>{header}</Text>
    </SafeAreaView>
  );
};

export default App;
