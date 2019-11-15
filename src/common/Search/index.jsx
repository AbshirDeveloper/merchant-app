import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            label: 'Kuqur magaca badeecada',
            input: '',
            disabled: true
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const itemName = this.props.badeeco.rowData.filter(el => el.badeeco === this.state.input);
        if (itemName.length) {
            this.props.objectSearched(
                {
                    id: itemName[0].id,
                    barcode: itemName[0].barcode,
                    badeeco: itemName[0].badeeco,
                    intaxabo: 1,
                    qiimo_halkii_xabo: 15,
                    iskudar: 15
                })
            this.setState({
                input: ''
            })
        } else {
            this.setState({
                label: 'Badeecadaan ma haysid',
                error: true
            })
        }
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value,
            disabled: !event.target.value.length,
            label: 'Kuqur magaca badeecada',
            error: false
        })
    }
    render() {
        return (
            <div style={{
                marginRight: '-4px',
                width: '100%',
                marginTop: '4px'
            }}>
                <form onSubmit={this.onFormSubmit} className={this.props.classes.form}>
                    <TextField
                        error={this.state.error}
                        id="outlined-number"
                        label={this.state.label}
                        value={this.state.input}
                        onChange={this.onChange}
                        type="text"
                        className={this.props.classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        style={{
                            width: '80%'
                        }}
                    />
                    <Button
                        disabled={this.state.disabled}
                        style={{
                            marginTop: '15px',
                            height: '56px',
                            marginLeft: '1%',
                        }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={this.props.classes.button}>
                        Raadi
                    </Button>
                </form>
            </div>
        );
    }
}

export default Search;