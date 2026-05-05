import React, { useState } from "react";
import MovieDataService from "../services/movies";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const AddReview = (props) => {
  const initialReviewState = "";
  const [review, setReview] = useState(
    props.location?.state?.currentReview?.review || initialReviewState
  );
  const [submitted, setSubmitted] = useState(false);

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const saveReview = () => {
    const data = {
      review,
      name: props.user?.name || "Guest",
      user_id: props.user?.id || "anonymous",
      movie_id: props.match.params.id,
    };

    const request = props.location?.state?.currentReview
      ? MovieDataService.updateReview({
          review_id: props.location.state.currentReview._id,
          user_id: data.user_id,
          review: data.review,
        })
      : MovieDataService.createReview(data);

    request
      .then(() => {
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="mt-3">
      <h4>{props.location?.state?.currentReview ? "Edit" : "Add"} Review</h4>
      {submitted ? (
        <div>
          <h5>Review submitted successfully.</h5>
          <Button variant="primary" onClick={() => props.history.push("/movies")}>
            Back to Movies
          </Button>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              required
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>
          <Button variant="primary" onClick={saveReview} disabled={!review.trim()}>
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddReview;
