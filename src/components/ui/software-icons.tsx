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
  <svg className={className} viewBox="0 0 24 24" fill="#E87D0D" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"/>
  </svg>
);

export const UnityIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"/>
  </svg>
);

export const FrontendIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6L3 12l5 6" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6l5 6-5 6" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4l-4 16" stroke="#E34F26" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
