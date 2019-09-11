import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import Widget02 from '../../views/Widgets/Widget02';

const Winner = (props) => {
    const users = props.users ? props.users : []
    var candidaeWinner = {}
    if (users.length > 0) {
        candidaeWinner = users.reduce( (winner, user) => {
            if (winner) {
                return winner.users_voters.length > user.users_voters.length ? winner : user
            } else {
                return user
            }
        })
    }
    let is_draw = false;
    if (Object.keys(candidaeWinner).length > 0){
        let votesWinner = candidaeWinner.users_voters.length
        for (let user of users) {
            if (user.id !== candidaeWinner.id){
                if ( Number(user.users_voters.length) === votesWinner) {
                    is_draw = true;
                }
            }
        }
        
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
                    { !is_draw ? 
                        <Widget02 
                            header={ candidaeWinner ? candidaeWinner.name : 'Ninguno' } 
                            type_text="text-uppercase" 
                            mainText={ candidaeWinner ? candidaeWinner.address : 'No disponible' } 
                            smallText="presidente" 
                            class_small="text-uppercase font-weight-bold"
                            icon="fa fa-user" color="primary" variant="1" />
                        :
                        <Widget02 
                            header="Draw"
                            type_text="text-uppercase" 
                            mainText="" 
                            smallText="presidente" 
                            class_small="text-uppercase font-weight-bold"
                            icon="fa fa-user" color="primary" variant="1" />
                    }
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Winner