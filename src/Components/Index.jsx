import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 import { TbTruckDelivery } from "react-icons/tb";
 import { SiFreecad } from "react-icons/si";
 import { FaAward } from "react-icons/fa";
const Index = () => {
   const a=  [
    {id:1, image:<TbTruckDelivery />, head:"Fast Delivery", text:"Fast and reliable delivery Right to your doorstep"},
    {id:2, image:<SiFreecad />, head:"Free Shipping", text:"Free shipping on all orders No extra charges"},
    {id:3, image:<FaAward />, head:"Best Quality", text:"Premium quality products Trusted and long-lasting"},

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

    <Container>
    
    <div className='blog0'>
      <div className='h1 text-center mt-5 blog '>Why Shop With Us <span className='blog1'>__</span> </div>
       </div>
<div className='mt-5 pt-md-5 d-md-flex justify-content-center card0 '>
{a.map((ab)=>(
      <Card style={{ width: '18rem' }}className='text-center  
      card1 w-100'key={ab.id}>
      <p className='mt-5'></p>
     <i className='icon'>{ab.image}</i>
      <Card.Body>
        <Card.Title className='h1'>{ab.head}</Card.Title>
        <Card.Text className='mt-1'>
          {ab.text}
        </Card.Text>
       
      </Card.Body>
    </Card>))}
    </div>
    
    </Container>

    <div className="mt-5 pt-3 w-100">
      <div className='view  position-relative '></div>
     <div className="view1 position-absolute start-50"> 
      <div className="view2 h1 ">#NEW ARRIVALS</div>
      <p className="mt-md-4 w-md-75 view3">Discover our latest collection with fresh styles and premium quality. <span className='view5'>Upgrade your wardrobe with the newest trends. Explore the newest additions to our store. Stylish, comfortable, and designed for everyday wear. </span> </p>
        <Button className='view4 mt-md-5 p-md-3'>View Products</Button>
      
    </div>
    </div>
    </div>
  )
}

export default Index
