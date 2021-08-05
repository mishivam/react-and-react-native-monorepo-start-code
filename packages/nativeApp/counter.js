/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
import { connect } from 'react-redux'
import { addOne, removeOne, reset } from "@monorepo/common/actions";

const Counter = ({ counterValue, addOneCounter, removeOneCounter, resetCounter }) => {
  return (
    <View>
          <Text >{counterValue}</Text>
          <Button title="+1" onPress={addOneCounter}/>
          <Button title="-1" onPress={removeOneCounter}/>
          <Button title="reset" onPress={resetCounter}/>
    </View>
  );
};


const mapStateToProps = state => ({
    counterValue: state.count.val,
});

const mapDispatchToProps = dispatch => ({
    addOneCounter: () => dispatch(addOne()),
    removeOneCounter: () => dispatch(removeOne()),
    resetCounter: () => dispatch(reset()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
