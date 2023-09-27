import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import { AuthorName } from './Reviews.styled';
import toast from 'react-hot-toast';
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
          toast.error('Ooops... Something went wrong.');
        }
      }
    };
    getReviews();
    return () => controller.abort();
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <AuthorName>AUTHOR: {author}</AuthorName>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no reviews for this movie yet.</p>
  );
};

export default Reviews;
