export default function H1({children}: {children: React.ReactNode}) {
	return (
			<h1 className='mb-16 font-bold text-3xl sm:text-5xl md:text-5xl xl:text-6xl text-center'>
				{children}
			</h1>
	);
}
