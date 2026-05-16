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
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  const find = (query, by) => {
    MovieDataService.find(query, by, currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveMovies = () => {
    setCurrentSearchMode("");
    MovieDataService.getAll(currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then((response) => {
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    setCurrentSearchMode("findByTitle");
    find(searchTitle, "title");
  };

  const findByRating = () => {
    setCurrentSearchMode("findByRating");
    if (searchRating === "All Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  const retrieveNextPage = () => {
    if (currentSearchMode === "findByTitle") findByTitle();
    else if (currentSearchMode === "findByRating") findByRating();
    else retrieveMovies();
  };

  useEffect(() => {
    retrieveRatings();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(0);
  }, [currentSearchMode]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    retrieveNextPage();
  }, [currentPage]);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchRating = (e) => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
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

      <br />
      Showing page: {currentPage}.
      <Button
        variant="link"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Get next {entriesPerPage} results
      </Button>
    </Container>
  );
};

export default MoviesList;
