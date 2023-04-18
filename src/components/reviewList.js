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

    const handleNextReviewClick = () => {
        setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
    };

    const handlePrevReviewClick = () => {
        setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
    };

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
