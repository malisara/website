import * as React from 'react';
import {
    changeReviewContainer,
    contentReview,
    hideReview,
    reviewDiv,
    reviewer,
    reviewText,
    star,
    starContainer,
    quoteMark,
} from './style.module.css';
import { ArrowLeft, ArrowRight, Star } from 'react-feather';

export default function Review({
    fullName,
    text,
    stars,
    visible,
    handlePrevReviewClick,
    handleNextReviewClick }) {
    const starArray = Array.from({ length: stars }, (_, i) => <Star key={i} className={star} />);

    return (
        <>
            <div className={!visible ? hideReview : reviewDiv}>
                <div className={contentReview}>

                    <div className={starContainer}>
                        {starArray}
                    </div>

                    <div className={reviewText}>
                        <span className={quoteMark}>" </span>
                        {text}
                        <span className={quoteMark}>"</span>
                    </div>

                    <div className={reviewer}>{fullName}</div>

                    <div className={changeReviewContainer}>
                        <button onClick={handlePrevReviewClick} aria-label='Previous review'><ArrowLeft /></button>
                        <button onClick={handleNextReviewClick} aria-label='Next review'><ArrowRight /></button>
                    </div>
                </div>
            </div >
        </>
    );
};
