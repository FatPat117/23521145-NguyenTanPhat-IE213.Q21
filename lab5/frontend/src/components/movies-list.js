import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieDataService from "../services/movies";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("All Ratings");
  const [ratings, setRatings] = useState(["All Ratings"]);

  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then((response) => {
        setMovies(response.data.movies || []);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then((response) => {
        setRatings(["All Ratings"].concat(response.data || []));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const onChangeSearchRating = (e) => {
    setSearchRating(e.target.value);
  };

  const find = (query, by) => {
    MovieDataService.find(query, by)
      .then((response) => {
        setMovies(response.data.movies || []);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    if (!searchTitle.trim()) {
      retrieveMovies();
      return;
    }
    find(searchTitle, "title");
  };

  const findByRating = () => {
    if (searchRating === "All Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  return (
    <Container className="mt-3">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={findByTitle}>
            Search
          </Button>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Select value={searchRating} onChange={onChangeSearchRating}>
              {ratings.map((rating) => (
                <option value={rating} key={rating}>
                  {rating}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="button" onClick={findByRating}>
            Search
          </Button>
        </Col>
      </Row>

      <Row className="g-3">
        {movies.map((movie) => (
          <Col key={movie._id} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={`${movie.poster}/100px180`}
                alt={movie.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Rating: {movie.rated}</Card.Text>
                <Card.Text>{movie.plot}</Card.Text>
                <Link className="mt-auto" to={`/movies/${movie._id}`}>
                  View Reviews
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesList;
