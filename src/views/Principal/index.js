import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import DetailUser from '../../components/user/DetailUser'
import FormVote from '../../components/user/FormVote'
import ListUser from '../../components/user/ListUser'

const user_logged_simulate = {
    user: 'Cuenta 1',
    address: 'cja2asabj',
    amCandidate: false
}
export class Principal extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            user_logged: {},
            users: []
        };
    }

    componentDidMount() {
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        const user_logged = localStorage.user ? JSON.parse(localStorage.user) : {}
        if (Object.entries(user_logged).length === 0) {
            this.setState({
                user_logged: { ...user_logged_simulate },
                users
            })
        } else {
            this.setState({
                user_logged,
                users
            })
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <h1>{this.state.user_logged.user}, welcome to the StarkCore voting platform!</h1>
                <p>Looks like you are VOTER, go ahead and get your candidates address and start to vote. 
                    Remember, your vote is anonymous.</p>
                <Row>
                    <Col xs="12" sm="6" md="6">
                        <DetailUser {...this.state.user_logged }/>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <FormVote />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ListUser users={this.state.users}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Principal
