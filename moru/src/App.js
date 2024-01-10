import Webcam from 'react-webcam';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';
import { Container, Row, Col} from 'react-bootstrap';
import "./style/moru.css";
import { useState } from 'react';

const App = () => {
  const videoOption = {
    width : 380,
    height : 240,
    facingMode: "environment"
  }

  const [getWcValue, setWcValue] = useState("");

  const displayWebcam = () => {
    setWcValue(<Webcam audio={false} videoConstraints={videoOption} />);
  }

  return (
    <div>
      <Navigation />
      <div className='Content'>
        <Container>
          <Row>
            <Col>
              <div>
                <h1 className='title'>REAL TIME OBJECT DETECTION</h1>
              </div>
              <div className='desc'>
                <p>"Selamat datang di Fitur Deteksi Objek Langsung kami! Saksikan keajaiban teknologi kami dalam mendeteksi jamur pada roti secara real-time. Dengan kecerdasan buatan, nikmati keamanan roti terjamin tanpa kompromi. Mari temukan kemudahan dan ketenangan dalam setiap gigitan roti Anda! 😃😃"</p>
              </div>
            </Col>
          </Row>
          <Row >
            <Col>
              <div className='webcam'>
                {getWcValue}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className='d-flex justify-content-center align-item-center'>
        <Button variant="light" onClick={() => displayWebcam()}>Scan Object</Button>
      </div>
    </div>
  );
}

export default App;
