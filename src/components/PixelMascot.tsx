import { useState, useEffect } from "react";

const PixelMascot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Float based on scroll position
      setPosition({
        x: Math.sin(scrollY * 0.005) * 10,
        y: Math.cos(scrollY * 0.003) * 15,
      });

      // Hide mascot when scrolled too far down
      setIsVisible(scrollY < windowHeight * 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-8 right-8 z-50 pointer-events-none animate-bounce"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Pixel Art Character */}
      <div className="relative">
        {/* Character Body */}
        <div className="w-16 h-20 relative pixel-art">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-sm shadow-lg"></div>
          
          {/* Eyes */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          
          {/* Body */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-teal-400 to-teal-500 rounded-sm shadow-lg"></div>
          
          {/* Arms */}
          <div className="absolute top-8 left-0 w-3 h-4 bg-orange-400 rounded-sm shadow-md rotate-12"></div>
          <div className="absolute top-8 right-0 w-3 h-4 bg-orange-400 rounded-sm shadow-md -rotate-12"></div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-2 w-2 h-4 bg-teal-600 rounded-sm shadow-md"></div>
          <div className="absolute bottom-0 right-2 w-2 h-4 bg-teal-600 rounded-sm shadow-md"></div>
        </div>

        {/* Speech Bubble */}
        <div className="absolute -top-12 -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-xs px-2 py-1 rounded-lg shadow-lg border text-foreground whitespace-nowrap">
            Let's create something amazing!
          </div>
          <div className="absolute bottom-0 left-4 transform translate-y-full">
            <div className="border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelMascot;