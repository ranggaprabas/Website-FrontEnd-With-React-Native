import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/bg.jpg'
import hero2 from './../assets/about-bg.jpg'

const Hero = ()=> {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hero1}
              alt="First slide"
            />
        <Carousel.Caption className="uppercase">
          <h5 >this is a place where technology &
            <br/>
            creativity refused into digital chemistry
          </h5>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hero2}
              alt="Second slide"
            />
            <Carousel.Caption className="uppercase">
            <h5 >we don't have the best but we have the
            <br/>
            greatest team
          </h5>
        </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Hero;