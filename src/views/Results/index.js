import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Candidates from '../../components/votes/Candidates'
import ResultsCandidates from '../../components/votes/Results'
import Winner from '../../components/votes/Winner'


export class Results extends Component {
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
                        <Candidates />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" xs="12">
                        <ResultsCandidates />
                    </Col>
                    <Col md="6" xs="12">
                        <Winner />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Results
