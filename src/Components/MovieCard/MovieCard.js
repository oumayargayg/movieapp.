import { Button } from 'react-bootstrap'
import React from 'react'
import {Card} from 'react-bootstrap'
import MovieRating from '../Rate/Rating'


const MovieCard = ({movie}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title> {movie.title} </Card.Title>
                    <Card.Text> {movie.description} </Card.Text>
                    <MovieRating movieRating={movie.rate} isMovieRating={true} />
                    <Button href={movie.trailer} target={"blanck"} > Trailer </Button>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard