import React from 'react';
import { Box, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';

const NHSFooter = () => {
  return (
    <>
        <Box>
            <Container>
                <Row>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6'>
                            Navigate
                        </Typography>
                        <Link>Home</Link>
                        <Link>Services</Link>
                        <Link>Gallery</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                    </Col>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6'>
                            Services
                        </Typography>
                        <Link>Indegenous</Link>
                        <Link>NHS Packages</Link>
                        <Link>Body Scrubs</Link>
                        <Link>Body Massage</Link>
                        <Link>Hand Treatments</Link>
                        <Link>Foot Treatments</Link>
                        <Link>Facial Treatments</Link>
                        <Link>Manicure and Pedicure</Link>
                    </Col>
                    <Col xs={12} lg={3} className='d-flex flex-column'>
                        <Typography variant='h6'>
                            Business Hours
                        </Typography>
                        <Typography>Monday - Sunday</Typography>
                        <Typography>Doors Open at 9:00 AM - 10: 00 PM</Typography>
                    </Col>
                    <Col xs={12} lg={3} className='d-flex flex-column'>
                        <Typography variant='h6'>
                            Branches
                        </Typography>
                        <Typography>Main Branch</Typography>
                        <Typography>Casa Vallejo Branch</Typography>
                    </Col>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6'>
                            Follow Us on Socials
                        </Typography>
                        <Link><FacebookIcon/></Link>
                    </Col>
                </Row>
                <hr />
                <Typography>Allrights reserved @ <span className='fw-bold'>North Haven Spa</span></Typography>
            </Container>
        </Box>
    </>
  )
};

export default NHSFooter;
