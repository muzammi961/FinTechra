import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";
import { useData } from "../context/DataContext";
import { useState, useEffect } from "react";

export default function HeroShader() {
  const { data } = useData();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    setIsDark(root.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const accentColor = isDark 
    ? (data.animations?.dark?.primaryColor || "#F58220")
    : (data.animations?.light?.primaryColor || "#F58220");

  const bgColor = isDark
    ? (data.animations?.dark?.backgroundColor || "#0B1120")
    : (data.animations?.light?.backgroundColor || "#ffffff");

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Shader style={{ width: "100%", height: "100%" }}>
        <Swirl colorA={bgColor} colorB={bgColor} detail={1.7} />
        <ChromaFlow
          baseColor={bgColor}
          downColor={accentColor}
          leftColor={accentColor}
          rightColor={accentColor}
          upColor={accentColor}
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  );
}
