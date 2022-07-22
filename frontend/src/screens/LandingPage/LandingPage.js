import React, { useEffect } from 'react'
import "./LandingStyles.css"
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = ({ history }) => {

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")

        if (userInfo) {
            history.push("/mynotes")
        }
    }, [history]);


    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to User Notes</h1>
                            <p className='subtitle'>One Safe place for all your Notes.</p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>
                                    Login
                                </Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>
                                    Singup
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage