import React from "react"
import "../styles/hero.css"
import TUX_IMG from "../../static/bxl-tux.svg"

export default function Hero() {
	return (
		<div className="hero">
			<h1 className="hero-text">
				welcome to my blog <br />
				nya 😾<br />
			</h1>
			<div className="hero-author">
				<img src={TUX_IMG} className="hero-author-image" alt="logo"></img>
				<p className="hero-author-text">
					私は情報学部の大学生です.<br />
					I'm remote studying now.
				</p>
			</div>
		</div>
	)
}