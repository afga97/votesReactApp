import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

class ListUser extends Component  {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> Registered Voters
                </CardHeader>
                <CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Fullname</th>
                                <th>Address</th>
                                <th>Candidate?</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}

export default ListUser