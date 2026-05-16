import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import MovieDataService from "../services/movies";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Movie = (props) => {
  const [movie, setMovie] = useState({
    _id: null,
    title: "",
    rated: "",
    plot: "",
    poster: "",
    reviews: [],
  });

  const getMovie = (id) => {
    MovieDataService.get(id)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    if (!props.user) return;
    MovieDataService.deleteReview(reviewId, props.user.id)
      .then(() => {
        setMovie((prevState) => {
          prevState.reviews.splice(index, 1);
          return { ...prevState };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={`${movie.poster}/100px250`} fluid />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header as="h5">{movie.title}</Card.Header>
            <Card.Body>
              <Card.Text>{movie.plot}</Card.Text>
              {props.user && (
                <Link to={`/movies/${props.match.params.id}/review`}>
                  Add Review
                </Link>
              )}
            </Card.Body>
          </Card>
          <br />
          <h2>Reviews</h2>
          <br />
          {movie.reviews &&
            movie.reviews.map((review, index) => {
              return (
                <Card className="mb-2" key={index}>
                  <Card.Body>
                    <h5>
                      {review.name} reviewed on{" "}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                    {props.user && props.user.id === review.user_id && (
                      <Row>
                        <Col>
                          <Link
                            to={{
                              pathname: `/movies/${props.match.params.id}/review`,
                              state: { currentReview: review },
                            }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button
                            variant="link"
                            onClick={() => deleteReview(review._id, index)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
