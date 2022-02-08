import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const ProductAccordion = ({color, origin, composition}) => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}><strong>Product Details</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Color: {color}</li>
                            <li>Made in: {origin}</li>
                            <li>Composition: {composition}</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}><strong>Free Delivery and Returns</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Free standard delivery with your Vazi Vazi Membership.
                        <br /> <br />
                        <ul>
                            <li>Delivery may take longer than normal. Check your estimated delivery date at checkout.</li>
                            <li>You can return your order for any reason, free of charge, within 60 days.</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default ProductAccordion;