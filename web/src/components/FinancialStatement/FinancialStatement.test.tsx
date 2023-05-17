import { render } from '@redwoodjs/testing/web'

import FinancialStatement from './FinancialStatement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FinancialStatement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FinancialStatement />)
    }).not.toThrow()
  })
})
