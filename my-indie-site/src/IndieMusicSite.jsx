import React from "react";

export default function IndieMusicSite() {
  const [page, setPage] = React.useState("home");

  return (
    <div className="min-h-screen bg-[#f4f4f2] text-black font-sans p-10 flex flex-col items-center">
      <nav className="flex gap-10 mb-12 text-black/70 uppercase tracking-wide text-sm">
        <button onClick={() => setPage("home")} className="hover:text-black">Home</button>
        <button onClick={() => setPage("about")} className="hover:text-black">About Us</button>
        <button onClick={() => setPage("bands")} className="hover:text-black">Our Bands</button>
      </nav>

      {page === "home" && (
        <div className="flex flex-col items-center gap-8 mt-16">
          <img src="/public/logo.png" alt="Logo" className="w-72 h-auto opacity-95 mb-6" />
          <h1 className="text-4xl font-light tracking-tight text-black/80">
            A Home for Independent Music
          </h1>
          <p className="max-w-2xl text-center text-black/60 leading-relaxed text-lg mt-4">
            Calm, clean, and artist-first. We provide professional guidance with a relaxed
            indie mindset — helping musicians grow without the noise or industry clutter.
          </p>
        </div>
      )}

      {page === "about" && (
        <div className="max-w-2xl text-center mt-10 leading-relaxed text-black/70">
          <h2 className="text-xl mb-6 uppercase tracking-widest">About Us</h2>
          <p>
            We are a laid-back, artist-first indie management group focused on supporting authentic creators.
            Our mission is simple: empower independent musicians without the noise, ego, or industry clutter.
          </p>
        </div>
      )}

      {page === "bands" && (
        <div className="max-w-3xl w-full mt-10 text-center">
          <h2 className="text-xl mb-6 uppercase tracking-widest text-black/70">Our Bands</h2>
          <div className="flex flex-col gap-4 text-black/70">
            <p>• Band Name #1</p>
            <p>• Band Name #2</p>
            <p>• Band Name #3</p>
          </div>
        </div>
      )}
    </div>
  );
}