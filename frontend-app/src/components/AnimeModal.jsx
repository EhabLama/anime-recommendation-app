import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/AnimeModal.css';

const AnimeModal = ({ show, handleClose, anime }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{anime.input_anime_title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Anime ID:</strong> {anime.anime_id}</p>
        <p><strong>Title:</strong> {anime.input_anime_title}</p>
        <p><strong>Facet Attribute:</strong> {anime.facet_Attribute}</p>
        <p><strong>Recommended Anime Title:</strong> {anime.recommended_anime_title}</p>
        <p><strong>Recommended Anime ID:</strong> {anime.recommended_anime_id}</p>
        <div className="imgHolder">
          <img
            src={`/images/${anime.anime_id}.jpeg`}
            alt={anime.input_anime_title}
            className={anime.orientation === "landscape" ? "landscape" : ""}
            style={{ width: '100%' }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnimeModal;
