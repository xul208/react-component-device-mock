import React from "react";
import "./Mock.scss";
import { ReactComponent as Icon } from "./externalLink.svg";
import { MdPlace } from "react-icons/md";

function Mock(props) {
	return (
		<div
			className={`mock ${props.device} ${
				props.wireframe ? "wireframe" : ""
			}`}
		>
			<img src={props.hero} className="hero" />
			<div className="pillWrap">
				<div className="pillText">Where to?</div>
				<span className="chevronMock bottom"></span>
			</div>
			<div className="geoPin">
				<MdPlace />
				<span className="geoText">A nice place to go</span>
			</div>
			<div className="profile">
				<img src={props.logo} className="avatar" />
				<div className="sponsoredBy">Sponsored by</div>
				<span className="heroSpr" data-item="sponsorName">
					Visit San Diego
					<span className="sprMore">Learn more</span>
					<Icon className="extLinkIcon" />
				</span>
			</div>
		</div>
	);
}

export default Mock;
