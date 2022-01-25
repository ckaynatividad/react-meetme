import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    const logo = screen.getByAltText(/Alchemy/i)

    const name = await screen.findByText(/vonta/i)
    expect(name).toBeInTheDocument()
    // css prop
    expect(banner).toHaveStyle({
        background: 'var(--gray)',
    })
    expect(logo).toBeInTheDocument()
    expect(name).toBeInTheDocument()
})
