import React from "react"
import "../styles/post.css"
import Layout from "../components/layout";
import Iframely from "../components/iframely"
import SEO from "../components/seo"

export default function Post({ pageContext }) {
	
	const { title, date, emoji, description } = pageContext.node.frontmatter;
	const body = pageContext.node.html;
	return (
		<Layout>
			<Iframely />
			<SEO title={title} description={description} />
			<div className="post-all">
				<div className="post-icon">
					{emoji}
				</div>

				<div className="post-body">
					<h1>{title}</h1>

					<p className="post-date">{date}</p>


					<div dangerouslySetInnerHTML={{ __html: body }} />
				</div>
			</div>
		</Layout>
	)
}

