import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export class Catalog extends React.Component{
    render(){
        return(
            <div id="catalog">
                <Row>
                    <Col xs={10} sm={10} md={11} lg={11} className="catalog-div">
                            {
                            this.props.productsList.map((product,i)=>{
                                return(
                                    <Card key={i} style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product.image}/>
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                            {product.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                                })
                            }     
                    </Col>
                    <Link to="/">             
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>              
                    </Link>
                </Row>
            </div>  
        )
    }
}