import React from 'react';
import { Button, Modal, Container, Row, Col, Image } from 'react-bootstrap'

class Watchlist extends React.Component{
    constructor() {
        super();
    }
    render() {
        let filmsList = JSON.parse(localStorage.getItem('films'));
        if (filmsList) {
            return (
                <div id = "fp" className="container-fluid wrapperStyle">
                    <div className="head-text">Your Watchlist</div>
                    <div>
                    {filmsList.map(el => (
                        <Row className="row-bottom-padding">
                            <Col xs={6} md={4}>
                                {el[0] ? <Image className="poster-img-modal img-watchlist" src={`https://image.tmdb.org/t/p/original/${el[0]}`} alt={el[0]} thumbnail />: null}
                            </Col>
                            <Col xs={12} md={8}>
                                {el[3] ? <div><strong>Title: </strong> {el[3]}</div> : null}
                                {el[1] ? <div><strong>Release date: </strong>  {el[1]}</div> : null}
                                {el[2] ? <div><strong>Stars: </strong> {el[2]}</div> : null}
                                {el[4] ? <div><strong>Overview: </strong> {el[4]}</div> : null}
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