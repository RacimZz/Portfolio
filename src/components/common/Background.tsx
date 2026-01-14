"use client";

export const Background = () => {
  return (
    <div className="top-0 fixed -z-10 h-full w-full overflow-hidden">
      {/* Image de fond */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Voile sombre + léger dégradé pour la lisibilité */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

      {/* Grain subtil */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E)",
        }}
      />
    </div>
  );
};
