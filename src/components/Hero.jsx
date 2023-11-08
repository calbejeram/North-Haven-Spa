import React from 'react';
import "../static/css/hero.css";
import nhsbrandname from "../static/images/NHSBrandname.png";
import { Box, Typography, Button } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
        <Box id="hero">
            <Container className='hero-container'>
                <Row className='h-100'>
                    <Col xs={12} lg={6} className='d-flex flex-column justify-content-center align-items-start'>
                        <img src={nhsbrandname} width={300} alt="North Haven Spa Brand Name" className='z-1 mb-3 d-block d-lg-none' />
                        <Typography variant="h1" className='text-white z-1 mb-3 text-uppercase hero-title fw-bold'>
                                Revitalize your spirit
                        </Typography>
                        <Typography variant='h5' className='text-white z-1 mb-3 hero-subtitle'>
                            Guide you towards a world of rejuvenation and healing
                        </Typography>
                        <Button variant="contained" className='z-1 bg-success'>See services</Button>
                    </Col>
                </Row>
            </Container>
        </Box>
    </>
  )
};

export default Hero;
