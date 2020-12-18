import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'

test('renders without errors', () => {
    render(<Episodes episodes={[]}/>)
})

test('rerenders episodes when new episodes are added', () => {
    const { rerender } = render(<Episodes episodes={[]}/>)
    const newEpisodes = [
    {   id: 1, 
        airdate: 'today',
        name: 'mali',
        season: 1,
        summary: 'cool show',
    },
    {   id: 2, 
        airdate: 'tomorrow',
        name: 'mali2',
        season: 1,
        summary: 'cooler show',
    }]

    expect(screen.queryAllByTestId('episode')).toHaveLength(0)

    rerender(<Episodes episodes={newEpisodes} />)

    expect(screen.queryAllByTestId('episode')).toHaveLength(2)
}) 