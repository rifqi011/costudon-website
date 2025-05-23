export default function SocialIcon({ children, href = "#", className = "" }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center w-12 h-12 bg-teal shadow-black border-2 border-black rounded-full hover:bg-teal-600 transition-colors ${className}`}>
			{children}
		</a>
	)
}
