import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const doughnut = {
    labels: [
        'Red',
        'Green',
        'Yellow',
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
        }
    ],
};

const ResultsCandidates = (props) => {
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
                    <Doughnut data={doughnut} />
                </div>
            </CardBody>
        </Card>
    )
}

export default ResultsCandidates