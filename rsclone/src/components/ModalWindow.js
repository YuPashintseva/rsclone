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
                            <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                            </Col>
                            <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                    </Container>
                    {this.props.filmInfo.overview}
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