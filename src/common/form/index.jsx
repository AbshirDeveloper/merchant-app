import React from 'react';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        width: '45%'
    },
    dense: {
    },
    menu: {
        width: 200,
    },
});

class TextFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: {},
            errors: {},
            formElements: {}
        }
    }

    onChange = (event) => {
        this.setState({
            input: {
                ...this.state.input,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        this.setState({
            formElements: this.props.formElements
        })
    }

    onFormFilled = () => {
        const formEl = Object.keys(this.props.formElements)
        formEl.forEach(el => {
            this.props.formElements[el].forEach(element => {
                if (element.required === true && !this.state.input[element.name]) {
                    const label = element.label;
                    this.setState({
                        errors: {
                            ...this.state.errors,
                            [label]: true
                        }
                    })
                }
            })
        })
        this.props.onDaynSubmit(this.state.input)
    }

    textFields = (array) => {
        const { classes } = this.props
        return array.map(el => {
            return (
                <TextField
                    required={el.required}
                    error={this.state.errors[el.label]}
                    id="standard-dense"
                    key={el.id}
                    label={el.label}
                    name={el.name}
                    onChange={this.onChange}
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                />
            )
        })
    }

    dropDowns = (array) => {
        const { classes } = this.props
        return array.map(el => {
            const value = el.default || el.innerList[0].value
            return (
                <TextField
                    required={el.required}
                    id="standard-select-currency-native"
                    select
                    key={el.id}
                    label={el.label}
                    className={clsx(classes.textField, classes.dense)}
                    value={value}
                    name={el.name}
                    onChange={this.onChange}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="dense"
                >
                    {el.innerList.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            )
        })
    }

    dateFields = (array) => {
        const { classes } = this.props
        return array.map(el => {
            return (
                <TextField
                    required={el.required}
                    id="date"
                    label={el.label}
                    key={el.id}
                    type="date"
                    name={el.name}
                    onChange={this.onChange}
                    className={clsx(classes.textField, classes.dense)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            )
        })
    }

    buttons = (array) => {
        return array.map(el => {
            return (
                <Button
                    disabled={el.disabled}
                    key={el.id}
                    // type={el.type}
                    style={{
                        // height: '46px',
                        color: 'red',
                        // marginTop: '76px'
                    }}
                    variant="outlined"
                    color="secondary"
                    onClick={this.onFormFilled}
                >
                    {el.label}
                </Button>
            )
        })
    }

    renderForm = (obj) => {
        const { classes } = this.props
        const keys = Object.keys(obj);
        return (
            <form className={classes.container} noValidate autoComplete="off">
                {
                    keys.map(el => {
                        return (
                            this[el](obj[el])
                        )
                    })
                }
            </form>
        )
    }

    render() {
        return (
            this.renderForm(this.state.formElements)
        );
    }
}


export default withStyles(useStyles)(TextFields)