import "./About.css";
import {Container,Row,Col,Button} from "react-bootstrap";
const About = ()=>{
  return(
    <>
      <Container className="py-4">
          <h1 className="text-center mb-4">About us</h1>
          <Row>

              <Col md-6 className="d-flex justify-content-center align-items-center">
                  <img src="images/about.jpg" className="about-pic rounded-circle" alt="about-pic" />
              </Col>
              <Col md-6>
                  <p className="text-dark"><b className="text-danger">Satyam Shivam</b> is the leading pest control service provider in India. A Satyam Shivam Initial brand,  between Pest Control India, the number one pest control company in India, and Satyam Shivam, the world’s leading pest control brand. Satyam Shivam aims to set new standards for customer service having operations across 500 locations in India. new innovations and the use of digital technologies.</p>
                  <a href="#" className="btn btn-success">Read more...</a>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default About;
