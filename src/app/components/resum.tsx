  import React, { useState, useEffect } from 'react';

  const ResumeViewer = () => {
    const googleDriveResumeLink = "https://drive.google.com/file/d/15d5nEBHPjpyX34guGCZEPYCeqrV04fAN/view?usp=sharing";
    const [bgColor, setBgColor] = useState('bg-blue-500');
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-pink-500'];
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      let colorIndex = 0;
      const interval = setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        setBgColor(colors[colorIndex]);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex justify-center mt-4">
        <a
          href={googleDriveResumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${bgColor} ${isHovered ? 'scale-110' : ''} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 animate-pulse" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
          View Resume
        </a>
      </div>
    );
  };

  export default ResumeViewer;
