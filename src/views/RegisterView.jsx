import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { register } from '../redux/auth/auth-operations';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = createUseStyles({
  Form: {
    // width: 320,
  },

  Label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
});
const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  const classes = useStyles();
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={classes.Form} autoComplete="off">
        <label className={classes.Label}>
          <TextField
            id="text"
            type="text"
            style={{ width: 300 }}
            // name='number'
            value={name}
            label="name"
            onChange={handleNameChange}
          />
        </label>

        <label className={classes.Label}>
          <TextField
            id="email"
            type="email"
            style={{ width: 300 }}
            // name='number'
            value={email}
            label="email"
            onChange={handleEmailChange}
          />
        </label>

        <label className={classes.Label}>
          <TextField
            id="password"
            type="password"
            style={{ width: 300 }}
            // name='number'
            value={password}
            label="password"
            onChange={handlePasswordChange}
          />
        </label>

        {/* <button type="submit">Зарегистрироваться</button> */}

        <Button
          type="submit"
          size="small"
          className={classes.button}
          // variant="contained"
          style={{ marginTop: 6 }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
