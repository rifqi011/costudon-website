export default function SectionTitle({ align, title, description, className }) {
	return (
		<div className={`flex flex-col gap-6 ${align === "center" ? "items-center" : "items-start"} ${className}`}>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className={`text-base ${align === "center" ? "text-center" : "text-left"}`}>{description}</p>
		</div>
	)
}
