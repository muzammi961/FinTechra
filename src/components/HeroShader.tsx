import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";
import { useData } from "../context/DataContext";

export default function HeroShader() {
  const { data } = useData();
  const accentColor = data.animations?.primaryColor || "#ff5f03";

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Shader style={{ width: "100%", height: "100%" }}>
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#ffffff"
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
