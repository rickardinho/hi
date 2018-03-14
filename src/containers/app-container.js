import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app.js';

const mapStateToProps = (state) => {
    console.log('state: ', state);

    return {


    };
};

const mapDispatchToProps = (dispatch) => {

    return {

    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
