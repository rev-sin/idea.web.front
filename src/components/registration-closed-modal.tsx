import { useEffect } from "react";
import { Icons } from "./icons";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export function RegistrationClosedModal({ isOpen, onClose }: Props) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} onKeyDown={(e) => e.key === 'Escape' && onClose()} tabIndex={0} role="button" aria-label="Close modal background" />
            <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-2xl max-w-md w-full shadow-2xl animate-fade-in-up text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                    type="button"
                >
                    <Icons.X />
                </button>
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Registration Closed</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    Registration is closed and the teams have been selected for the pitching round.
                </p>
                <button
                    onClick={onClose}
                    className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-colors cursor-pointer"
                    type="button"
                >
                    Got it
                </button>
            </div>
        </div>
    );
}
