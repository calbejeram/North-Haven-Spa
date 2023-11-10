import React from 'react';
import "../static/css/aboutus.css";
import aboutus from "../static/images/NHSAboutUs.png";
import { Box, Typography } from '@mui/material';
import { Col, Container, Row, Card } from 'react-bootstrap';
import aboutus6 from "../static/images/aboutus-6.jpg";
import aboutus7 from "../static/images/massageroom.jpg";
import aboutus8 from "../static/images/aboutus-8.jpg";
import aboutus9 from "../static/images/aboutus-10.jpg";
import nhsbrandlogo from "../static/images/NHSlogo.png";

const AboutUs = () => {

    const aboutUsImgs = [
        aboutus6,
        aboutus7,
        aboutus8,
        aboutus9,
    ];

    const aboutUsImg = aboutUsImgs.map((img, index) => {
        return (
            <Col xs={6}>
                <Card className={`about-us-card about-card-${index}`}>
                    <Card.Img src={img}/>
                </Card>
            </Col>
            )
        });

  return (
    <>
        <Box id="aboutUs" className="py-5">
            <Container>
                <Row>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center mb-3'>
                        <img src={aboutus} width={250} alt="About North Haven Spa" className='mb-3' />
                    </Col>
                </Row>
                <Row className='g-3'>
                    <Col xs={12} lg={6}>
                        <Row className='g-3'>
                            {aboutUsImg}
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-start about-us-col p-4'>
                        <img src={nhsbrandlogo} width={150} alt="North Haven Spa Brand Logo" className='mb-3' />
                        <Typography className='col-text'>
                            In the 1800s, the discovery of Baguio, known as a "Shangrila" in the mountains, turned it into a haven for healing and relaxation, especially for tired soldiers. It later evolved into the Summer Capital of the Philippines. <span className='fw-bold'>North Haven Spa</span> continues the spirit of this discovery by offering more than just relaxation. Housed in a transformed 1960s Baguio home, it blends old church bricks and river stones for a soothing atmosphere, preserving the Old Baguio charm. The spa offers indigenous massages and unique scrubs like strawberry, cordillera rice, and Benguet coffee. It's a place to escape, exhale, and find harmony for mind, body, and soul.
                        </Typography>
                        <br />
                        <Typography className='col-text'>
                            A perfect pace where guest can go to akin to coming home. putting your feel up after that powered-up stressed day, and having someone to pamper you with more than just a pat on the back. Embracing you with a blanket to bring harmony between mind body and soul.
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </Box>
    </>
  )
}

export default AboutUs;
