import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

// this function receives a state object. It turns that data into properties
// that are automagically available in the component that is 'connected' to 
// this container; see the call to connect() below.
const mapStateToProps = state => ({
  count: state
})

// this function receives a parameter of type function called dispatch
// it returns a map which contains all the functions that are 
// available to be called from the UI elements defined in the
// "connected" component

// User interactions cause the functions defined below to be triggered
// These functions just use the dispatch function to "dispatch actions"
// Think of this as broadcasting an event. One part of the system needs 
// to inform the rest of the system that something happened. 
// These actions (aka events) are processed by reducer functions. 
// The reducer's job is to react to these events by 'mutating' app state
const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

// the connect function returns a 'wired up' component
// app state is passed in as component props
// event handler functions are passed in as component props
// the 'connected' component is dumb
// it just has to 
// - render (and re-render) itself based on props which are updated as state changes 
// - delegate event handling to it's parent container
// life couldn't be simpler for these little guys

export default connect(mapStateToProps, mapDispatchToProps)(Counter)