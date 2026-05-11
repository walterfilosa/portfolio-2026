"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current!,
            publicKey
        )
            .then(() => {
                setStatus('success');
                formRef.current?.reset();
                setTimeout(() => setStatus('idle'), 5000); // Torna normale dopo 5s
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center">

                <motion.div className="mb-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Mettiamoci in <span className="text-[#002060]">Contatto</span>
                    </h2>
                </motion.div>

                <motion.div className="w-full max-w-3xl">
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="glass-panel p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
                    >
                        {/* Overlay di Successo iOS Style */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center text-[#002060]"
                                >
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                                        <CheckCircle2 size={60} strokeWidth={1.5} />
                                    </motion.div>
                                    <p className="mt-4 font-bold text-xl">Messaggio Inviato!</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700 ml-2">Nome</label>
                                <input
                                    type="text" name="from_name" required placeholder="Il tuo nome"
                                    className="bg-white/50 border border-gray-200/50 rounded-2xl px-5 py-3 outline-none focus:border-[#002060]/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700 ml-2">Email</label>
                                <input
                                    type="email" name="from_email" required placeholder="la-tua@email.com"
                                    className="bg-white/50 border border-gray-200/50 rounded-2xl px-5 py-3 outline-none focus:border-[#002060]/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700 ml-2">Messaggio</label>
                            <textarea
                                name="message" required rows={5} placeholder="Come posso aiutarti?"
                                className="bg-white/50 border border-gray-200/50 rounded-2xl px-5 py-3 outline-none focus:border-[#002060]/50 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="mt-4 bg-[#002060] text-white font-bold rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Inviando...
                </span>
                            ) : status === 'error' ? (
                                <span className="flex items-center gap-2">
                  <AlertCircle size={20} /> Riprova
                </span>
                            ) : (
                                <span className="flex items-center gap-2 cursor-pointer">
                  <Send size={18} /> Invia Messaggio
                </span>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;