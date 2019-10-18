import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from '../../common/form'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { red } from '@material-ui/core/colors';
import Card from '../../common/reUsableComponents/Card'
import Button from '@material-ui/core/Button';

class DynamicCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }
    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    pay = () => {
        this.props.deductFromProducts(this.props.cartSummary)
    }
    onDaynSubmit = (info) => {
        const cartTotal = this.props.cartTotal
        this.props.onDaynSubmit({
            info,
            cartTotal
        });
    }
    render() {
        const showExpanded = this.state.expanded ? 'inline-block' : 'none';
        const showCollapsed = !this.state.expanded ? 'inline-block' : 'none';
        return (
            <div style={{
                width: '38%',
                marginLeft: '1%'
            }}>
                <Card>
                    <CardMedia
                        className={this.props.classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <Button
                        style={{
                            float: 'right',
                            margin: '8px',
                            width: '119px',
                            height: '100px',
                            backgroundColor: 'green',
                        }}
                        variant="contained"
                        color="secondary"
                        className={this.props.classes.button}
                        onClick={this.pay}>
                        Bixi
                    </Button>
                    <CardContent>
                        <Typography style={{
                            color: 'green',
                            marginTop: '15px',
                            height: '19px',
                            width: '68px',
                            fontSize: '65px'
                        }} variant="body2" color="textSecondary" component="p">
                            {`$${this.props.cartTotal}`}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button onClick={this.handleExpandClick} style={{ float: 'left', margin: '16px', color: 'red' }} variant="outlined" color="secondary" className={this.props.classes.button}>
                            Dayn
                        <ExpandMoreIcon style={{ display: showExpanded }} />
                            <ExpandLessIcon style={{ display: showCollapsed }} />
                        </Button>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Form onDaynSubmit={this.onDaynSubmit} formElements={this.props.formElements} />
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default DynamicCard;