import Image from "next/image";

const marks: Record<string, { src: string; width: number; height: number }> = {
  bse: { src: "/logos/bse.png", width: 2160, height: 2160 },
  brown: { src: "/logos/brown.svg", width: 580, height: 287 },
  fdu: { src: "/logos/fdu.jpg", width: 2025, height: 525 },
  ucla: { src: "/logos/ucla.svg", width: 252, height: 82 },
};

export function OrganizationMark({ name }: { name: string }) {
  const mark = marks[name];
  // The adjacent organization heading provides the accessible name.
  return <span className={`organization-mark mark-${name}`} aria-hidden="true">
    {mark ? <Image src={mark.src} width={mark.width} height={mark.height} alt="" unoptimized /> : <span className="team-number">10366</span>}
  </span>;
}
