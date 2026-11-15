"use client"

import { ComponentProps, useEffect, useRef } from "react"
import { tv, VariantProps } from "tailwind-variants"

const sheetVariants = tv({
  base: [
    "fixed bg-white p-0 text-inherit",
    "transition-[translate,overlay,display] duration-300 ease-out transition-discrete motion-reduce:transition-none",
    "backdrop:bg-black/50 backdrop:transition-[opacity,overlay,display] backdrop:duration-300 backdrop:transition-discrete motion-reduce:backdrop:transition-none",
    "not-open:backdrop:opacity-0 starting:open:backdrop:opacity-0",
  ],
  variants: {
    side: {
      top: "inset-x-0 top-0 bottom-auto h-auto max-h-dvh w-full max-w-none not-open:-translate-y-full starting:open:-translate-y-full",
      bottom:
        "inset-x-0 top-auto bottom-0 h-auto max-h-dvh w-full max-w-none not-open:translate-y-full starting:open:translate-y-full",
      left: "inset-y-0 right-auto left-0 h-dvh max-h-dvh w-full max-w-6xl not-open:-translate-x-full starting:open:-translate-x-full",
      right:
        "inset-y-0 right-0 left-auto h-dvh max-h-dvh w-full max-w-6xl not-open:translate-x-full starting:open:translate-x-full",
    },
  },
  defaultVariants: {
    side: "right",
  },
})

interface SheetProps
  extends
    Omit<ComponentProps<"dialog">, "open" | "onClose">,
    VariantProps<typeof sheetVariants> {
  open: boolean
  onClose: () => void
}

export default function Sheet({
  open,
  onClose,
  side,
  className,
  children,
  onClick,
  ...props
}: SheetProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className={sheetVariants({ side, className })}
      onClose={onClose}
      onClick={(event) => {
        onClick?.(event)
        if (event.target === event.currentTarget) onClose()
      }}
      {...props}
    >
      <div className="h-full max-h-dvh overflow-y-auto overscroll-contain">
        {children}
      </div>
    </dialog>
  )
}
