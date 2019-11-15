import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from '../../../common/form'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';

class Card extends Component {
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
        return (
            <div style={{ display: 'inline-block' }}>
                <CardMedia
                    className={this.props.classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                {/* <Button
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
                    </Button> */}
                <CardContent>
                    <Typography style={{
                        color: this.props.color.magac,
                        height: '19px',
                        width: '68px',
                        fontSize: '35px',
                        display: 'inline-block'
                    }} variant="body2" color="textSecondary" component="p">
                        {this.props.type}
                    </Typography>:
                    <Typography style={{
                        color: this.props.color.lacag,
                        height: '19px',
                        width: '68px',
                        fontSize: '35px',
                        display: 'inline-block',
                        float: 'right'
                    }} variant="body2" color="textSecondary" component="p">
                        {this.props.cartTotal && `$${this.props.cartTotal}`}
                    </Typography>
                </CardContent>
            </div>
        );
    }
}

export default Card;