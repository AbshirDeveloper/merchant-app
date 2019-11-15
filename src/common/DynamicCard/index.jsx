import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from '../form'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { red } from '@material-ui/core/colors';
import Card from '../reUsableComponents/Card'
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
        return (
            <div style={{
                width: '28%',
                marginLeft: '1%',
                display: 'inline-block'
            }}>
                <Card>
                    {this.props.children}
                </Card>
            </div>
        );
    }
}

export default DynamicCard;