import React from 'react';
import { Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import close from './assets/close.png'


class Watchlist extends React.Component{
    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {
        let filmsList = JSON.parse(localStorage.getItem('films'));
        this.setState({data: filmsList});
    }
    render() {
        
        if (this.state.data) {
            return (
                <div id = "fp" className="container-fluid wrapperStyle">
                    <div className="top-menu-wrapper">
                        <div className="head-text">Your Watchlist</div>
                        <button className="back-button">Home</button>
                    </div>
                    <div>
                    {this.state.data.map(el => (
                        <Row className="row-bottom-padding">
                            <Col xs={6} md={4}>
                                {el[0] ? <Image className="poster-img-modal img-watchlist" src={`https://image.tmdb.org/t/p/original/${el[0]}`} alt={el[0]} thumbnail />: null}
                            </Col>
                            <Col xs={11} md={7}>
                                {el[3] ? <div><strong>Title: </strong> {el[3]}</div> : null}
                                {el[1] ? <div><strong>Release date: </strong>  {el[1]}</div> : null}
                                {el[2] ? <div><strong>Stars: </strong> {el[2]}</div> : null}
                                {el[4] ? <div><strong>Overview: </strong> {el[4]}</div> : null}
                            </Col>
                            <Col xs={1} md={1}>
                                {el[0] ? <div className="background-close-btn"><Image className="close-btn-img" src={close} alt="close button" /></div> : null}
                            </Col>
                        </Row>
                        
                    ))}
                    </div>
                </div>
            )
        } else {
            return (<div id = "fp" className="container-fluid wrapperStyle">
                        <div className="head-text">Your Watchlist</div>
                        Nothing was found
                    </div>);
        }

    }
}

export default Watchlist;