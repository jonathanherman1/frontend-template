import { twMerge } from 'tailwind-merge'
import type { ReactProps, StyleSlots } from '@/types'

export type OverflowProps = ReactProps & StyleSlots

export const Overflow = ({ children, className, classNames }: OverflowProps) => (
  <div className={twMerge("max-h-72 sm:max-h-96 w-full overflow-auto text-left rounded-2xl", className, classNames?.base)}>
    {children}
  </div>
)
