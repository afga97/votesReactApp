import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import Widget02 from '../../views/Widgets/Widget02';

const Winner = (props) => {
    const users = props.users ? props.users : []
    var winner = {}
    if (users.length > 0) {
        winner = users.reduce( (winner, user) => {
            if (winner) {
                return winner.users_voters.length > user.users_voters.length ? winner : user
            } else {
                return user
            }
        })
    }
    
    return (
        <Card>
            <CardHeader>
                Doughnut Chart
                <div className="card-header-actions">
                    <small className="text-muted">docs</small>
                </div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col md="12" xs="12">
                        <Widget02 
                            header={ winner ? winner.name : 'Ninguno' } 
                            type_text="text-uppercase" 
                            mainText={ winner ? winner.address : 'No disponible' } 
                            smallText="presidente" 
                            class_small="text-uppercase font-weight-bold"
                            icon="fa fa-user" color="primary" variant="1" />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Winner