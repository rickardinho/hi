import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import hoistNonReactStatic from 'hoist-non-react-statics';
// import Fabric from 'react-native-fabric';
import { persistor } from '../../init-store';
import { FormTextInput, FormPasswordInput } from './form-components';
import { signupValidator as validate } from './form-validation';
import Spinner from '../general/spinner';
import { ConfirmButton, Row } from '../../styles/styles';
import { ConfirmButtonText, H3, InputText } from '../../styles/text';

import colours from '../../styles/colours';
// import { connectAlert } from '../Alert';

// const { Answers } = Fabric;

class Signup extends Component {

  constructor (props) {
    super(props);
    // console.log('constructor this props', this.props);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    
  }

  componentWillMount () {
    persistor.pause();
  }

  componentDidMount () {
    // Answers.logCustom('Signup.js Mounted', { additionalData: 'nothing' });
  }

  showSignInModal () {
    const { showSignInModal } = this.props;

    showSignInModal();

  }

  showSignUpModal () {
    const { showSignUpModal } = this.props;

    showSignUpModal();
  }

  showForgotPasswordModal () {
    const { showForgotPasswordModal } = this.props;

    showForgotPasswordModal();
  }


  renderButton = () => {
    const { handleSubmit, handleSubmitForm, isSigningUp } = this.props;
    if (isSigningUp) {
      return <div style={{ justifyContent: 'center', alignItems: 'center' }}><Spinner size={20} /></div>;
    }
    return (
      <div style={{ alignItems: 'center', marginTop: 8 }}>
        <ConfirmButton
          style={{ backgroundColor: colours.orange, borderColor: colours.orange }}
          testID='SIGN UP Submit'

          disabled={isSigningUp}
          onClick={handleSubmit(handleSubmitForm)}
        >
          <ConfirmButtonText>Sign up</ConfirmButtonText>
        </ConfirmButton>

      </div>

    );
  };

  renderServerError = () => {
    if (this.props.serverError) {
      return (
        <Row>
          <p style={{ color: 'red' }}>{this.props.serverError}</p>
        </Row>
      );
    }
  }

  render () {


    return (


      <div
        style={{
          flex: 1,
          backgroundColor: colours.white,
          borderBottomWidth: 1,
          borderBottomColor: colours.lightgray,
          justifyContent: 'center',
          paddingBottom: 20 }}
      >


        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>

          <Row>
            <H3>Sign up</H3>
          </Row>
          <div style={{ width: '100%', height: 1, backgroundColor: colours.borderColour, marginTop: 10, marginBottom: 10 }} />

          <Field
            name='firstname'
            component={ FormTextInput }
            placeholder='* Firstname'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />


          <Field
            name='surname'
            component={ FormTextInput }
            placeholder='* Surname'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />


          <Field
            name='email'
            component={ FormTextInput }
            placeholder='* Email'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
            isEmail
          />


          <Field
            name='password'
            component={ FormPasswordInput }
            placeholder='* Password'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />


          <Field
            name='confirmPassword'
            component={ FormPasswordInput }
            placeholder='* Confirm password'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />


          <Row style={{ justifyContent: 'flex-end' }}>
            <InputText>* Mandatory fields</InputText>
          </Row>

          { this.renderServerError() }
          <Row style={{ justifyContent: 'flex-start' }}>
            <InputText>By creating an account, I accept the&nbsp;</InputText>
            <InputText style={{ color: colours.red }}>General Terms of use</InputText>
          </Row>
          { this.renderButton() }

          <div style={{ width: '100%', height: 1, backgroundColor: colours.borderColour, marginTop: 10 }} />
          <Row style={{ justifyContent: 'flex-start' }}>
            <button
              type='button'
              style={{ backgroundColor: 'transparent', borderWidth: 0 }}

              onClick={ this.showSignInModal }
            >
              <Row>
                <InputText>Already have an account?&nbsp;</InputText>
                <InputText style={{ color: colours.red }}>Sign in</InputText>
              </Row>
            </button>
          </Row>

        </div>

      </div>


    );
  }
}

const decoratedComponent = reduxForm({ form: 'signup', validate })(Signup);
export default hoistNonReactStatic(decoratedComponent, Signup);
// export default connectAlert(hoistNonReactStatic(decoratedComponent, Signup));
