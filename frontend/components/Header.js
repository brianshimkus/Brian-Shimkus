import Link from 'next/link'

export default function Header() {
	return (
		<>
			<div className='container mx-auto flex text-2xl py-2'>
				<Link href='/'>
					<h1 className='text-rose-300'>Brian Shimkus</h1>
				</Link>
				<span className='flex-grow' />
				<nav className='ml-12 space-x-8'>
					<Link href='/about'>About</Link>
					<Link href='/projects'>Projects</Link>
					<Link href='/contact'>Contact</Link>
				</nav>
			</div>
		</>
	)
}
