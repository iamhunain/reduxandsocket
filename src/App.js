import React from 'react'
import Chat from './Chat'
import { printconsole } from './redux/Actions'
import { connect } from 'react-redux'

const App = ({ printconsole }) => {
  return (
    <>
      <Chat />
      <button onClick={() => printconsole('asd')}>redux</button>
    </>
  )
}
const mapstate = (state) => ({})
const dispatchprops = (dispatch) => ({
  printconsole: (item) => (dispatch(printconsole(item)))
})
export default connect(mapstate, dispatchprops)(App)