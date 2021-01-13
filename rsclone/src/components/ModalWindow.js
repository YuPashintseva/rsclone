import React from 'react'
import { Button, Modal, Container, Row, Col } from 'react-bootstrap'

class ModalWindow extends React.Component{
    render(){
        {{console.log("stupid film",this.props.filmInfo)}}
        return(
           
            <div>
                <Modal className="main-modal" show={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton onClick={this.props.handleModalShowHide}>
                     <Modal.Title id="contained-modal-title-vcenter">{this.props.filmInfo.original_title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                            <img className="poster-img-modal" src={`https://image.tmdb.org/t/p/original/${this.props.filmInfo.poster_path}`} alt={this.props.filmInfo.title}/>
                            </Col>
                            <Col xs={9} md={6}>
                                {this.props.filmInfo.overview}
                            </Col>
                        </Row>
                    </Container>
                    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModalShowHide}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    
}

export default ModalWindow;