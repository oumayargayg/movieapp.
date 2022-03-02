import React from 'react'
import {Card} from 'react-bootstrap'
import MovieRating from '../Rate/Rating'


const MovieCard = ({movie}) => {
    return (
        <div>
            <Card className='oncard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title> {movie.title} </Card.Title>
                    <Card.Text> {movie.description} </Card.Text>
                    <MovieRating  />

                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard