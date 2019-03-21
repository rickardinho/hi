import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { emailValidator as validate } from './form-validation';
import { FormTextInput } from './form-components';
import { ConfirmButton, Row } from '../../styles/styles';
import { ConfirmButtonText, GeneralText, H3, InputText } from '../../styles/text';
import colours from '../../styles/colours';
// import { connectAlert } from '../Alert';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Fabric from 'react-native-fabric';
import Spinner from '../general/spinner';


class ConfirmEmail extends Component {


  renderServerError = () => {
    if (this.props.confirmEmailError) {
      return <GeneralText style={{ color: 'red' }}>{ this.props.confirmEmailError }</GeneralText>;
    }
  }

  renderServerMessage = () => {
    if (this.props.message) {
      return <GeneralText style={{ color: 'green' }}>{ this.props.message }</GeneralText>;
    }
  }

  renderButton = () => {
    const { handleSubmit, handleSubmitForm, isConfirming } = this.props;
    if (isConfirming) {
      return <Spinner size='large' />;
    }
    return (
      <ConfirmButton
        style={{ backgroundColor: colours.orange, borderColor: colours.orange }}
        onClick={handleSubmit(handleSubmitForm)}
      >
        <ConfirmButtonText>Reset Password</ConfirmButtonText>
      </ConfirmButton>
    );
  };

  // <FeedHeader>
  //   { !this.props.isConnected && this.renderAlert() }
  // </FeedHeader>

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
            <H3>Reset password</H3>
          </Row>
          <div style={{ height: 1, backgroundColor: colours.borderColour, marginTop: 20, marginBottom: 20 }} />
          <div style={{ flex: 1, backgroundColor: colours.white }}>

            <div style={{ alignItems: 'center', marginHorizontal: 10, marginTop: 50, marginBottom: 70 }}>
              <Row style={{ justifyContent: 'flex-start' }}>

                <InputText>Please enter the email address you used to register and we will send an email link to reset your password</InputText>
                { this.renderServerMessage() }
              </Row>
            </div>
            <div>

              <div>
                <Field name='email' component={ FormTextInput } isEmail placeholder='Email address' />

              </div>
              { this.renderServerError() }
              <div style={{ marginTop: 20, alignItems: 'center', flexDirection: 'column' }}>

                { this.renderButton() }

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const decoratedComponent = reduxForm({ form: 'confirmEmail', validate })(ConfirmEmail);
export default hoistNonReactStatic(decoratedComponent, ConfirmEmail);
// export default connectAlert(hoistNonReactStatic(decoratedComponent, ConfirmEmail));
