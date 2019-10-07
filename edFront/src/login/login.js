import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';
import  {login, signup} from './loginActions'
import If from '../template/if'

class Login extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          loginMode: false,
          email:'',
          name: '',
          password:'',
          confirmPassword:''

        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChangeEmail( event) {
        this.setState({email: event.target.value});
      }
      handleChangeName( event) {
        this.setState({name: event.target.value});
      }

      handleChangePassword( event) {
        this.setState({password: event.target.value});
      }
      handleChangePasswordConfirm( event) {
        this.setState({confirmPassword: event.target.value});
      }

      changeMode() {
        this.setState({ loginMode: !this.state.loginMode });
      }


      handleSubmit() {
        this.props.login(this.state)
      }


    render() {
    const { loginMode } = this.state;
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form onSubmit={this.handleSubmit}>
          
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </FormGroup>
          </Col>
          <If test={loginMode}>
          <Col >
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChangeName}

              />
            </FormGroup>
          </Col>
          </If>
          
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="********"
                value={this.state.password}
                onChange={this.handleChangePassword}
                
              />
            </FormGroup>
          </Col>
          <If test={loginMode}>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Confirmar password</Label>
              <Input
                type="password"
                name="passwordconfirm"
                placeholder="********"
                value={this.state.passwordConfirm}
                onChange={this.handleChangePasswordConfirm}
              />
            </FormGroup>
          </Col>
          </If>
          <div style={{"textAlign": "center", "color": "blue"}} >
          <a onClick={() => this.changeMode()}>
              {!loginMode ? "Registar" : "Login"}
            </a>
          </div>
          
          
          <Button  type="submit">{loginMode ? "Registar" : "Entrar"}</Button>
         
          
        </Form>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    signup

},dispatch)
export default connect(null, mapDispatchToProps)(Login);
