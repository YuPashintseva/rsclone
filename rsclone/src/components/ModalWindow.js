import React from 'react'
import { Button, Modal, Container, Row, Col, Image } from 'react-bootstrap'
import { Helmet } from "react-helmet";

class ModalWindow extends React.Component{
    render(){
        if (this.props.toWatchList) {
            if (localStorage.getItem('films')) {
                let arr = JSON.parse(localStorage.getItem('films'));
                if (! arr.includes(this.props.filmInfo.id)) {
                    arr.push(this.props.filmInfo.id);
                }
                localStorage.setItem('films', JSON.stringify(arr));
            } else { 
                localStorage.setItem('films', JSON.stringify([this.props.filmInfo.id]));
            }
            return(
                <div>
                    <Modal className="main-modal" show={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton onClick={this.props.handleModalShowHide}>
                         <Modal.Title id="contained-modal-title-vcenter">{this.props.filmInfo.original_title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                               Successfully added to WatchList
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
        } else {
            return (
                <div>
                    <Modal className="main-modal" show={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton onClick={this.props.handleModalShowHide}>
                        <Modal.Title id="contained-modal-title-vcenter">{this.props.filmInfo.original_title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                <Image className="poster-img-modal" src={`https://image.tmdb.org/t/p/original/${this.props.filmInfo.poster_path}`} alt={this.props.filmInfo.title} thumbnail />
                                </Col>
                                <Col xs={12} md={8}>
                                <strong>Overview: </strong>  {this.props.filmInfo.overview} <br/><br/>
                                <strong>Release date: </strong> {this.props.filmInfo.release_date}
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
            );
        }

    }
    
}

export default ModalWindow;