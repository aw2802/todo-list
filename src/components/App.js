import React from 'react';
import {bindActionCreators} from 'redux';
import {connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

let App = () => (
	<div>
		<Main />
	</div>
)

function mapStateToProps(state){
	return{
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
