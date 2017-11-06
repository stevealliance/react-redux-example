import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {
  requestLogin,
  requestLogout,
} from '../../modules/user/actions';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      loginForm: {
        strategy: 'local'
      }
    }
  }

  textChanged = (e) => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [e.target.name]: e.target.value,
      }
    });
  }

  buttonClicked = () => {
    this.props.requestPageData(this.state.textBox);
  }
  submitLogin = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    this.props.requestLogin(this.state.loginForm)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitLogin}>
          <table>
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>email:</td>
                <td>
                  <input name="email" onChange={this.textChanged} />
                </td>
              </tr>
              <tr>
                <td>password:</td>
                <td>
                  <input name="password" onChange={this.textChanged} />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input type="submit" value="Login" />
                </td>
              </tr>
            </tbody>
          </table>

        </form>
        <pre style={{ textAlign: "left" }}>
          {this.props.loginData && JSON.stringify(this.props.loginData, null, 2)}
        </pre>
      </div>
    )
  }
}


function mapStateToProps(appState, ownProps) {

  return {
    ui: appState.ui,
    user: appState.user,
    loginData: appState.user.loginData
  }
}

function mapDispatchToProps(dispatch) {

  return {
    ...bindActionCreators({
      requestLogin,
      requestLogout
    }, dispatch)
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
