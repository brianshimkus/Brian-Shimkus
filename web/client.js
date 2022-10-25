import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'bmw20o3y',
	dataset: 'production',
	useCdn: true,
})
