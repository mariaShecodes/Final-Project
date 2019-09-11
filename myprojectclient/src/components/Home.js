import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import '../styles/home.css'



class Home extends Component {
    
    render() {
        return (
            <div>
                <img src={ require('./image/image.png')} className="" id="background-image" ></img>

                <section className="section1">
                    <p className="slogan">La psicología al alcance de tu mano</p>
                    <div className="btn-home">
                        <Button variant="outline-info" size="lg" href="#info">Conócenos</Button>
                    </div>
                </section>

                <div className="span-intersection">
                    <p className="info-parraf">Información más completa con autorregistros digitales</p>
                </div>

                <section className="section2" >
                    <Container>              
                        <Row>
                            <Col></Col>
                            <Col>
                                <Container className="info-icon-pack">
                                    <Row>
                                        <Col>
                                            <img src={ require('./image/clipboard.svg')} alt="icon-1" className="icon" />
                                            <p className="text-icon">Falta de integración de la Salud Mental en atención primaria</p>
                                        </Col>

                                        <Col>
                                            <img src={ require('./image/group.svg')} alt="icon-2" className="icon" />
                                            <p className="text-icon">1 de cada 4 personas sufre o sufrirá algún problema psicológico</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img src={ require('./image/iceberg.svg')} alt="icon-3" className="icon" />
                                            <p className="text-icon">Solo el 18% de españoles se plantea ir al psicólogo</p>
                                        </Col>

                                        <Col>
                                            <img src={ require('./image/negative-vote.svg')} alt="icon-4" className="icon" />
                                            <p className="text-icon">Miedo a ser estigmatizado o discriminado es una de las principales causas para no acudir al psicólogo</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section3">
                    <div className="caja-testimonios">
                        <Container>
                            <Row>
                                <Col>
                                <img src={ require('./image/testimonio01.png')} className='image-testimonio'></img>
                                </Col>
                                <Col>
                                    <p className="testimonio">Hace unos meses sufrí mi primer ataque de ansiedad. Identificar la causa no resultó fácil, pero gracias a Think App pude conocer en detalle cúando se producía, dónde me encontraba y cómo me sentía en el momento exacto.</p>
                                    <p className="name-testimonio">Sonia Rodríguez</p>
                                </Col>
                            
                                <Col>
                                <img src={ require('./image/testimonio03.png')} className='image-testimonio'></img>
                                </Col>
                                <Col>
                                    <p className="testimonio testimonio-professional">Think App es la herramienta digital que necesitaba como profesional de la salud mental, permitiendo tener información más completa en los diagnósticos y tratamientos.</p>
                                    <p className="name-testimonio name-professional">Alberto Miller</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
               

                <section className="section4" id="info">
                        <p className="info-opt-app one">Consulta tu actividad física y estado de ánimo de los últimos días</p>
                        <p className="info-opt-app two">Registra los momentos de mayor relevancia con imágenes y audio</p>
                </section>

                <footer className="footer">
                    <div className="info-business">
                        <h3>ThinkApp</h3>
                        <p className="made-with">Made with ♥ in Ironhack Madrid</p>
                    </div>
                </footer>
            </div>

        )
    }
}
export default Home
