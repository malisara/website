import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Review from './review';

export default function ReviewList() {

    const data = useStaticQuery(graphql`
    {
        allReviewsJson {
            edges {
              node {
                name
                text
                id
                stars
              }
            }
          }
        }
    `);

    const reviews = data.allReviewsJson.edges;
    const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);

    function handleNextReviewClick() {
        setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
    };

    function handlePrevReviewClick() {
        setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentReviewIndex, reviews]);

    return (
        <div className="review-list">
            {reviews.map((review, index) => (
                <Review
                    key={review.node.id}
                    fullName={review.node.name}
                    stars={review.node.stars}
                    text={review.node.text}
                    visible={index === currentReviewIndex}
                    handleNextReviewClick={handleNextReviewClick}
                    handlePrevReviewClick={handlePrevReviewClick}
                />
            ))}
        </div>
    );
}
