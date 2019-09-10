import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import UsersData from '../../../UsersData'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        user: '',
        address: '',
        amCandidate: false,
      },
      users: []
    }
  }

  componentDidMount() {
    const users = UsersData;
    localStorage.users = JSON.stringify(users);
    this.getUsersLocalStorage();
  }

  getUsersLocalStorage = () => {
    const users = localStorage.users ? JSON.parse(localStorage.users) : []
    this.setState({
      users
    })
  }

  refreshUsers = () => {
    localStorage.users = JSON.stringify(this.state.users)
  }

  saveUserLogged = (user) => {
    localStorage.user = JSON.stringify(user)
  }

  changeValues = (e) => {
    const { name, value } = e.target
    if (name === 'amCandidate') {
      this.setState({
        user: {
          ...this.state.user,
          [name] : !this.state.user.amCandidate
        }
      })
    }else{
      this.setState({
        user: {
          ...this.state.user,
          [name] : value
        }
      })
    }
  }

  logInRegister = () => {
    const users = this.state.users ? this.state.users : []
    const user_register = this.state.user;
    let user_filtered = this.state.users.find( user => user.user === user_register.user)
    if (user_filtered) {
      this.saveUserLogged({...this.state.user})
    }else{
      let obj_user = {...this.state.user}
      users.push(obj_user)
      this.refreshUsers()
      this.saveUserLogged(obj_user)
    }
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Register</h1>
                      <p className="text-muted">Register into the voting app using your etherenum addres.</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="user" placeholder="Full name" autoComplete="Full name" onChange={this.changeValues}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="address" placeholder="Etherenum address" autoComplete="Etherenum address" onChange={this.changeValues}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="button" onClick={ this.logInRegister } color="primary" className="px-4">Register and continue</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>I'm a candidate</h2>
                      <p>If you are registering as a candidate, switch the toggle below on</p>
                      <Row className="justify-content-center">
                        <AppSwitch name="amCandidate" checked={this.state.amCandidate } className={'mx-1'} variant={'3d'} color={'primary'} onChange={this.changeValues}/> <p>Slide me!</p>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
