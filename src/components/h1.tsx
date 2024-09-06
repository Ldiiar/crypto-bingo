import clsx from 'clsx'

export default function H1({children, className}: {children: React.ReactNode, className?: string}) {
	return (
			<h1 className={clsx('mb-16 font-bold text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-center', className)}>
				{children}
			</h1>
	);
}
