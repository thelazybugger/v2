// components/BackgroundEffects.jsx
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-20 bg-[#0C1C4D] pointer-events-none">
      <div className="absolute rounded-full top-80 left-1/3 -translate-x-1/2 w-96 h-96 bg-black blur-[120px]" />
      <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 w-96 h-96 bg-black blur-[120px]" />
      <div className="absolute rounded-full left-0 top-40 w-72 h-72 bg-black blur-[120px]" />
    </div>
  );
}
