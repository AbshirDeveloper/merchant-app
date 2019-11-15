import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 260,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelect(props) {
    const classes = useStyles();
    const [option, setOption] = React.useState([]);

    const handleChange = event => {
        setOption(event.target.value);
        props.sendSelectedValue(event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Dooro waxaad rabtid inaad aragtid</InputLabel>
                <Select
                    id="demo-mutiple-checkbox"
                    multiple
                    value={option}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {props.dropDownOptions && props.dropDownOptions.map(name => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={option.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}