import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DateDisplay } from './DateDisplay'

describe('DateDisplay', () => {
  it('renders the formatted date when date is provided', () => {
    const date = new Date('2023-10-01T12:00:00Z')
    const { getByText } = render(<DateDisplay date={date} />)
    expect(getByText('Oct 1, 2023 12:00 PM')).toBeInTheDocument()
  })

  it('renders nothing when date is undefined', () => {
    const { container } = render(<DateDisplay date={undefined} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('applies the provided className and classNames.base', () => {
    const date = new Date('2023-10-01T12:00:00Z')
    const { container } = render(
      <DateDisplay
        className='text-red-500'
        classNames={{
          base: 'bg-blue-500',
        }}
        date={date}
      />
    )
    const span = container.querySelector('span')
    expect(span).toHaveClass('text-red-500 bg-blue-500')
  })
})
