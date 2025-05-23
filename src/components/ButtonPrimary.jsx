export default function ButtonPrimary({ children, onClick, href, className }) {
	const baseClasses = `bg-purple text-white py-2 px-4 border-2 border-black rounded-lg transition duration-300 ease-in-out relative animate-shadow-black cursor-pointer ${className}`

	if (href) {
		return (
			<a href={href} className={baseClasses}>
				{children}
			</a>
		)
	} else {
		return (
			<button onClick={onClick} className={baseClasses}>
				{children}
			</button>
		)
	}
}
