import React from 'react';
import "../static/css/services.css";
import servicesData from "../instances/ServicesData";
import nhsservices from "../static/images/NHSServices.png";
import { Box, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Services = () => {
    
    const serviceCard = servicesData.map(item => {
        return (
            <Col xs={6} lg={3} key={item}>
                <Link to="#" className='card-link'>
                    <Card sx={{ maxWidth: 345 }} className='rounded-0 cards'>
                        <CardMedia
                            sx={{ height: {xs: 200, lg: 250} }}
                            image={item.imgUrl}
                            className='card-image'
                        />
                        <CardContent className='py-2 px-3 card-content'>
                            <Typography variant="h6" className='card-title fw-bold text-white'>
                            {item.serviceTitle}
                            </Typography>
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
