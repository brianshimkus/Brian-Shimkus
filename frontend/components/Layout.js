import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<div className='bg-green-600 min-h-screen'>
				<div className='container mx-auto'>{children}</div>
			</div>
		</div>
	)
}

Layout.defaultProps = {
	title: `Brian Shimkus`,
	description: `The official website of Brian Shimkus.`,
	keywords:
		'brian shimkus, web developer, software engineer, guitar player, entrepreneur, clothing, fitness, mixed martial arts',
}
