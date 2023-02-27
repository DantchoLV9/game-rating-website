const React = require("react");

const HeadComponents = [
	<script
		defer
		data-domain="gamer8.net"
		src="https://plausible.io/js/script.js"
	/>,
];

exports.onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents(HeadComponents);
};
