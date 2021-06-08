import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Submit(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(value)
      console.log(JSON.parse(value))
      console.log(JSON.stringify(JSON.parse(value)), 'submitted')
      setValue("")
      props.sendData(value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
            onChange={handleChange}
            value={value}
            id="outlined-multiline-static"
            label="Copy/Paste Valid JSON"
            multiline
            rows={4}
            variant="outlined"
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
        >Submit</Button>
      </div>
    </form>
  );
}