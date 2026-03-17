"use client"
import { motion, type HTMLMotionProps } from "motion/react"
import { PropsWithChildren } from "react"

export function MotionDiv({
  children,
  ...props
}: PropsWithChildren & HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>
}

export function MotionP({
  children,
  ...props
}: PropsWithChildren & HTMLMotionProps<"p">) {
  return <motion.p {...props}>{children}</motion.p>
}
