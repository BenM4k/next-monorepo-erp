"use client"
import { cn } from "@workspace/ui/lib/utils"
import Link, { LinkProps, useLinkStatus } from "next/link"
import { usePathname } from "next/navigation"
import { forwardRef } from "react"

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string
  activeClassName?: string
  pendingClassName?: string
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathName = usePathname()
    const isActive = pathName === href
    const { pending } = useLinkStatus()
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          isActive && activeClassName,
          pending && pendingClassName
        )}
        {...props}
      />
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }
