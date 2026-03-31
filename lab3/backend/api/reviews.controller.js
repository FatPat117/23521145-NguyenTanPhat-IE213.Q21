import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.review;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        movieId,
        userInfo,
        review,
        date
      );
      if (ReviewResponse && ReviewResponse.error) {
        return res.status(500).json({
          error:
            ReviewResponse.error?.message ?? String(ReviewResponse.error),
        });
      }

      if (!ReviewResponse || !ReviewResponse.insertedId) {
        return res
          .status(500)
          .json({ error: "addReview did not return insertedId" });
      }

      return res.json({
        status: "success"
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;
      const review = req.body.review;
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        userId,
        review,
        date
      );

      if (ReviewResponse && ReviewResponse.error) {
        return res.status(500).json({ error: ReviewResponse.error?.message ?? ReviewResponse.error });
      }

      if (ReviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review. User may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;

      const ReviewResponse = await ReviewsDAO.deleteReview(
        reviewId,
        userId
      );
      if (ReviewResponse && ReviewResponse.error) {
        return res.status(500).json({
          error:
            ReviewResponse.error?.message ?? String(ReviewResponse.error),
        });
      }
      res.json({ status: "success" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  }
}

