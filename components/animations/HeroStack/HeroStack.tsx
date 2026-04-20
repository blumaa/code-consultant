"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import styles from "./HeroStack.module.css";

type Block = {
  filename: string;
  width: number;
  scatterX: number;
  scatterY: number;
  scatterR: number;
  stackY: number;
};

const BLOCKS: Block[] = [
  { filename: "Button.tsx", width: 150, scatterX: 30, scatterY: 40, scatterR: -18, stackY: 40 },
  { filename: "api/login.ts", width: 150, scatterX: 210, scatterY: 70, scatterR: 12, stackY: 72 },
  { filename: "useAuth.ts", width: 150, scatterX: 60, scatterY: 110, scatterR: 8, stackY: 104 },
  {
    filename: "page.module.css",
    width: 150,
    scatterX: 230,
    scatterY: 148,
    scatterR: -22,
    stackY: 136,
  },
  { filename: "utils.ts", width: 150, scatterX: 40, scatterY: 188, scatterR: 15, stackY: 168 },
  {
    filename: "hooks/useCart.ts",
    width: 150,
    scatterX: 220,
    scatterY: 220,
    scatterR: -6,
    stackY: 200,
  },
];

const STACK_X = 200;
const BLOCK_HEIGHT = 28;

export function HeroStack() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      const blocks = root.current.querySelectorAll<SVGGElement>("[data-block]");

      if (prefersReducedMotion) {
        blocks.forEach((g, i) => {
          gsap.set(g, {
            x: STACK_X - BLOCKS[i].scatterX,
            y: BLOCKS[i].stackY - BLOCKS[i].scatterY,
            rotation: 0,
            transformOrigin: "center",
          });
          g.setAttribute("data-state", "clean");
        });
        return;
      }

      blocks.forEach((g, i) => {
        gsap.set(g, {
          x: 0,
          y: 0,
          rotation: BLOCKS[i].scatterR,
          transformOrigin: "center",
        });
        g.setAttribute("data-state", "messy");
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.4,
        defaults: { ease: "power3.inOut" },
      });

      blocks.forEach((g, i) => {
        tl.to(
          g,
          {
            x: STACK_X - BLOCKS[i].scatterX,
            y: BLOCKS[i].stackY - BLOCKS[i].scatterY,
            rotation: 0,
            duration: 0.9,
            onStart: () => g.setAttribute("data-state", "clean"),
          },
          0.12 * i,
        );
      });

      tl.to({}, { duration: 1.6 });

      blocks.forEach((g, i) => {
        tl.to(
          g,
          {
            x: 0,
            y: 0,
            rotation: BLOCKS[i].scatterR,
            duration: 0.5,
            ease: "power2.in",
            onStart: () => g.setAttribute("data-state", "messy"),
          },
          `+=${i === 0 ? 0 : 0}`,
        );
      });
    },
    { scope: root },
  );

  return (
    <svg
      ref={root}
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Files scattered with issues then aligned and clean"
      className={styles.svg}
    >
      <title>Messy code files aligning into an audited, clean stack</title>

      {BLOCKS.map((block) => {
        const cx = block.scatterX;
        const cy = block.scatterY;
        const w = block.width;
        return (
          <g key={block.filename} data-block data-state="messy" className={styles.block}>
            <rect x={cx} y={cy} width={w} height={BLOCK_HEIGHT} rx="6" className={styles.rect} />
            <text x={cx + 14} y={cy + BLOCK_HEIGHT / 2 + 4} className={styles.filename}>
              {block.filename}
            </text>
            <g className={styles.badge}>
              <circle
                cx={cx + w - 14}
                cy={cy + BLOCK_HEIGHT / 2}
                r="6"
                className={styles.badgeDot}
              />
              <polyline
                points={`${cx + w - 18},${cy + BLOCK_HEIGHT / 2} ${cx + w - 15},${cy + BLOCK_HEIGHT / 2 + 3} ${cx + w - 10},${cy + BLOCK_HEIGHT / 2 - 3}`}
                className={styles.badgeCheck}
                fill="none"
              />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
