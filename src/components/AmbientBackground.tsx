export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.12),transparent_55%)]" />
      <div className="anti-grid-blob w-[600px] h-[600px] rounded-full bg-[#7FB4FF] top-[-10%] left-[-10%]" />
      <div className="anti-grid-blob w-[500px] h-[500px] rounded-full bg-[#7FE4EE] top-[40%] right-[-10%]" />
      <div className="anti-grid-blob w-[400px] h-[400px] rounded-full bg-[#C9B8FF] bottom-[-10%] left-[30%]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
