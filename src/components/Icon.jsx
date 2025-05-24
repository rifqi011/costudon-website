export default function Icon({ children, href, onClick, className = "" }) {
    const baseClass = `inline-flex items-center justify-center w-12 h-12 bg-teal shadow-black border-2 border-black rounded-full hover:bg-teal-600 transition-colors ${className}`

	if (href) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
				{children}
			</a>
		)
    } else {
		return (
			<div className={baseClass} onClick={onClick}>
				{children}
			</div>
        )
    }
}
