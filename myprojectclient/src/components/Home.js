import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

// import '../styles/home.css'

class Home extends Component {
    
    render() {
        return (
            <div>
                <section>
                {/* <img src={ require('./image.png') } alt="Portada" className="image-portada"></img> */}
                    <p className="slogan">La psicología al alcance de tu mano</p>
                    <div className="btn-home">
                        <Button variant="outline-secondary">Conócenos</Button>
                    </div>
                </section>
                <section>
                    <div>Estoy debajo de la imagen</div>
                    <Container>              
                        <Row>
                            <Col>1 of 2</Col>
                            <Col>2 of 2</Col>
                        </Row>
                        <Row>
                            <Col>1 of 2</Col>
                            <Col>2 of 2</Col>
                    
                        </Row>
                    </Container>
                </section>
            
        
               
                {/* <img src={ require('./image01.png') } alt='Info-data' className="image-data"></img> */}
         
            </div>

        )
    }
}
export default Home