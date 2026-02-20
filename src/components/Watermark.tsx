export default function Watermark() {
  return (
    <div className="absolute bottom-4 right-4 pointer-events-none select-none opacity-30">
      <p className="text-white text-[10px] sm:text-xs font-serif tracking-widest uppercase">
        © Analog Göz
      </p>
    </div>
  );
}
