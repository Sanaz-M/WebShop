import Rating from '@material-ui/lab/Rating';


const SingleComment = ({ rate, subject, review }) => {


    return (
        <div>
            <div>
                <span><Rating name="half-rating-read" value={Number(rate)} precision={0.5} readOnly /></span>
                <span id="comment-subject">{subject}</span>
            </div>
            <div>
                <h6 id="comment-verifiedPurchase">Verified Purchase</h6>
                <p id="customer-preview">{review}</p>
            </div>
        </div>
    )
}

export default SingleComment;