import React from "react";
import "./Mock.scss";
import { ReactComponent as Icon } from "./externalLink.svg";
import { MdPlace } from "react-icons/md";

import heroFallback from "./hero-fallback.jpg";
import logoFallback from "./logo-fallback.png";

function Mock(props) {
	return (
		<div
			className={`mock ${props.device} ${
				props.wireframe ? "wireframe" : ""
			}`}
		>
			<img
				src={props.hero || heroFallback}
				className="hero"
				alt={"hero"}
			/>
			<div className="pillWrap">
				<div className="pillText">Where to?</div>
				<span className="chevronMock bottom" />
			</div>
			<div className="geoPin">
				<MdPlace />
				<span className="geoText">{props.geo || "Some Geo name"}</span>
			</div>
			<div className="profile">
				<img
					src={props.logo || logoFallback}
					className="avatar"
					alt={"avatar"}
				/>
				<div className="sponsoredBy">Sponsored by</div>
				<div className="heroSpr" data-item="sponsorName">
					{props.name || "Some sponsor name"}
					<span className="sprMore">Learn more</span>
					<Icon className="extLinkIcon" />
				</div>
			</div>
		</div>
	);
}

export default Mock;
