import React from "react";

export const FigmaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

export const AfterEffectsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} bg-[#00005b] border border-[#9999ff]/40 rounded-lg flex items-center justify-center text-[#9999ff] font-bold text-xs select-none shadow-xs`}>
    Ae
  </div>
);

export const PremiereIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} bg-[#00005b] border border-[#ea77ff]/40 rounded-lg flex items-center justify-center text-[#ea77ff] font-bold text-xs select-none shadow-xs`}>
    Pr
  </div>
);

export const IllustratorIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} bg-[#330000] border border-[#ff9a00]/40 rounded-lg flex items-center justify-center text-[#ff9a00] font-bold text-xs select-none shadow-xs`}>
    Ai
  </div>
);

export const PhotoshopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} bg-[#001e36] border border-[#31a8ff]/40 rounded-lg flex items-center justify-center text-[#31a8ff] font-bold text-xs select-none shadow-xs`}>
    Ps
  </div>
);

export const DaVinciIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="4" fill="#FF4B4B" />
    <circle cx="8" cy="15" r="4" fill="#22C55E" />
    <circle cx="16" cy="15" r="4" fill="#3B82F6" />
  </svg>
);

export const Cinema4DIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center text-white font-bold text-[10px] tracking-tight select-none shadow-xs`}>
    C4D
  </div>
);

export const FramerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

export const BlenderIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="12" r="4" fill="#EA7600" />
    <path d="M5 17.5C3.5 15.5 3 13.8 3 12c0-3.9 3-7 7-7h.5L7 9H4" stroke="#265787" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 6.5L10.5 5h6C19.5 5 21 8 21 10c0 1.5-.5 3-1.5 4L17 16.5c-1 1-2.5 2.5-5 2.5-3.5 0-6-2.5-6-5.5" stroke="#265787" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="14" cy="12" r="2" fill="white" />
  </svg>
);

export const FrontendIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6L3 12l5 6" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6l5 6-5 6" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4l-4 16" stroke="#E34F26" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
