import type React from "react";
import { useState } from "react";
import logoImg from "@/assets/amrita-logo.webp"; // Add your top image asset here
import buildingImg from "@/assets/footer-image.webp";

interface SocialLink {
	href: string;
	label: string;
	icon: React.FC;
}

interface NavLink {
	label: string;
	href: string;
}

const FacebookIcon: React.FC = () => (
	<svg
		aria-hidden="true"
		focusable="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
	</svg>
);

const XIcon: React.FC = () => (
	<svg
		aria-hidden="true"
		focusable="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
	</svg>
);

const InstagramIcon: React.FC = () => (
	<svg
		aria-hidden="true"
		focusable="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<rect x="2" y="2" width="20" height="20" rx="5" />
		<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
		<path d="M17.5 6.5h.01" />
	</svg>
);

const LinkedInIcon: React.FC = () => (
	<svg
		aria-hidden="true"
		focusable="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const YouTubeIcon: React.FC = () => (
	<svg
		aria-hidden="true"
		focusable="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M22.54 6.42A2.78 2.78 0 0020.83 4.69C19.25 4.25 12 4.25 12 4.25s-7.25 0-8.83.44A2.78 2.78 0 001.46 6.42 29.08 29.08 0 001 12a29.08 29.08 0 00.46 5.58A2.78 2.78 0 003.17 19.31c1.58.44 8.83.44 8.83.44s7.25 0 8.83-.44A2.78 2.78 0 0022.54 17.58 29.08 29.08 0 0023 12a29.08 29.08 0 00-.46-5.58z" />
		<polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
	</svg>
);

const SOCIAL_LINKS: SocialLink[] = [
	{ href: "https://facebook.com/", label: "Facebook", icon: FacebookIcon },
	{ href: "https://x.com/", label: "X", icon: XIcon },
	{ href: "https://instagram.com/", label: "Instagram", icon: InstagramIcon },
	{ href: "https://linkedin.com/", label: "LinkedIn", icon: LinkedInIcon },
	{ href: "https://youtube.com/", label: "YouTube", icon: YouTubeIcon },
];

const NAV_LINKS: NavLink[] = [
	{ label: "HOME", href: "/" },
	{ label: "TEAM", href: "/team" },
	{ label: "TERMS & CONDITIONS", href: "/terms" },
];

const Footer: React.FC = () => {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<footer className="relative w-full bg-black py-8 sm:py-10 lg:py-12 overflow-hidden">
			<style>{`
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes emailBounce {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(4px); }
                }

                .glitch-text { color: white; }
                .footer-content { animation: slideInRight 0.8s ease-out; }
                
                .image-wrapper { 
                    animation: slideInLeft 1s ease-out;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 0.5rem 1rem;
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    animation: slideInLeft 1s ease-out;
                    padding-top: 2rem;
                    min-height: 200px;
                }

                .logo-wrapper {
                    position: absolute;
                    top: -35px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    animation: slideInUp 1.1s ease-out;
                }

                .logo-image { 
                    filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.12)); 
                    transition: all 0.3s ease-out;
                    width: 100%;
                    max-width: 180px;
                    height: auto;
                    display: block;
                    padding: 0.75rem;
                }
                .logo-image:hover { 
                    filter: drop-shadow(0 0 25px rgba(250, 204, 21, 0.25)); 
                    transform: scale(1.08); 
                }
                
                .footer-image { 
                    filter: drop-shadow(0 0 20px rgba(250, 204, 21, 0.12)); 
                    transition: all 0.3s ease-out;
                    width: 100%;
                    height: auto;
                    display: block;
                    padding: 0.25rem;
                }
                .footer-image:hover { 
                    filter: drop-shadow(0 0 35px rgba(250, 204, 21, 0.3)); 
                    transform: scale(1.03); 
                }
                
                .main-heading { transition: all 0.3s ease-out; }
                .email-link { transition: all 0.3s ease-out; }
                .email-link:hover { color: #fcd34d; }
                .email-link:hover .email-arrow { animation: emailBounce 0.6s ease-in-out; }
                
                .icon-container { position: relative; display: inline-flex; }
                .icon-glow { 
                    position: absolute; 
                    inset: -8px; 
                    background: radial-gradient(circle, rgba(250, 204, 21, 0.4), transparent); 
                    border-radius: 50%; 
                    opacity: 0; 
                    transition: opacity 0.3s ease-out; 
                }
                .icon-container:hover .icon-glow { opacity: 1; }
                
                .nav-link-indicator { 
                    position: absolute; 
                    bottom: -2px; 
                    left: 0; 
                    height: 2px; 
                    background: linear-gradient(90deg, #ffd700, #ec4899, #6366f1); 
                    width: 0; 
                    transition: width 0.3s ease-out; 
                }
                .nav-link:hover .nav-link-indicator { width: 100%; }
                
                .section-title { animation: slideInUp 0.8s ease-out; animation-fill-mode: both; }
                .section-title:nth-child(1) { animation-delay: 0.1s; }
                .section-title:nth-child(2) { animation-delay: 0.2s; }
                .section-title:nth-child(3) { animation-delay: 0.3s; }

                @media (max-width: 1024px) {
                    .logo-wrapper {
                        top: -28px;
                    }
                    .logo-image {
                        max-width: 150px;
                    }
                    .image-wrapper {
                        padding: 2.5rem 1rem 1rem;
                    }
                    .image-container {
                        padding: 0;
                    }
                }

                @media (max-width: 640px) {
                    .main-heading { letter-spacing: 0.08em; }
                    .logo-wrapper {
                        top: -22px;
                    }
                    .logo-image {
                        max-width: 120px;
                    }
                    .image-wrapper {
                        padding: 2rem 0.5rem 0.5rem;
                    }
                    .image-container {
                        padding: 0;
                    }
                }
            `}</style>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
					{/* Left Column - Images */}
					<div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center order-2 lg:order-1">
						<div className="image-wrapper w-full">
							<div className="image-container">
								{/* Logo Overlay */}
								<div className="logo-wrapper">
									<img
										src={logoImg}
										alt="Amrita Vishwa Vidyapeetham logo"
										className="logo-image"
										loading="lazy"
										decoding="async"
									/>
								</div>

								{/* Main Building Image */}
								<img
									src={buildingImg}
									alt="Amrita campus building"
									className="footer-image"
									loading="lazy"
									decoding="async"
								/>
							</div>
						</div>
					</div>

					{/* Right Column - Content */}
					<div className="footer-content lg:col-span-6 xl:col-span-6 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
						{/* Header Section */}
						<div className="flex flex-col gap-3 sm:gap-4">
							<h2 className="main-heading glitch-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-widest uppercase leading-tight">
								Reach Out To Us!
							</h2>
							<p className="text-zinc-400 text-sm sm:text-base lg:text-lg tracking-wide max-w-2xl transition-colors duration-300 hover:text-yellow-300 leading-relaxed">
								Have an idea, a question, or just want to connect? We'd love to
								hear from you.
							</p>
							<a
								href="mailto:ideaclub@cb.amrita.edu"
								className="email-link inline-flex items-center gap-2 text-white text-base sm:text-lg lg:text-xl tracking-wide w-fit mt-2 group hover:gap-3"
								aria-label="Send us an email"
							>
								<span className="truncate font-medium">
									ideaclub@cb.amrita.edu
								</span>
								<span
									aria-hidden="true"
									className="email-arrow text-zinc-500 flex-shrink-0 group-hover:text-yellow-300"
								>
									→
								</span>
							</a>
						</div>

						{/* Info Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 pt-4 sm:pt-6 border-t border-zinc-900/50">
							{/* Address Section */}
							<div className="section-title flex flex-col gap-2 sm:gap-3 group cursor-pointer">
								<span className="text-xs uppercase tracking-widest text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 font-semibold">
									Our Address
								</span>
								<address className="not-italic flex flex-col gap-2 text-zinc-400 text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-zinc-200">
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										Amrita Vishwa Vidyapeetham
									</span>
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										Coimbatore — 641 112
									</span>
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										Tamil Nadu, India
									</span>
								</address>
							</div>

							{/* Social Links Section */}
							<div className="section-title flex flex-col gap-2 sm:gap-3">
								<span className="text-xs uppercase tracking-widest text-yellow-400 font-semibold">
									Follow Us
								</span>
								<div className="flex items-center gap-4 flex-wrap">
									{SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
										<a
											key={label}
											href={href}
											aria-label={label}
											target="_blank"
											rel="noopener noreferrer"
											onMouseEnter={() => setHoveredLink(label)}
											onMouseLeave={() => setHoveredLink(null)}
											className="icon-container transition-all duration-300"
											title={label}
										>
											<div className="icon-glow" />
											<div
												style={{
													color:
														hoveredLink === label
															? "#fcd34d"
															: "rgba(113, 113, 122, 0.7)",
													filter:
														hoveredLink === label
															? "drop-shadow(0 0 8px rgba(250, 204, 21, 0.6))"
															: "drop-shadow(0 0 0px rgba(250, 204, 21, 0))",
													transform:
														hoveredLink === label
															? "scale(1.35) rotate(5deg)"
															: "scale(1) rotate(0deg)",
												}}
												className="transition-all duration-300 flex"
											>
												<Icon />
											</div>
										</a>
									))}
								</div>
								<a
									href="https://amrita.edu"
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs uppercase tracking-widest text-zinc-500 hover:text-yellow-400 transition-all duration-300 w-fit group inline-flex items-center gap-1 mt-2"
									aria-label="Visit Amrita.edu (opens in new tab)"
								>
									<span className="relative font-medium">
										Amrita.edu
										<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300" />
									</span>
									<span className="transition-all duration-300 group-hover:translate-x-1">
										↗
									</span>
								</a>
							</div>

							{/* Navigation Section */}
							<div className="section-title flex flex-col gap-2 sm:gap-3">
								<span className="text-xs uppercase tracking-widest text-yellow-400 font-semibold">
									Navigate
								</span>
								<nav className="flex flex-col gap-2">
									{NAV_LINKS.map(({ label, href }) => (
										<a
											key={label}
											href={href}
											className="nav-link relative text-xs uppercase tracking-widest text-zinc-400 hover:text-yellow-400 transition-colors duration-300 w-fit group"
										>
											{label}
											<div className="nav-link-indicator" />
										</a>
									))}
								</nav>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-900/50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
					<span className="text-center sm:text-left transition-colors duration-300 hover:text-yellow-400 text-xs text-zinc-700 uppercase tracking-widest font-light">
						© {new Date().getFullYear()} Idea Club — Amrita Vishwa Vidyapeetham
					</span>
					<button
						type="button"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="text-zinc-700 hover:text-yellow-400 transition-all duration-300 group inline-flex items-center gap-1 text-xs uppercase tracking-widest font-light"
						aria-label="Scroll back to top"
					>
						<span className="transition-all duration-300 group-hover:-translate-y-1">
							Back to top
						</span>
						<span className="transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-yellow-300">
							↑
						</span>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
