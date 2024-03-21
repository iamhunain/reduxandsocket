import React, { useEffect } from 'react'
import Chat from './Chat'
import { printConsole } from './redux/Actions'
import { connect } from 'react-redux'
import Apidata from './Apidata';

const App = ({ printConsole, data }) => {
  useEffect(() => {
    console.log('data', data);
  }, [printConsole, data])
  
  return (
    <>
      <Chat />
      <button onClick={() => printConsole({ action: 'asd', hun: 'pp' })}>redux</button>
      {data}
      <Apidata />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  printConsole: (item) => dispatch(printConsole(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);