import React from 'react';
import "../static/css/services.css";
import nhslogo from "../static/images/NHSlogo.png";
import servicesData from "../instances/ServicesData";
import nhsservices from "../static/images/NHSServices.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Services = () => {
    
    const serviceCard = servicesData.map((item, index) => {
        return (
            <Col xs={6} lg={3} key={item}>
                <Link to="#" className='card-link'>
                    <Card className={`service-card service-card-${index} cards`}>
                        <Box className="p-2">
                            <img src={nhslogo} alt="North Haven Spa Logo" width={50} />
                        </Box>
                        <CardContent className='h-100 d-flex flex-column justify-content-end p-2'>
                            <Typography className='card-text text-white py-1 px-2'>{item.serviceTitle}</Typography>
                            <Button variant='contained' className='d-flex align-items-center rounded-0 py-1 px-2 justify-content-start card-button text-white'>
                                Explore
                                <ArrowForwardIcon className='arrow-icon ms-2'/>
                            </Button>
                        </CardContent>
                    </Card>
                </Link>
            </Col>
        )
    });

  return (
    <>
        <Box id="services" className="py-5">
            <Container>
                <Row>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center mb-3'>
                        <img src={nhsservices} width={250} alt="North Haven Spa Services" className='mb-3' />
                        <Typography variant='h6' className='text-center services-subtitle'>The Art of Relaxation: Our Services, Your Escape.</Typography>
                    </Col>
                </Row>
                <Row className='g-4'>
                    {serviceCard}
                </Row>
            </Container>
        </Box>
    </>
  )
};

export default Services;
