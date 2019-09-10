import React, { Fragment } from 'react'
import { Card, CardHeader, CardBody, FormGroup, Row, Col, Label, Input } from 'reactstrap';
import Widget02 from '../../views/Widgets/Widget02';

const DetailUser = (props) => {
    const amCandidate = props.amCandidate ? 'Candidate' : 'Voter'
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <b>Vote</b>Form
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="12" sm="12" lg="12">
                            <h2>Your information</h2>
                            <Widget02 header={props.name} type_text="text-lowercase font-weight-bold" mainText={amCandidate} icon="fa fa-user" color="primary" variant="1" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder={props.name} disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="address">Address</Label>
                                <Input type="text" id="address" placeholder={props.address} disabled />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    );
}
export default DetailUser;