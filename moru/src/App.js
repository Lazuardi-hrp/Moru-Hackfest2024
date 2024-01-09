import './App.css';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';
import { Container, Row, Col} from 'react-bootstrap';
import "./style/moru.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='Content'>
        <Container className='d-flex justify-content-center align-item-center border'>
          <Row>
            <Col>
              <div className='d-flex justify-content-center align-item-center'>
                <h1>REAL TIME OBJECT DETECTION</h1>
              </div>
              <div>
                <p>"Selamat datang di Fitur Deteksi Objek Langsung kami! Saksikan keajaiban teknologi kami dalam mendeteksi jamur pada roti secara real-time. Dengan kecerdasan buatan, nikmati keamanan roti terjamin tanpa kompromi. Mari temukan kemudahan dan ketenangan dalam setiap gigitan roti Anda! 😃😃"</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='d-flex justify-content-center align-item-center'>
        <Button variant="light">Scan Object</Button>{' '}
      </div>
    </div>
  );
}

export default App;
