import Section from "../components/Section"
import ButtonPrimary from "../components/ButtonPrimary"
import Icon from "../components/Icon"
import Image from "../components/Image"

export default function Home() {
	return (
		<Section id={"home"} className={"bg-yellow items-center text-center"}>
			<h1 className="text-4xl font-bold">Cool Student Union</h1>

			<h2 className="text-xl font-medium">"Yang Penting Selesai."</h2>

			<Image src={"./images/landing-page/1.jpg"} className={"h-56 my-6 bg-bottom"} alt="Hero Image" />

			<div className="flex flex-col gap-4 items-center">
				<p className="text-base">Selamat datang di repository PPLG 1 '26! Kami percaya pada semangat open source: berbagi, berkolaborasi, dan terus berkembang.</p>

				<div className="flex gap-4 justify-center">
					<Icon href="https://www.tiktok.com/@costudon_smecone">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
							<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
						</svg>
					</Icon>

					<Icon href="https://www.instagram.com/costudon.pplg1">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
					</Icon>
				</div>
			</div>

			<ButtonPrimary href={"#about"} className={"mt-8"}>
				Tentang Kami
			</ButtonPrimary>
		</Section>
	)
}
