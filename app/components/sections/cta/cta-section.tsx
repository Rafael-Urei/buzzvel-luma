import Image from "next/image"
import { Section } from "../../section/section"
import Link from "next/link"
import { buttonVariants } from "../../button/button"

interface Shape {
  x: number
  y: number
  w: number
  h: number
  rotate?: number
  src?: string
  className?: string
}

const pct = (value: number, total: number) => `${(value / total) * 100}%`
const CTA_CANVAS = { width: 1280, height: 469.5 }
const fill = "bg-background-orange"

const shapes: Shape[] = [
  { src: "/shapes/empty-circle.svg", x: 22, y: 16.06, w: 108, h: 108 },
  {
    src: "/shapes/empty-square.svg",
    x: 317,
    y: 42.37,
    w: 56,
    h: 56,
    rotate: 12,
  },
  { src: "/shapes/empty-circle.svg", x: 877, y: 43.06, w: 32, h: 32 },
  {
    className: `${fill} rounded-lg`,
    x: 1144,
    y: -23.94,
    w: 115.06,
    h: 115.06,
    rotate: 12,
  },
  {
    className: `${fill} rounded-lg`,
    x: -33,
    y: 230.06,
    w: 56,
    h: 56,
    rotate: 12,
  },
  { src: "/shapes/chat-filled.svg", x: 141, y: 214.06, w: 32, h: 32 },
  { src: "/shapes/filled-circle.svg", x: 56, y: 373.06, w: 120, h: 120 },
  { src: "/shapes/filled-circle.svg", x: 1064, y: 468.37, w: 40, h: 40 },
  { src: "/shapes/b.svg", x: 272, y: 360.06, w: 82.56, h: 82.56, rotate: 15 },
  { src: "/shapes/cube.svg", x: 1120, y: 220.37, w: 80, h: 80 },
  { src: "/shapes/water-drop.svg", x: 1016, y: 82.06, w: 61.38, h: 61.38 },
  { src: "/shapes/money.svg", x: 963, y: 381.06, w: 48, h: 48 },
  { src: "/shapes/empty-circle.svg", x: 1208, y: 429.09, w: 32, h: 32 },
]

function BackgroundShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {shapes.map((shape, index) => {
        const style = {
          left: pct(shape.x, CTA_CANVAS.width),
          top: pct(shape.y, CTA_CANVAS.height),
          width: shape.w,
          height: shape.h,
          transform: shape.rotate ? `rotate(${shape.rotate}deg)` : undefined,
        }

        return shape.src ? (
          <Image
            key={index}
            src={shape.src}
            alt=""
            width={Math.round(shape.w)}
            height={Math.round(shape.h)}
            unoptimized
            className="absolute max-w-none"
            style={style}
          />
        ) : (
          <span
            key={index}
            className={`absolute ${shape.className}`}
            style={style}
          />
        )
      })}
    </div>
  )
}

export default function CtaSection() {
  return (
    <Section
      background="accent"
      className="relative overflow-hidden text-center"
    >
      <BackgroundShapes />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <Image src="/four-avatars.png" alt="" width={1000} height={400} />

        <h2 className="text-text-primary mt-10 text-[36px] leading-10 font-extrabold tracking-[-0.9px] md:text-[56px] md:leading-16 md:tracking-[-1.4px]">
          What will you learn next?
        </h2>
        <p className="text-text-secondary mt-4 text-base leading-7 md:text-lg">
          Start with one course. Build from there.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-3 text-center md:flex-row">
          <Link
            href="#"
            className={buttonVariants({
              className: "w-full justify-center px-7 py-3.5 md:max-w-max",
            })}
          >
            Explore all courses
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
              className: "w-full justify-center px-7 py-3.5 md:max-w-max",
            })}
          >
            Join Luma
          </Link>
        </div>
      </div>
    </Section>
  )
}
