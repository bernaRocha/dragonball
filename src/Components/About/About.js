import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../../Styles/About.scss'
import avatar from '../../Img/avatar.jpg'

export class About extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={avatar} className='avatar' />
                <Card.Body>
                    <Card.Title>Bernardo Monteiro Rocha</Card.Title>
                    <Card.Text>
                    Estudante de desenvolvimento Web. <br />
                    Especialização em Front-End. <br />
                    HTML, CSS, JavaScript, ReactJS <br />
                    </Card.Text>
                    <Link className='btn btn-primary' to={{pathname: 'https://github.com/bernaRocha'}} 
                    target="_blank">Visite o meu GitHub</Link>
                </Card.Body>
            </Card>
        )
    }
}