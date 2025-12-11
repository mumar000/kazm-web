import React from 'react';

const KazmLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] bg-white p-10 w-full h-screen">
      <div className="relative flex items-center justify-center w-[260px] h-[260px] font-sans text-[1.8em] font-light text-black rounded-full select-none">
        <style>
          {`
            @keyframes loader-rotate {
              0% {
                transform: rotate(90deg);
                box-shadow: 0 10px 20px 0 #64748b inset, 0 20px 30px 0 #334155 inset, 0 60px 60px 0 #1f2937 inset; /* slate-500, slate-700, gray-800 */
              }
              50% {
                transform: rotate(270deg);
                box-shadow: 0 10px 20px 0 #64748b inset, 0 20px 10px 0 #475569 inset, 0 40px 60px 0 #0f172a inset; /* slate-500, slate-600, slate-900 */
              }
              100% {
                transform: rotate(450deg);
                box-shadow: 0 10px 20px 0 #64748b inset, 0 20px 30px 0 #334155 inset, 0 60px 60px 0 #1f2937 inset;
              }
            }
            @keyframes loader-letter-anim {
              0%, 100% { opacity: 0.4; transform: translateY(0); }
              20% { opacity: 1; transform: scale(1.15); }
              40% { opacity: 0.7; transform: translateY(0); }
            }
          `}
        </style>

        <div className="z-10 flex space-x-1">
          {['K', 'A', 'Z', 'M'].map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-40"
              style={{
                animation: `loader-letter-anim 2s infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full rounded-full z-0"
          style={{ animation: 'loader-rotate 2s linear infinite' }}
        />
      </div>
    </div>
  );
};

export default KazmLoader;
