import React from 'react';
import { Card, CardHeader, CardBody, Table, Badge } from 'reactstrap';

const RowsUser = (props) => {
    let user_logged = props.user_logged.id

    const getBadge = (votes, user_logged) => {
        return votes.includes(user_logged) ? 'success' : 'danger'
    }
    
    return !props.users ? <tr><td colSpan="4" className="text-center">No results found</td></tr> :
        props.users.map((e, i) => (
            <tr key={i}>
                <td>{e.name}</td>
                <td>{e.address}</td>
                <td>{e.amCandidate ? 'true': 'false'} </td>
                <td><Badge color={getBadge(e.users_voters, user_logged)}> {e.users_voters.includes(user_logged) ? 'Voted' : 'No voted' } </Badge></td>
            </tr>
        ))
}

const ListUser = (props) => {
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
                        <RowsUser users={props.users} user_logged={props.user_logged}/>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default ListUser