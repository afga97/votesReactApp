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
            timeout: 300
        };
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
                <h1>Cuenta 1, welcome to the StarkCore voting platform!</h1>
                <p>Looks like you are VOTER, go ahead and get your candidates address and start to vote. 
                    Remember, your vote is anonymous.</p>
                <Row>
                    <Col xs="12" sm="6" md="6">
                        <DetailUser />
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <FormVote />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ListUser />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Principal
