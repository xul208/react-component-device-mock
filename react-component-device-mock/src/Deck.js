/* A deck of uploaded assets (cards) */
import React, { useState, useCallback, useRef } from "react";
import { MdPlace } from "react-icons/md";

import Modal from "react-bootstrap/Modal";
import FileBase64 from "react-file-base64";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Mock from "./Mock";
import PreviewCarousel from "./Carousel";

function Deck() {
	const [show, setShow] = useState(false);
	const geoNameRef = useRef(null);
	const sponsorRef = useRef(null);
	const PREVIEW_HERO_KEY = "preview_hero";
	const PREVIEW_LOGO_KEY = "preview_logo";
	const PREVIEW_GEO_KEY = "preview_geo";
	const PREVIEW_SPONSOR_KEY = "preview_sponsor";

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSave = useCallback(() => {
		setShow(false);
		const geoName = geoNameRef.current.value;
		const sponsor = sponsorRef.current.value;
		sessionStorage.setItem(PREVIEW_GEO_KEY, geoName);
		sessionStorage.setItem(PREVIEW_SPONSOR_KEY, sponsor);
	}, [geoNameRef, sponsorRef]);

	const handleUpload = useCallback((files, key) => {
		files && files.length && sessionStorage.setItem(key, files[0].base64);
	}, []);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload Images and Copies</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>Upload a hero image (2650x500)</div>
					<FileBase64
						multiple={true}
						onDone={files => handleUpload(files, PREVIEW_HERO_KEY)}
					/>
					<div>Upload a logo image (50x50)</div>
					<FileBase64
						multiple={true}
						onDone={files => handleUpload(files, PREVIEW_LOGO_KEY)}
					/>
					<br />
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">
								<MdPlace />
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Destination Geo Name"
							aria-label="geoName"
							ref={geoNameRef}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">
								Sponsored by
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Sponsor Name"
							aria-label="sponsorName"
							ref={sponsorRef}
						/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<Mock
				hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
				logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
				geo={sessionStorage.getItem(PREVIEW_GEO_KEY)}
				name={sessionStorage.getItem(PREVIEW_SPONSOR_KEY)}
			/>

			<PreviewCarousel />
			<Button variant="primary" onClick={handleShow}>
				Upload images and copies
			</Button>
		</>
	);
}

export default Deck;
