import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProfilePic from './v_castaneda.jpeg'

function GitHubCard() {
    return (
        <div className='card' class='card border-0'>
            <Card style={{ width: '18rem'}} class='card border-0'>
                <Card.Img variant='top' src={ProfilePic} />
                <Card.Body>
                    <Card.Title>Victor Castañeda</Card.Title>
                    <Card.Text>
                    I am budding code developer who likes 
                    to travel, workout, and dabble in woodworking. I 
                    live in NJ with my wife, Jenally, and three kids, 
                    Noah, Leah, and Joel.
                    </Card.Text>
                    <Button 
                     variant='primary'
                     href='https://www.linkedin.com/in/victor-castaneda-68942875/'>
                        LinkedIn
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard