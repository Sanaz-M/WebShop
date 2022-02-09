import './comment.css';
import { Row, Col } from 'react-bootstrap';
import SingleComment from './SingleComment';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsAction } from '../../redux/action';
import { useState, useEffect } from "react";
import Rating from '@material-ui/lab/Rating';
import ReviewPercentage from './ReviewPercentage';

const CommentArea = ({ comments }) => {

    const allRates = comments.map(comment => Number(comment.rate))

    const evaluateTotalRates = (allRates.reduce((accumulator, curr) => accumulator + curr, 0))/allRates.length;
    console.log(evaluateTotalRates)

    

    return (
        <Row className="mt-5 p-4">
            <Col lg={4} className="p-2">
                <h4 className="commentArea-heading">Customer Ratings</h4>
                <Rating name="half-rating-read" value={evaluateTotalRates} precision={0.5} readOnly />
                <span className="number-of-reviews">{comments.length} global customer reviews</span>
            <ReviewPercentage comments={comments}/>
            </Col>
            <Col lg={8}>
                <h4 className="commentArea-heading">Customer Reviews</h4>
                {
                    comments.map((comment) => (
                        <SingleComment rate={comment.rate} subject={comment.subject} review={comment.comment} />
                    ))
                }

            </Col>
        </Row>
    )
}

export default CommentArea;