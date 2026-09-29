"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const lines = t.contact.headline;

  const [submitted, setSubmitted] = useState(false);
  const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: "", lastName: "", service: "", email: "", description: "" });
    }, 6000);
  };

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#E6007A] selection:text-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Animated Headline + Socials & Email Grouped ── */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Interactive Animated Headline with Kinetic Letter Wave & Pink-Red Shift */}
              <div
                onMouseEnter={() => setIsHeadlineHovered(true)}
                onMouseLeave={() => setIsHeadlineHovered(false)}
                className="select-none cursor-pointer"
              >
                <h1 className="font-alinsa text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight uppercase leading-[0.95]">
                  {lines.map((line, lineIdx) => (
                    <span key={lineIdx} className="block overflow-visible whitespace-nowrap">
                      {line.split("").map((char, charIdx) => {
                        const globalIdx = lineIdx * 15 + charIdx;
                        return (
                          <motion.span
                            key={charIdx}
                            className="inline-block"
                            animate={
                              isHeadlineHovered && char !== " "
                                ? {
                                    y: [0, -10, 2, 0],
                                    rotate: [0, (globalIdx % 2 === 0 ? 3 : -3), 0],
                                    transition: {
                                      duration: 0.65,
                                      delay: charIdx * 0.025,
                                      ease: [0.34, 1.56, 0.64, 1],
                                      repeat: Infinity,
                                      repeatDelay: 1.1,
                                    },
                                  }
                                : { y: 0, rotate: 0 }
                            }
                            style={{
                              display: char === " " ? "inline" : "inline-block",
                            }}
                          >
                            <span
                              className={`transition-all duration-500 ${
                                isHeadlineHovered
                                  ? "bg-gradient-to-r from-[#FF1E8A] via-[#E60039] via-[#FF4580] to-[#C8102E] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(230,0,57,0.22)]"
                                  : "text-neutral-950"
                              }`}
                            >
                              {char}
                            </span>
                          </motion.span>
                        );
                      })}
                    </span>
                  ))}
                </h1>
              </div>

              {/* Social links on top of email, together without separation */}
              <div className="space-y-4 pt-4">
                {/* Socials Row */}
                <div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
                  <a
                    href="https://www.linkedin.com/in/ingrid-gobierno/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 hover:text-neutral-950 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Email directly underneath */}
                <div>
                  <a
                    href="mailto:ingridlaragob@gmail.com"
                    className="text-lg sm:text-xl font-medium text-neutral-900 hover:text-[#E6007A] transition-colors inline-block border-b border-neutral-300 pb-0.5"
                  >
                    ingridlaragob@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Clean Form ── */}
          <div className="lg:col-span-6 w-full lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <div className="py-14 space-y-4">
                  <div className="flex items-center space-x-3 text-[#E6007A]">
                    <CheckCircle className="w-7 h-7" />
                    <span className="text-xs uppercase tracking-widest font-bold">
                      {t.contact.successBadge}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-950">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-neutral-500 max-w-md leading-relaxed text-sm">
                    {t.contact.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-9">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-950">
                      {t.contact.nameLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.firstNamePlaceholder}
                        className="w-full border-b border-neutral-200 py-3 bg-transparent text-sm placeholder:text-neutral-300 text-neutral-900 focus:border-neutral-950 focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.lastNamePlaceholder}
                        className="w-full border-b border-neutral-200 py-3 bg-transparent text-sm placeholder:text-neutral-300 text-neutral-900 focus:border-neutral-950 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-950">
                      {t.contact.serviceLabel}
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border-b border-neutral-200 py-3 bg-transparent text-sm text-neutral-900 focus:border-neutral-950 focus:outline-none transition-colors appearance-none cursor-pointer pr-8"
                      >
                        <option value="" disabled>
                          {t.contact.servicePlaceholder}
                        </option>
                        <option value="ux-ui">{t.contact.services.uxUi}</option>
                        <option value="graphic-design">{t.contact.services.graphicDesign}</option>
                        <option value="video-motion">{t.contact.services.videoMotion}</option>
                        <option value="seo">{t.contact.services.seo}</option>
                        <option value="other">{t.contact.services.other}</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-950">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full border-b border-neutral-200 py-3 bg-transparent text-sm placeholder:text-neutral-300 text-neutral-900 focus:border-neutral-950 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project description */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-neutral-950">
                      {t.contact.descriptionLabel}
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      placeholder={t.contact.descriptionPlaceholder}
                      className="w-full border-b border-neutral-200 py-3 bg-transparent text-sm placeholder:text-neutral-300 text-neutral-900 focus:border-neutral-950 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Flat Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-10 py-3.5 rounded-full bg-[#E60039] hover:bg-[#E6007A] text-white font-bold text-sm active:scale-95 transition-colors duration-200 cursor-pointer"
                    >
                      {t.contact.submitButton}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
