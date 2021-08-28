import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Row, Col, Container } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import { Button } from '../ButtonElements'
import { HeroContainer, Icons, HomeText, HomeName, PrimaryText, HighlightedText, HomeRole, RoleTagline, HomeOptions } from './HeroElements'

const HeroSection = () => {

    return (
        <div className="main-container">
        <HeroContainer>
        <Container id="home">
            <Row>
                <Col>
                    <HomeText>
                        <Icons>
                            <FaGithub to="https://github.com/pariweshtamr" />
                            <FaLinkedinIn to="https://www.linkedin.com/in pariwesh-tamrakar-a33200217/" />                           
                            <FaTwitter to="https://twitter.com/Pariwesh15"/>                    
                            <FaFacebookF to="https://www.facebook.com/pariweshtamr7/" />
                            <a href= "https://www.instagram.com/pariwesh.tamrakar/" target="_blank"> <FaInstagram /></a>
                        </Icons>
                        <HomeName>                  
                            <PrimaryText>Hello, I'm</PrimaryText>
                            <HighlightedText>Pariwesh</HighlightedText>                           
                        </HomeName>
                        <HomeRole>
                            <PrimaryText>
                                <h1> <Typewriter                       
                                        options={{
                                            strings: ['Front-end developer', 'Designer'],
                                            autoStart: true,
                                            loop: true,                   
                                        }}             
                                    />   
                                </h1>
                            </PrimaryText>
                            <RoleTagline>
                                Knack of building applications with front end operations       
                            </RoleTagline>
                        </HomeRole>
                        <HomeOptions>                        
                        <Button to='/'>HIRE ME</Button>
                        <Button to='/'>GET RESUME</Button>
                        </HomeOptions>
                    </HomeText>
                </Col>
                </Row>
        </Container>
        </HeroContainer>
        </div>
    )
}

export default HeroSection
