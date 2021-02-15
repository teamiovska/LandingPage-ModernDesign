import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Home extends React.Component{
   
    render(){
        return(
            <div id="home">
                <Row> 
                    <Col xs={12} sm={12} md={6} lg={6} className="left-home">
                      <p>LMP</p>
                      <hr></hr>
                      <h4>Turn ON the light in your home</h4>
                      <Link to="/catalog"><Button variant="outline-warning" size="lg" block>Catalog</Button></Link>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="right-home">
                        <Carousel>
                            {
                              this.props.productsList.map((product,i)=>{
                                return(
                                    <Carousel.Item key={i}>
                                    <img
                                    className="d-block w-100"
                                    src={product.image}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                )
                                })
                            }
                        </Carousel>
                  </Col>                    
                </Row>
            </div>
        )
    }
}
 