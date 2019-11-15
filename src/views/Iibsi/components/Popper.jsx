import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../index.css'
import DynamicCard from '../../../common/DynamicCard'
// import Search from '../../common/Search'
import Card from './Card'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BackspaceIcon from '@material-ui/icons/Backspace';

export default class AlertDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value: '',
            total: 0
        }
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleOnChange = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    hanldeButtonClick = (value) => {
        if (value === 'delete') {
            let valueArray = this.state.value.toString().split('')
            valueArray.pop()
            const newValue = valueArray.join('');
            this.setState({
                value: newValue,
                total: newValue * this.props.selectedProduct.qiimo_halkii_xabo
            })
        } else {
            const newValue = +`${this.state.value}${value}`
            this.setState({
                value: newValue,
                total: newValue * this.props.selectedProduct.qiimo_halkii_xabo
            })
        }
    }

    handleContinue = () => {
        const newObject = {
            ...this.props.selectedProduct,
            intaxabo: this.state.value,
            iskudar: this.state.value * this.props.selectedProduct.qiimo_halkii_xabo
        }
        this.props.handleContinueFromPopper(newObject)
        this.setState({
            value: '',
            total: 0
        })
    }

    render() {
        const buttonClass = {
            width: '90px',
            height: '90px',
            fontSize: '50px',
            borderRadius: '20px'
        }

        const actionButtonClass = {
            width: '142px',
            fontSize: '21px',
            height: '63px',
            borderRadius: '29px',
            border: 'solid',
        }
        const total = this.state.total ? this.state.total : (1 * this.props.selectedProduct.qiimo_halkii_xabo)
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="popperClass"
                >
                    <DialogTitle className="productName" id="alert-dialog-title">{this.props.selectedProduct.badeeco}</DialogTitle>
                    <DialogContent>
                        {/* <DynamicCard> */}
                        <TextField
                            id="outlined-number"
                            label="Number"
                            value={this.state.value}
                            onChange={this.handleOnChange}
                            type="number"
                            className='inputField'
                            style={{
                                width: '55%'
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <DialogTitle className="price productName" id="alert-dialog-title">{`$${total}`}</DialogTitle>

                        {/* </DynamicCard> */}
                        <Grid item>
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(0)}>0</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(1)}>1</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(2)}>2</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(3)}>3</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(4)}>4</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(5)}>5</Button>
                            </ButtonGroup> <br />
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(6)}>6</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(7)}>7</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(8)}>8</Button>
                                <Button style={buttonClass} onClick={() => this.hanldeButtonClick(9)}>9</Button>
                                <Button style={{
                                    width: '179px',
                                    fontSize: '50px',
                                    borderRadius: '20px'
                                }} onClick={() => this.hanldeButtonClick('delete')}>
                                    <BackspaceIcon />
                                </Button>
                            </ButtonGroup>
                            {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
                                
                            </ButtonGroup> */}
                        </Grid>
                        <DialogContentText id="alert-dialog-description">
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ ...actionButtonClass, color: 'red' }} onClick={this.props.handleClosePopper} color="primary">
                            Dib unoqo
                        </Button>
                        <Button style={{ ...actionButtonClass, color: 'green' }} onClick={this.handleContinue} color="primary" autoFocus>
                            Xisaabi
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}