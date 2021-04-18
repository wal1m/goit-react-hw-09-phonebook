import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { createUseStyles } from 'react-jss';

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

const LoginView = () => {
  const [email, setEmail] = useState('zxs@zxs.zxs');
  const [password, setPassword] = useState('zxszxs123');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  const classes = useStyles();
  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className={classes.Form} autoComplete="off">
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

        <Button
          type="submit"
          size="small"
          className={classes.button}
          // variant="contained"
          style={{ marginTop: 6 }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
