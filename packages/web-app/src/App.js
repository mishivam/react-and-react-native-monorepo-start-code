
import './App.css';
import { connect } from 'react-redux'

import { addOne, removeOne, reset } from "@monorepo/common/actions"

function App({ counterValue, addOneCounter, removeOneCounter, resetCounter }) {


  return (
    <div className="App">
      <div className='counter_wrapper'>
        <h1>{counterValue}</h1>
        <div className="btnContainer">
          <button onClick={addOneCounter}><strong>+1</strong></button>
          <button onClick={removeOneCounter}><strong>-1</strong></button>
          <button onClick={resetCounter}>reset</button>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  counterValue: state.count.val,
});

const mapDispatchToProps = dispatch => ({
  addOneCounter: () => dispatch(addOne()),
  removeOneCounter: () => dispatch(removeOne()),
  resetCounter: () => dispatch(reset()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
