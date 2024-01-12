import React from 'react';
import "../static/css/footer.css";
import nhslogo from "../static/images/NHSlogo.png";
import { Box, Typography, Link } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';

const NHSFooter = () => {

    const FooterQuickLink = styled(Link)({
        color: "black",
        textDecoration: "none"
    });

    const footerLinks = [
        {
            footerLinkTitle: "Navigate",
            footerQuickLinks: {
                link1: {
                    text: "Home",
                    linkUrl: "#"
                },
                link2: {
                    text: "Services",
                    linkUrl: "/services"
                },
                link3: {
                    text: "Gallery",
                    linkUrl: "/gallery"
                },
                link4: {
                    text: "About Us",
                    linkUrl: "/aboutus"
                },
                link5: {
                    text: "Contact Us",
                    linkUrl: "/contactus"
                },
            }
        },
    ]

  return (
    <>
        <Box id="footer" className="pt-3 pb-1">
            <Container>
                <Row className='g-3'>
                    <Col xs={12} lg={3} className='d-flex flex-column'>
                        <Link href=""><img src={nhslogo} width={150} alt="North Haven Spa Logo" className='mb-3' /></Link>
                        <Typography variant='h6' className='footer-nav-title'>
                            Follow us on Facebook
                        </Typography>
                        <Link href="https://www.facebook.com/NorthHavenSpa" target='_Blank'><FacebookIcon/></Link>
                    </Col>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6' className='footer-nav-title'>
                            Navigate
                        </Typography>
                        <FooterQuickLink className='footerLink' href="/">Home</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Services</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Gallery</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>About Us</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Contact Us</FooterQuickLink>
                    </Col>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6' className='footer-nav-title'>
                            Services
                        </Typography>
                        <FooterQuickLink  className='footerLink'>Indegenous</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>NHS Packages</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Body Scrubs</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Body Massage</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Hand Treatments</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Foot Treatments</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Facial Treatments</FooterQuickLink>
                        <FooterQuickLink  className='footerLink'>Manicure and Pedicure</FooterQuickLink>
                    </Col>
                    <Col xs={12} lg={2} className='d-flex flex-column'>
                        <Typography variant='h6' className='footer-nav-title'>
                            Branches
                        </Typography>
                        <Typography  className='footerLink'>Main Branch</Typography>
                        <Typography  className='footerLink'>Casa Vallejo Branch</Typography>
                    </Col>
                    <Col xs={12} lg={3} className='d-flex flex-column'>
                        <Typography variant='h6' className='footer-nav-title'>
                            Business Hours
                        </Typography>
                        <Typography>Monday - Sunday</Typography>
                        <Typography>Doors Open at <span className='fw-bold'>9:00 AM </span> - <span className='fw-bold'>10: 00 PM</span></Typography>
                    </Col>
                </Row>
                <hr className='m-1' />
                <Typography variant='caption'>Copyright &copy; 2023 <span className="fw-bold"> <span className='mx-2'><img src={nhslogo} width={30} alt="North Haven Spa Logo" /></span>North Haven Spa</span>. All Rights Reserved.</Typography>
            </Container>
        </Box>
    </>
  )
};

export default NHSFooter;
