import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

const ptComponents = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			return (
				<img
					alt={value.alt || ' '}
					loading='lazy'
					src={urlFor(value).width(320).height(240).fit('max').auto('format')}
				/>
			)
		},
	},
}

const Post = ({ post }) => {
	const { title = 'Missing title', categories, body = [] } = post
	return (
		<article>
			<h1>{title}</h1>
			{categories && (
				<ul>
					{categories.map((category) => (
						<li key={category}>Category: {category}</li>
					))}
				</ul>
			)}
			<PortableText value={body} components={ptComponents} />
		</article>
	)
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  body
}`
export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "post" && defined(slug.current)][].slug.current`
	)

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: true,
	}
}

export async function getStaticProps(context) {
	const { slug = '' } = context.params
	const post = await client.fetch(query, { slug })
	return {
		props: {
			post,
		},
	}
}
export default Post
