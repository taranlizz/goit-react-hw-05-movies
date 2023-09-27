import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const getReviews = async () => {
      try {
        const { results } = await getMovies(
          `/movie/${movieId}/reviews`,
          controller
        );
        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    };
    getReviews();
    return () => controller.abort();
  }, [movieId]);
  console.log(reviews);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <p>AUTHOR: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>NO REVIEWS</p>
  );
};

export default Reviews;
