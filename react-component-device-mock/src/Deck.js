/* A deck of uploaded assets (cards) */
import React, { useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import FileBase64 from "react-file-base64";

import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import Mock from "./Mock";

function Deck() {
	const [show, setShow] = useState(false);
	const PREVIEW_HERO_KEY = "preview_hero";
	const PREVIEW_LOGO_KEY = "preview_logo";

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleUpload = useCallback((files, key) => {
		files && files.length && sessionStorage.setItem(key, files[0].base64);
	});

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Upload images
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>Upload the hero image (2650x500)</div>
					<FileBase64
						multiple={true}
						onDone={files => handleUpload(files, PREVIEW_HERO_KEY)}
					/>
					<div>Upload the logo image (50x50)</div>
					<FileBase64
						multiple={true}
						onDone={files => handleUpload(files, PREVIEW_LOGO_KEY)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<Mock
				hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
				logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
				name={"Dear sponsor"}
			/>
		</>
	);
}

export default Deck;
