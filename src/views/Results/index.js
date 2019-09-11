import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Candidates from '../../components/votes/Candidates'
import ResultsCandidates from '../../components/votes/Results'
import Winner from '../../components/votes/Winner'


export class Results extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        const users_candidates = users.filter( user => user.amCandidate === true)
        this.setState({
            users: users_candidates
        })
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="12" xs="12" lg="12">
                        <h1>Election Results</h1>
                        <p>Here you will be able to view the results from the past election, all recorded on the blockchain</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" xs="12" lg="12">
                        <Candidates users={ this.state.users }/>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" xs="12">
                        <ResultsCandidates users={ this.state.users }/>
                    </Col>
                    <Col md="6" xs="12">
                        <Winner users={ this.state.users }/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Results
