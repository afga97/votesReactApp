import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import Widget02 from '../../views/Widgets/Widget02';

const Winner = () => {
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
                        <Widget02 header="Ganador" 
                            type_text="text-uppercase" 
                            mainText="0xasdfasdasdasdasdas" 
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