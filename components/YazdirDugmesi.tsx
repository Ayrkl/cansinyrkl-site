"use client";

export function YazdirDugmesi({ metin }: { metin: string }) {
  return (
    <button className="dugme" type="button" onClick={() => window.print()}>
      {metin}
    </button>
  );
}
