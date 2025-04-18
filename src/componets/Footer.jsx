import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Footer() {
  return (
    <div className="py-3 mt-5 fixed-bottom" style={{ backgroundColor: '#404040' }}>
      <Container>
        <Row className="justify-content-between align-items-center">
        <Col xs={12} className="text-start text-light small">
      <p className="mb-0">Italia</p>
      <p className="mb-1">English (US)</p>
      <p className="mb-1">Copyright © 2025 Apple Inc. Tutti i diritti riservati.</p>
      <p className="mb-0">
        <a href="#" className="text-light me-2" style={{ textDecoration: 'none' }}>Supporto</a>
        <a href="#" className="text-light me-2" style={{ textDecoration: 'none' }}>Feedback</a>
        <a href="#" className="text-light me-2" style={{ textDecoration: 'none' }}>Note legali</a>
        <a href="#" className="text-light me-2" style={{ textDecoration: 'none' }}>Privacy</a>
        <a href="#" className="text-light me-2" style={{ textDecoration: 'none' }}>Termini e condizioni</a>
        <a href="#" className="text-light" style={{ textDecoration: 'none' }}>Mappa del sito</a>
      </p>
    </Col>
        </Row>
       <div className="d-flex justify-content-between align-items-center mt-3 d-md-none" style={{ zIndex: 10 }}>
          <div className="text-light small">
            <p className="mb-0">Titolo della canzone attuale</p>
            <p className="mb-0">Nome dell'artista</p>
          </div>
          <div>
            <Button variant="outline-light" size="sm" className="me-2">Play</Button>
            <Button variant="outline-light" size="sm">Next</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer