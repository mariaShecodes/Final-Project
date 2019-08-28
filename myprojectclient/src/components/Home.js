import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import '../styles/home.css'

class Home extends Component {
    
    render() {
        return (
            <div>
                <section className="section1">
                    <p className="slogan">La psicología al alcance de tu mano</p>
                    <div className="btn-home">
                        <Button variant="outline-secondary" href="#info">Conócenos</Button>
                    </div>
                </section>

                <div className="span-intersection"></div>

                <section className="section2" id="info">
                    <Container>              
                        <Row>
                            <Col></Col>
                            <Col>
                                <Container className="info-icon-pack">
                                    <Row>
                                        <Col>
                                            <img src={ require('./image/clipboard.svg')} alt="icon-1" className="icon" />
                                            <p className="text-icon">Falta de integración de Salud Mental en atención primaria</p>
                                        </Col>

                                        <Col>
                                            <img src={ require('./image/group.svg')} alt="icon-2" className="icon" />
                                            <p className="text-icon">1 de cada 4 persona sufre o sufrirá algún problema psicológico</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img src={ require('./image/iceberg.svg')} alt="icon-3" className="icon" />
                                            <p className="text-icon">Solo el 18% de españoles se plantea ir al psicólogo</p>
                                        </Col>

                                        <Col>
                                            <img src={ require('./image/negative-vote.svg')} alt="icon-4" className="icon" />
                                            <p className="text-icon">La estigmatizado o discriminado es uno de una de las principales causas </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section3">
                </section>

                <footer className="footer">
                    <div className="info-business">
                        <h3>ThinkApp</h3>
                
                        {/* <h5>Follow Us</h5>
                        <ul>
                            <li><a className="link-footer" href="#" target="_blank">Twitter</a></li>
                            <li><a className="link-footer" href="#" target="_blank">Facebook</a></li>
                            <li><a className="link-footer" href="#" target="_blank">Instagram</a></li>
                        </ul> */}
                        <p className="address">Dirección</p>
                        <address className="address address-complet">ThinkApp, Paseo de la Chopera, 14, 28045 Madrid <br/>+33 (0) 619 193 088 </address>
                    </div>
                </footer>
            </div>

        )
    }
}
export default Home
