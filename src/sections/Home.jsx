import Section from "../components/Section"
import ButtonPrimary from "../components/ButtonPrimary"
import SocialIcon from "../components/SocialIcon"

export default function Home() {
	return (
		<Section id={"home"} className={"bg-yellow items-center text-center"}>
			<h1 className="text-4xl font-bold">Cool Student Union</h1>

			<h2 className="text-xl font-medium">"Yang Penting Selesai."</h2>

            <div className="h-56 object-cover my-6 overflow-hidden shadow-black rounded-xl border-3 border-black">
                <img src="./images/landing-page/1.jpg" className="bg-cover bg-top" alt="Fotbar" />
            </div>

			<div className="flex flex-col gap-4 items-center">
				<p className="text-base">Selamat datang di repository PPLG 1 '26! Di sini, setiap siswa adalah seorang contributor, ide adalah pull request yang siap di-merge, dan pembelajaran adalah branch yang tak pernah berhenti berinovasi.</p>

				<div className="flex gap-4 justify-center">
					<SocialIcon href="https://tiktok.com/@costudon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
							<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
						</svg>
					</SocialIcon>

					<SocialIcon href="https://instagram.com/costudon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
						</svg>
					</SocialIcon>
				</div>
            </div>
            
            <ButtonPrimary href={"#about"} className={"mt-8"}>
                Tentang Kami
            </ButtonPrimary>
		</Section>
	)
}
