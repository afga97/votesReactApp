import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const getColors = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];;
    }
    return color
}

const colorsCandidate = (numberColors) => {
    let colors = []
    for(let i=0; i<numberColors; i++){
        colors.push(getColors())
    }
    return colors
}

const ResultsCandidates = (props) => {
    const candidatesData = () => {
        let names = props.users.map( user => user.name )
        let values = props.users.map( user => user.users_voters.length )
        let colors= colorsCandidate(props.users.length);
        return {
            labels: names,
            datasets: [
                {
                    data: values,
                    backgroundColor: colors,
                    hoverBackgroundColor: colors
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