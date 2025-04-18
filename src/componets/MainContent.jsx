import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, ListGroup } from 'react-bootstrap';
import NewMusic from './NewMusic';
import Footer from './Footer';
import MyNavbar from './MyNavbar';

function MainContent() {
  return (
    <div className="d-flex flex-row min-vh-100 bg-dark text-light ">
     <div className="d-none d-lg-block  p-3" style={{ width: '250px', backgroundColor: '#404040' }}>
        <Nav className="flex-column">
          <Nav.Item>
            <h2><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" version="1.1" viewBox="0 0 20 24" style={{ verticalAlign: 'middle', marginRight: '5px', marginBottom:"7px"}}><path fill-rule="nonzero" stroke="none" stroke-width="1" d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"></path></svg>Music</h2>
            <Nav.Link href="#" className="text-light">
            <i className="bi bi-house-door me-2" style={{ color: 'red' }}></i>Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-light">
              <i className="bi bi-newspaper me-2"></i>Novità
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-light">
              <i className="bi bi-list-music me-2"></i>Radio
            </Nav.Link>
          </Nav.Item>
          </Nav>
          </div>

      
      <div className="flex-grow-1">
       <MyNavbar/>
       <Container className="py-4">
          {/* Sezione "Novità" */}
          <h2 className="mb-3">Novità</h2>
          <Row className="gx-3">
          <Col md={6} lg={6}> 
              <Card bg="secondary" text="light">
                <Card.Img src="/images/1a.png" alt="Descrizione dell'immagine" />
                <Card.Body>
                  <Card.Title className="fs-6">NUOVA STAZIONE RADIO</Card.Title>
                  <Card.Text className="fs-6">Rilassati. Questo lo pensiamo noi.</Card.Text>
                  <Card.Text className="fw-bold">Ascolta Apple Music Chill</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}> 
              <Card bg="secondary" text="light">
                <Card.Img src="/images/1b.png" alt="Descrizione dell'immagine" />
                <Card.Body>
                  <Card.Title className="fs-6">NUOVA STAZIONE RADIO</Card.Title>
                  <Card.Text className="fw-bold">Ascolta la nuova casa latina</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} lg={12}>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title className="fs-6">Nuovi episodi radio &gt;</Card.Title>
                  <Row className="gx-2">
                    <Col sm={6}>
                      <Card.Img src="/images/2b.png" alt="Descrizione dell'immagine" className="mb-2" />
                      <Card.Text className="fs-sm">Titolo Episodio 1</Card.Text>
                    </Col>
                    <Col sm={6}>
                      <Card.Img src="/images/2c.png" alt="Descrizione dell'immagine" className="mb-2" />
                      <Card.Text className="fs-sm">Titolo Episodio 2</Card.Text>
                    </Col>
                    </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="mt-4">
            <NewMusic />
          </div>
          <div className="mt-4">
            <h2 className="mb-3">Altro da esplorare</h2>
            <Container>
              <Row xs={1} md={2} lg={3}>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Generi <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Dacenni <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Attività e stati d'animo <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Workout <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Classifiche <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Audio spaziale <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Video musicali <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Nuovi artisti <span className="text-muted">&gt;</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-center">
                      Hit del passato
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default MainContent;