import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class ModalWindow extends React.Component{
    render(){
        return(
            <div>
                <Modal show={true}>
                    <Modal.Header closeButton onClick={this.props.handleModalShowHide}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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