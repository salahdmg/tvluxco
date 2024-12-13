export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <img
        src="https://i.pinimg.com/736x/e3/f1/09/e3f109b357780f11e67f138925884984.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_2px,transparent_2px)] bg-[length:24px_24px]" />
    </div>
  );
}