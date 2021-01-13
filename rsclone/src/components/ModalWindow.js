import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class ModalWindow extends React.Component{
    render(){
        {{console.log("stupid film",this.props.filmInfo)}}
        return(
           
            <div>
                <Modal show={true}>
                    <Modal.Header closeButton onClick={this.props.handleModalShowHide}>
                    <Modal.Title>{this.props.filmInfo.original_title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.filmInfo.overview}</Modal.Body>
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