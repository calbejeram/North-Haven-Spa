import React from 'react';
import contactus from "../static/images/NHSContactUs.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Typography, Link } from '@mui/material';
import { Col, Container, Row, Stack, Tab, Tabs } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Box id="contactUs" className="py-5">
        <Container>
            <Row>
                <Col xs={12} className='d-flex flex-column align-items-center justify-content-center mb-3'>
                    <img src={contactus} width={250} alt="North Haven Spa Contacts" className='mb-3' />
                </Col>
            </Row>
            <Row>
                <Tabs
                    defaultActiveKey="Casa Vallejo Branch (Upper Session)"
                    id="contactUsTabs"
                    className="mb-3"
                    justify
                    >
                    <Tab eventKey="Casa Vallejo Branch (Upper Session)" title="Casa Vallejo Branch (Upper Session)">
                        <Row>
                            <Col xs={12} lg={6}>
                                <Box className="w-100 px-3 py-2">
                                    <Row>
                                        <Col xs={12} lg={6}>
                                            <Box className="d-flex align-items-center">
                                                <LocationOnIcon className='me-2'/>
                                                <Typography variant="h5" className='fw-bold'>Address</Typography>
                                            </Box>
                                            <Typography variant='subtitle1'>
                                                Upper Session Road, Casa Vallejo, Baguio City
                                            </Typography>
                                        </Col>
                                        <Col xs={12} lg={6}>
                                            <Box className="d-flex align-items-center">
                                                <LocalPhoneIcon  className='me-2'/>
                                                <Typography variant="h5" className='fw-bold'>Phone</Typography>
                                            </Box>
                                            <Link href="tel:+639175081349">
                                                +639175081349
                                            </Link>
                                        </Col>
                                    </Row>
                                </Box>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Box className="px-3 py-2">
                                    <Box className="d-flex flex-column align-items-center">
                                       <Box className="mb-2 d-flex align-items-center">
                                        <DirectionsIcon className='me-2'/>
                                            <Typography variant='h5' className='fw-bold'>
                                                Directions
                                            </Typography>
                                       </Box>
                                        <Box className="w-100">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.3131876827915!2d120.59942353165604!3d16.4093385834172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1430595953d%3A0xb260598d3895f22b!2sNorth%20Haven%20Spa!5e0!3m2!1sen!2sph!4v1700764243823!5m2!1sen!2sph" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 rounded-3'></iframe>
                                        </Box>
                                    </Box>
                                </Box>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Main Branch (Avelino)" title="Main Branch (Avelino)">
                        <Col xs={12}>
                            Main Branch (Avelino)
                        </Col>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </Box>
  )
};

export default ContactUs;
