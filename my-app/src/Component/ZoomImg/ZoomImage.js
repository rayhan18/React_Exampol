import React, { Component } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Container,Row } from 'react-bootstrap';
import belt from '../../Imges/belt.jpg'
export default class ZoomImage extends Component {

    // npm install react-inner-image-zoom
    // import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
    //document link - https://laurenashpole.github.io/react-inner-image-zoom/docs
    render() {
        return (
            <div>
                <Container>
                    <Row>
                    <InnerImageZoom
                        src={belt}
                        zoomSrc={belt}
                        zoomType={'hover'} 
                        zoomScale={1.8}
                        />
                       
                    </Row>
                </Container>
            </div>
        )
    }
}
