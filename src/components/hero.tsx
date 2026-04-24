import React, { useState } from "react";
import { RegistrationClosedModal } from "./registration-closed-modal";

const Hero = React.memo(function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">

			<div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
				<div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-xs font-bold tracking-widest uppercase">
					<span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
					Brought to you by Idea Club x Amrita School of Computing
				</div>

				<h1 className="font-black leading-[0.9] tracking-tighter flex flex-col items-center justify-center whitespace-nowrap mb-8 text-center uppercase">
					<span className="text-[clamp(1.5rem,4vw,3.5rem)] text-zinc-300 font-extrabold mb-2 tracking-widest block">
						AI in Academia
					</span>
					<span className="text-[clamp(4rem,12vw,13rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] drop-shadow-[0_0_40px_rgba(250,204,21,0.2)] pb-4 animate-gradient">
						IDEATHON
					</span>
				</h1>

				<p className="mt-4 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200">
					An innovation-focused event fostering critical thinking and
					problem-solving through structured stakeholder requirement analysis.
				</p>

				<div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up delay-300">
					<button
						type="button"
						onClick={() => setIsModalOpen(true)}
						className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl shadow-[0_10px_40px_rgba(250,204,21,0.35)] hover:shadow-[0_15px_50px_rgba(250,204,21,0.6)] hover:bg-yellow-300 hover:scale-110 transition-all duration-300 outline-none focus-visible:ring-4 ring-yellow-400/50 block cursor-pointer"
					>
						Register Now
					</button>
					<a
						href="#guidelines"
						className="px-8 py-4 bg-transparent border border-zinc-700 bg-zinc-900/40 backdrop-blur-md text-white font-bold rounded-xl hover:bg-zinc-800 transition-all block"
					>
						View Guidelines
					</a>
				</div>

				<div className="mt-24 flex flex-wrap justify-center gap-16 border-t border-zinc-800/60 pt-10 animate-fade-in-up delay-400">
					<div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
						<span className="text-3xl font-black text-white">2-3</span>
						<span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
							Team Members
						</span>
					</div>
					<div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
						<span className="text-3xl font-black text-white">March 8</span>
						<span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
							Registration Deadline
						</span>
					</div>
					<div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
						<span className="text-3xl font-black text-white">March 11</span>
						<span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
							Event Day
						</span>
					</div>
				</div>
			</div>

			<RegistrationClosedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
});

export default Hero;
