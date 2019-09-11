import React from 'react'
import { Card, CardHeader, CardBody, Table, Badge } from 'reactstrap';


const RowsCandidates = (props) => {
    const getBadge = (profile) => {
        return profile === 'Boring president' ? 'danger' : 'success'
    }
    
    return !props.users ? <tr><td colSpan="4" className="text-center">No results found</td></tr> :
        props.users.map((e, i) => (
            <tr key={i}>
                <td>{e.name}</td>
                <td>{e.address}</td>
                <td>{e.users_voters.length}</td>
                <td><Badge color={getBadge(e.profile)}>{ e.profile }</Badge></td>
            </tr>
        ))
}


const Candidates = (props) => {
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
                            <th>Number of votes?</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RowsCandidates users={props.users}/>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default Candidates