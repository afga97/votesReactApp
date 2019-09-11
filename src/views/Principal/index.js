import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import DetailUser from '../../components/user/DetailUser'
import FormVote from '../../components/user/FormVote'
import ListUser from '../../components/user/ListUser'

export class Principal extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            address: '',
            user_logged: {},
            users: []
        };
    }

    componentDidMount() {
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        const get_user = localStorage.user ? JSON.parse(localStorage.user) : {}
        let user_logged = Object.entries(get_user).length === 0 ?  { ...users[0] } : get_user
        this.setState({
            user_logged,
            users
        })
    }

    refreshUsers = () => {
        localStorage.users = JSON.stringify(this.state.users)
    }

    getUsersLocalStorage = () => {
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.setState({
            users
        })
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    votedCandidate = () => { 
        const user_finded = this.state.users.find( user => user.address === this.state.address )
        if (!user_finded) {
            console.log('No se encontro un usuario con esta address')
        } else {
            if (!user_finded.amCandidate) {
                console.log('No puede votar por una persona que no es candidata')
            } else if (user_finded.users_voters.includes(this.state.user_logged.id)){
                console.log('Ya has votado por esta persona')
            } else {
                this.setState({ address: '' }, () => {
                    user_finded.users_voters.push(this.state.user_logged.id)
                    this.refreshUsers();
                    this.getUsersLocalStorage();
                })
            }
        }
    }

    onChangeAddress = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="animated fadeIn">
                <h1>{this.state.user_logged.name}, welcome to the StarkCore voting platform!</h1>
                <p>Looks like you are VOTER, go ahead and get your candidates address and start to vote. 
                    Remember, your vote is anonymous.</p>
                <Row>
                    <Col xs="12" sm="6" md="6">
                        <DetailUser {...this.state.user_logged }/>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <FormVote 
                            address={this.state.address} 
                            onChangeAddress={this.onChangeAddress} 
                            votedCandidate={this.votedCandidate}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ListUser users={this.state.users} user_logged={this.state.user_logged}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Principal
