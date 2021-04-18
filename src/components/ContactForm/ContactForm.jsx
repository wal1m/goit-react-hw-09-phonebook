import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  fetchContact,
} from '../../redux/contacts/contacts-operations';
import { createUseStyles } from 'react-jss';
import { getContacts } from '../../redux/contacts/contacts-selectors';
const useStyles = createUseStyles({
  form: {
    padding: '5px',
    border: ['1px', 'solid', '#2f2f2f'],
    borderRadius: '4px',
  },
  button: {
    marginTop: '10px',
  },
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, []);

  const contacts = useSelector(getContacts);

  const handleNameChange = e => setName(e.target.value);
  const handleNumberChange = e => setNumber(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name);
    if (name === '') return;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label>
          <TextField
            id="name"
            type="text"
            style={{ width: 300 }}
            name="name"
            onChange={handleNameChange}
            value={name}
            label="Name"
          />
        </label>
        <label>
          <TextField
            id="tel"
            type="tel"
            style={{ width: 300 }}
            // name='number'
            onChange={handleNumberChange}
            value={number}
            label="Number"
          />
        </label>
      </div>
      <Button
        type="submit"
        size="small"
        className={classes.button}
        // variant="contained"
        style={{ marginTop: 6 }}
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
