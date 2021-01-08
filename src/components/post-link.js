import React from "react"
import { Link } from "gatsby"
import "../styles/post-link.css"


export default function PostLink({ post }) {
	const { date, title, description, emoji } = post.frontmatter;
	const pageLink = `${post.fields.slug}`;

	return (
		<Link to={pageLink} className="post-link-anchor">
			<div className="post-link">
				<div className="post-link-icon">
					{emoji}
				</div>
				<div className="post-link-text">
					<h2>{title}</h2>
					<p className="post-link-description">{description}</p>
					<p className="post-link-date">{date}</p>
				</div>
			</div>
		</Link >
	)
}