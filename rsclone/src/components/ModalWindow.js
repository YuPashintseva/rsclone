import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class ModalWindow extends React.Component{

    /*constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }*/

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
                    <Button variant="primary" onClick={this.props.handleModalShowHide}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default ModalWindow;