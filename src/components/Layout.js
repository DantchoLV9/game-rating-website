import React from "react";
import MainStyles from "../styles/global.css";

const Layout = ({ title, children }) => {
	return (
		<div>
			<title>{title}</title>
			{children}
		</div>
	);
};

export default Layout;
