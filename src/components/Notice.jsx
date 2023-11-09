import React from 'react';
import "../static/css/notice.css";
import nhsbrandlogo from "../static/images/NHSlogo.png";
import leaves from "../static/images/notice-leaves.png";
import { Alert, Box, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

const Notice = () => {

    const included = [
        "15 mins use of SAUNA",
        "Free use of the shower",
        "Free Disposable Underwear",
        "Hair Conditioner and Drinking Water"
      ];
    
      const inclusionItems = included.map(include => (
        <Alert key={include} severity="success" variant='outlined' className='my-1 fw-bold bg-white bg-opacity-25' sx={{ width: "320px"}}>
          {include}
        </Alert>
      ));

  return (
    <>
        <Box id="notice" className="py-5">
            <Container>
                <Row>
                    <Col xs={12} className='d-flex align-items-center justify-content-center mb-3'>
                        <img src={nhsbrandlogo} width={250} alt="North Haven Spa Brand Logo" />
                    </Col>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
                        <Typography variant='h4' className='fw-bold notice-title text-center'>To our Valued Clients,</Typography>
                        <Typography className='p-3 text-center'>
                            We realized these are tough times, and we have held our prices for as long as we can.
                            However, cost factors such as water and electric bills have been increasing multiple times
                            these past few months. With these factors in mind, we will be implementing additional charge of
                            <span className='fw-bold'> ₱250.00 for the use of SAUNA</span> with the inclusions of:
                        </Typography>
                    </Col>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
                        {inclusionItems}
                    </Col>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
                        <Typography className='p-3 text-center'>
                            Although every effort is being made to manage our costs, we hope you understand that factors beyond
                            our control have made this increase inevitable.
                            We aspire to your continued support and loyalty to <span className='fw-bold'>North Haven Spa </span>
                            and vow to continue providing excellent servies for you.
                        </Typography>
                        <img src={leaves} alt="North Haven Spa Leave" />
                    </Col>
                </Row>
            </Container>
        </Box>
    </>
  )
};

export default Notice;
