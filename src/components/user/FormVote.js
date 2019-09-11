import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const FormVote = (props) => {
    return (
        <Card>
            <CardHeader>
                <b>Vote</b>Form
            </CardHeader>
            <CardBody>
                <Row>
                    <Col md="12">
                        <h2>Your candidate</h2>
                        <FormGroup>
                            <Label htmlFor="address">Candidate Address</Label>
                            <Input type="text" 
                                name="address" 
                                value={props.address}
                                placeholder="0x123..."
                                onChange={ (e) => props.onChangeAddress(e) }
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <FormGroup>
                            <Button type="button" block color="primary" size="md"
                                onClick={ () => props.votedCandidate() }
                            >Save</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default FormVote;
