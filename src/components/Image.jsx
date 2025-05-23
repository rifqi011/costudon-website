export default function Image({ src, alt = "Image", className }) {
	return (
		<div className={`object-cover overflow-hidden shadow-black rounded-xl border-3 border-black ${className}`}>
			<img src={src} alt={alt} />
		</div>
	)
}
