import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

function NewMusic() {
  const [tracks, setTracks] = useState([])
  const query = 'misfits'
  const apiUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (data && data.data) {
          const firstEightTracks = data.data.slice(0, 8)
          setTracks(firstEightTracks)
        } else {
          console.warn('Nessun brano trovato o formato dati inatteso.')
          setTracks([])
        }
      })
      .catch((error) => {
        console.error('Errore durante la fetch:', error)
        setTracks([])
      })
  }, [apiUrl])

  return (
    <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <h2>Nuove uscite</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {tracks.map((track) => (
          <Col key={track.id}>
            <Card style={{ backgroundColor: '#404040', color: 'white' }}>
              <Card.Img variant="top" src={track.album.cover_medium} alt={track.title} />
              <Card.Body>
                <Card.Title className="fs-6">{track.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-sm">{track.artist.name}</Card.Subtitle>
                <Card.Text className="fs-sm">Album: {track.album.title}</Card.Text>
                <Card.Link  className="stretched-link"
              style={{ color: 'white', textDecoration: 'none' }} href={track.link} target="_blank" rel="noopener noreferrer" className="stretched-link">
                  Ascolta su Deezer
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default NewMusic