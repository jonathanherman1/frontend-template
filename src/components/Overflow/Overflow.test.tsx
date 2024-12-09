import { render } from '@testing-library/react'
import { Overflow } from './Overflow'

describe('Overflow component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Overflow>Test Content</Overflow>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('contains minimum class set for overflow to work', () => {
    const { container } = render(<Overflow/>)
    expect(container.firstChild).toHaveClass('max-h-72 overflow-auto')
  })

  it('merges additional className correctly', () => {
    const { container } = render(<Overflow className="rounded-3xl" />)
    expect(container.firstChild).toHaveClass('rounded-3xl')
    expect(container.firstChild).not.toHaveClass('rounded-2xl')
  })

  it('merges additional classNames.base correctly', () => {
    const { container } = render(<Overflow classNames={{ base: "rounded-3xl" }} />)
    expect(container.firstChild).toHaveClass('rounded-3xl')
    expect(container.firstChild).not.toHaveClass('rounded-2xl')
  })
})
