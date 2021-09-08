import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

export default function Results({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-col-2 xl:grid-col-3  3xl:flex flex-wrap justify-center">
        {results.map((result) => (
            <Thumbnail key={result.id} result={result}/>
        ))}
            
        </FlipMove>
    )
}
