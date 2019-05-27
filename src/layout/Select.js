import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";

const SelectComponent = ({classes, name, label, value, onChange}) => {
  return (
    <FormControl className={classes.formControl}>
      {value ? null :
        <InputLabel
          htmlFor={name}
          FormLabelClasses={{
            root: classes.label
          }}
        >
          {label}
        </InputLabel>
      }
      <Select
        className={classes.select}
        inputProps={{
          name: name,
          id: name,
          className: classes.input
        }}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>English</MenuItem>
        <MenuItem value={20}>German</MenuItem>
        <MenuItem value={30}>French</MenuItem>
      </Select>
    </FormControl>
  );
};

const styles = {
  formControl: {
    border: '1px solid #c1d4e0',
    borderRadius: 18,
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    display: 'inline-flex',
    marginRight: 60,
    height: 35,
    width: 170
  },
  label: {
    maxWidth: '90%',
    overflow: 'hidden',
    paddingLeft: 10,
    fontSize: 15,
    textOverflow: 'ellipsis',
    transform: 'translate(0, 8px) scale(1) !important',
    whiteSpace: 'nowrap'
  },
  select: {
    backgroundColor: 'transparent',
    marginTop: '0 !important',
    '&:before, &:after': {
      content: 'none'
    }
  },
  input: {
    paddingLeft: 10,
    fontSize: 15,
    '&:focus': {
      backgroundColor: 'transparent',
    }
  }
};

export default withStyles(styles)(SelectComponent);
