"use client";

export const Background = () => {
  return (
    <div className="top-0 fixed -z-10 h-full w-full overflow-hidden">
      {/* Image de fond (inchangée) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlays très légers (on garde la lisibilité sans “dénaturer” l’image) */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

      {/* Grain subtil (plus léger) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E)",
        }}
      />
    </div>
  );
};
