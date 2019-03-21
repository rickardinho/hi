import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import hoistNonReactStatic from 'hoist-non-react-statics';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FormTextInput, FormPasswordInput } from './form-components';
// import HeaderBack from '../common/CreateHeaderBackground';
import { loginValidator as validate } from './form-validation';
import colours from '../../styles/colours';
import { ConfirmButton, Row } from '../../styles/styles';
import { ConfirmButtonText, InputText, H3 } from '../../styles/text';
// import { feedVertPaddingScale, moderateScale } from '../../styles/scaling';
import Spinner from '../general/spinner';


class Login extends Component {

  constructor (props) {
    super(props);
    // console.log('constructor this props', this.props);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.showForgotPasswordModal = this.showForgotPasswordModal.bind(this);
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

  render () {

    const { handleSubmit, handleSubmitForm, handleResetLogin, isConnected, isLoggingIn, serverError, history } = this.props;
    // timeout maybe?
    if (isLoggingIn) {
      return <div style={{ flex: 1, width: '100%', height: '100%' }}><Spinner /></div>;
    }

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
            <H3>Sign in</H3>
          </Row>
          <div style={{ height: 1, backgroundColor: colours.borderColour, marginTop: 20, marginBottom: 20 }} />

          <Field
            name='email'

            component={ FormTextInput }
            isEmail
            isLogindiv
            placeholder='* Email'
            iconName='envelope-o'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />

          <Field
            name='password'

            component={ FormPasswordInput }
            isLogindiv
            placeholder='* Password'
            iconName='lock'
            focussedColor={ colours.main }
            unfocussedColor={ colours.lightgray }
          />

          <Row style={{ justifyContent: 'flex-end' }}>
            <InputText>* Mandatory fields</InputText>
          </Row>

          <Row style={{ width: '100%', justifyContent: 'flex-start' }}>


            <button
              type='button'
              style={{ justifyContent: 'flex-start', backgroundColor: 'transparent', borderWidth: 0 }}

              onClick={ this.showForgotPasswordModal }
            >

              <InputText style={{ color: colours.red }}>Reset password</InputText>

            </button>


          </Row>


          <div style={{ alignItems: 'center', flexDirection: 'column' }}>
            <ConfirmButton
              style={{ backgroundColor: colours.orange, borderColor: colours.orange }}

              disabled={isLoggingIn}
              onClick={handleSubmit(handleSubmitForm)}
            >
              <ConfirmButtonText>Sign in</ConfirmButtonText>
            </ConfirmButton>

            <div style={{ height: 1, backgroundColor: colours.borderColour, marginTop: 20, marginBottom: 0 }} />

            <Row style={{ justifyContent: 'flex-start' }}>
              <button
                type='button'
                style={{ backgroundColor: 'transparent', borderWidth: 0 }}

                onClick={ this.showSignUpModal }
              >
                <Row>
                  <InputText>No account yet?&nbsp;</InputText>
                  <InputText style={{ color: colours.red }}>Sign up</InputText>
                </Row>
              </button>
            </Row>
          </div>


        </div>
      </div>
    );
  }
}

const decoratedComponent = reduxForm({ form: 'login', validate })(Login);
export default hoistNonReactStatic(decoratedComponent, Login);
// export default connectAlert(hoistNonReactStatic(decoratedComponent, Login));
