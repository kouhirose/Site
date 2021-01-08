import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"



export default function Header() {
	return (
		<header>
			<Link to="/" className="header" >
				<div className="header-link">
					Kou Hirose
				</div>

			</Link>
		</header>
	)
}