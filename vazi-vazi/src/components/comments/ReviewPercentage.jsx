import { ProgressBar } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const ReviewPercentage = ({ comments }) => {

    let totalLength = comments.length
    let fiveStarsLength = comments.filter(c => c.rate === '5').length
    let fourStarsLength = comments.filter(c => c.rate === '4').length
    let threeStarsLength = comments.filter(c => c.rate === '3').length
    let twoStarsLength = comments.filter(c => c.rate === '2').length
    let oneStarLength = comments.filter(c => c.rate === '1').length

    console.log(oneStarLength*100/totalLength)

    return (
        <Col>
            <span className="percent-of-rates">5 Stars<ProgressBar now={Math.floor(fiveStarsLength*100/totalLength) || 10} label={`${Math.floor(fiveStarsLength*100/totalLength)}%`} /></span>
            <span className="percent-of-rates">4 Stars</span><ProgressBar now={fourStarsLength*100/totalLength || 10} label={`${Math.floor(fourStarsLength*100/totalLength)}%`} />
            <span className="percent-of-rates">3 Stars</span><ProgressBar now={threeStarsLength*100/totalLength || 10} label={`${Math.floor(threeStarsLength*100/totalLength)}%`} />
            <span className="percent-of-rates">2 Stars</span><ProgressBar now={twoStarsLength*100/totalLength || 10} label={`${Math.floor(twoStarsLength*100/totalLength)}%`} />
            <span className="percent-of-rates">1 Stars</span><ProgressBar now={oneStarLength*100/totalLength || 10} label={Math.floor(oneStarLength*100/totalLength) + '%'} />
        </Col>
        
    )
}

export default ReviewPercentage;