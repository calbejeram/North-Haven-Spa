import React from 'react';
import nhsbrandlogo from "../static/images/NHSlogo.png";
import { Box, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

const Notice = () => {
  return (
    <>
        <Box>
            <Container>
                <Row>
                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                        <img src={nhsbrandlogo} width={250} alt="North Haven Spa Brand Logo" />
                    </Col>
                    <Col>
                        <Typography>To our Valued Clients,</Typography>
                    </Col>
                </Row>
            </Container>
        </Box>
    </>
  )
};

export default Notice;
