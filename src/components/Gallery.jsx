import React from 'react';
import "../static/css/gallery.css";
import gallery from "../static/images/NHSGallery.png";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography, Button } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import galleryImage1 from "../static/images/gallery/gallery-image-1.jpg";
import galleryImage2 from "../static/images/gallery/gallery-image-2.jpg";
import galleryImage3 from "../static/images/gallery/gallery-image-3.jpg";
import galleryImage4 from "../static/images/gallery/gallery-image-4.jpg";
import galleryImage5 from "../static/images/gallery/gallery-image-5.jpg";
import galleryImage6 from "../static/images/gallery/gallery-image-6.jpg";
import galleryImage7 from "../static/images/gallery/gallery-image-7.jpg";
import galleryImage8 from "../static/images/gallery/gallery-image-9.jpg";

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const Gallery = () => {
    const itemData = [
        {
          img: galleryImage1,
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: galleryImage2,
          title: 'Burger',
        },
        {
          img: galleryImage6,
          title: 'Camera',
        },
        {
          img: galleryImage4,
          title: 'Coffee',
          cols: 2,
        },
        {
          img: galleryImage5,
          title: 'Hats',
          cols: 2,
        },
        {
          img: galleryImage3,
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: galleryImage7,
          title: 'Basketball',
        },
        {
          img: galleryImage8,
          title: 'Fern',
        },
      ];

  return (
    <>
        <Box id="gallery" className="py-5">
            <Container>
                <Row>
                    <Col xs={12} className='d-flex flex-column align-items-center justify-content-center mb-3'>
                        <img src={gallery} width={250} alt="About North Haven Spa" className='mb-3' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} className='d-flex align-items-center justify-content-center gallery-col'>
                        <Box sx={{ width: "100px"}}>
                            <Typography className='gallery-text'>G</Typography>
                            <Typography className='gallery-text'>A</Typography>
                            <Typography className='gallery-text'>L</Typography>
                            <Typography className='gallery-text'>L</Typography>
                            <Typography className='gallery-text'>E</Typography>
                            <Typography className='gallery-text'>R</Typography>
                            <Typography className='gallery-text'>Y</Typography>
                        </Box>
                    </Col>
                    <Col xs={9} lg={9}>
                        <ImageList
                            sx={{ width: "100%", height: "100%" }}
                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                            >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Col>
                    <Col xs={12} className='d-flex align-items-center justify-content-center my-3'>
                        <Button variant='contained' href='https://www.facebook.com/NorthHavenSpa/photos' target='_Blank' className='rounded-0 gallery-button'>Browse more photos</Button>
                    </Col>
                </Row>
            </Container>
        </Box>
    </>
  )
}

export default Gallery;
