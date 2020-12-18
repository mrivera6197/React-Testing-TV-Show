import React from 'react'
import { screen, render, waitFor, userEvent } from '@testing-library/react'
import App from './App'

import { mockData } from './api/mockData'
import { fetchShow as mockFetchShow } from './api/fetchShow'

jest.mock('./api/fetchShow')

test('renders without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData)
    render(<App />)

    const dropDown = await screen.findyByText(/select an option/i)
    userEvent.click(dropDown)

    const season = await screen.findByText(/season 1/i)
    userEvent.click(season)

    await waitFor(() => {
        const episodes = screen.getAllByTestId('episode')
        expect(episodes).toHaveLength(8)
    })
})