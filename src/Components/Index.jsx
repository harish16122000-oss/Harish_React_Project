import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
 
const Index = () => {
   const a=  [
    {id:1, head:"Fast Delivery", text:"Fast and reliable delivery Right to your doorstep"},
    {id:2, head:"Free Shipping", text:"Free shipping on all orders No extra charges"},
    {id:3, head:"Best Quality", text:"Premium quality products Trusted and long-lasting"},

  ];
  return (
    
    <div>
      <Carousel className='carousel1'>
      <Carousel.Item interval={1000}>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
         
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <div className='h1 text-center mt-5 blog'>Why Shop With Us <span className='blog1'>__</span> </div>
       </div>
<div className='mt-5 pt-md-5 d-md-flex justify-content-center card0'>
{a.map((ab)=>(
      <Card style={{ width: '18rem' }}className='text-center  card1'key={ab.id}>
      <p className='mt-5'></p>
     
      <Card.Body>
        <Card.Title>{ab.head}</Card.Title>
        <Card.Text>
          {ab.text}
        </Card.Text>
       
      </Card.Body>
    </Card>))}
    </div>
    </div>
  )
}

export default Index
