export default function H1({children}: {children: React.ReactNode}) {
	return (
			<h1 className='mb-16 font-bold text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-center'>
				{children}
			</h1>
	);
}
