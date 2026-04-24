import React, { useState } from "react";
import { RegistrationClosedModal } from "./registration-closed-modal";

const RegistrationSection = React.memo(function RegistrationSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section
			id="register"
			className="relative w-full py-36 overflow-hidden border-t border-zinc-900 bg-black items-center justify-center flex flex-col"
		>
			<div className="aurora-bg">
				<div className="aurora-blob w-[60vw] h-[60vw] bg-pink-500/25 left-[-10%] top-[-10%]" />
				<div
					className="aurora-blob w-[50vw] h-[50vw] bg-indigo-500/25 right-[-10%] bottom-[-10%]"
					style={{ animationDelay: "-5s" }}
				/>
				<div
					className="aurora-blob w-[40vw] h-[40vw] bg-yellow-400/20 left-[30%] top-[40%]"
					style={{ animationDelay: "-8s" }}
				/>
			</div>

			<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
					Ready to <span className="text-yellow-400">innovate?</span>
				</h2>
				<p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
					Complete the registration form with your team details and 1-2 minute
					video proof before <strong>March 8, 2026, 5:00 PM</strong>.
				</p>

				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="relative inline-block px-12 py-5 bg-yellow-400 text-black font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-yellow-300 shadow-[0_10px_40px_rgba(250,204,21,0.35)] cursor-pointer
						before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:blur-xl before:transition"
				>
					Register Your Team
				</button>
			</div>

			<RegistrationClosedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
});

export default RegistrationSection;
