import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'
import { StyleSlots } from '@/types'

export type DateDisplayProps = StyleSlots & {
  date: Date | undefined
}

export const DateDisplay = ({ className, classNames, date }: DateDisplayProps) => (
  date ? (
    <span className={twMerge(className, classNames?.base)}>{dayjs(date).format('MMM D, YYYY h:mm A')}</span>
  ) : <></>
)
