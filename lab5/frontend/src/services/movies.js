import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1/movies";

class MovieDataService {
  getAll(page = 0) {
    return axios.get(`${apiBaseUrl}?page=${page}`);
  }

  get(id) {
    return axios.get(`${apiBaseUrl}/id/${id}`);
  }

  find(query, by = "title", page = 0) {
    return axios.get(`${apiBaseUrl}?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axios.post(`${apiBaseUrl}/review`, data);
  }

  updateReview(data) {
    return axios.put(`${apiBaseUrl}/review`, data);
  }

  deleteReview(id, userId) {
    return axios.delete(`${apiBaseUrl}/review`, {
      data: { review_id: id, user_id: userId },
    });
  }

  getRatings() {
    return axios.get(`${apiBaseUrl}/ratings`);
  }
}

export default new MovieDataService();
