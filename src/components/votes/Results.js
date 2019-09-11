import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';


const ResultsCandidates = (props) => {
    const candidatesData = () => {
        let names = props.users.map( user => user.name )
        let values = props.users.map( user => user.users_voters.length )
        
        return {
            labels: names,
            datasets: [
                {
                    data: values,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ],
                }
            ]
        }
    }
    return (
        <Card>
            <CardHeader>
                Doughnut Chart
                <div className="card-header-actions">
                    <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                    </a>
                </div>
            </CardHeader>
            <CardBody>
                <div className="chart-wrapper">
                    <Doughnut data={candidatesData} />
                </div>
            </CardBody>
        </Card>
    )
}

export default ResultsCandidates