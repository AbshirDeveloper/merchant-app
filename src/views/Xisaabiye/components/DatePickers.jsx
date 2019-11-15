import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Divider from '@material-ui/core/Divider';
import DropDown from './DropDown'

export default class MaterialUIPickers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateFrom: new Date('2014-08-18T21:11:54'),
            dateTo: new Date('2014-08-18T21:11:54'),
            timeFrom: new Date('2014-08-18T21:11:54'),
            timeTo: new Date('2014-08-18T21:11:54'),
        }
    }

    handleDateChange = value => date => {
        this.setState({
            [value]: date
        })
    };

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* <Grid container justify="space-around"> */}
                {/* <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Laga bilaabo"
                        format="MM/dd/yyyy"
                        name="dateFrom"
                        value={this.state.dateFrom}
                        onChange={this.handleDateChange('dateFrom')}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Lagu geeyo"
                        format="MM/dd/yyyy"
                        name="dateTo"
                        value={this.state.dateTo}
                        onChange={this.handleDateChange('dateTo')}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Divider orientation="vertical" />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Saacad laga bilaabo"
                        name="timeFrom"
                        value={this.state.timeFrom}
                        onChange={this.handleDateChange('timeFrom')}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Saacad lagu geeyo"
                        name="timeTo"
                        value={this.state.timeTo}
                        onChange={this.handleDateChange('timeTo')}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    /> */}
                <DropDown dropDownOptions={this.props.dropDownOptions} style={{ width: '10%' }} sendSelectedValue={this.props.sendSelectedValue} />
                {/* </Grid> */}
            </MuiPickersUtilsProvider>
        );
    }
}