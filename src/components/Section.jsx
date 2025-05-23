export default function Section({ children, id, className }) {
	return (
		<section id={id} className={`container pt-22 pb-16 flex flex-col gap-6 w-full min-h-svh ${className}`}>
			{children}
		</section>
	)
}
