import type React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import logoMudapedia from '@/images/logo-mudapedia.svg'

// The Logomark component uses the gradient "M" logo
export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div {...props}>
      <Image
        src={logoMudapedia || '/placeholder.svg'}
        alt="Mudapedia Logo"
        width={130}
        height={130}
        className={clsx(
          'transition-all duration-300',
          invert ? 'brightness-0 invert' : '',
        )}
      />
    </div>
  )
}

// The Logo component now combines the "M" logo with the text SVG
export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2',
        fillOnHover && 'group/logo',
        className,
      )}
      {...props}
    >
      <Logomark
        invert={invert}
        filled={filled}
        className={clsx(
          fillOnHover && 'group-hover/logo:opacity-100',
          'transition-opacity duration-300',
        )}
      />
    </div>
  )
}
