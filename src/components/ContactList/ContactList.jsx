import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
// import { filterContacts } from '../../redux/contacts/contacts-actions';
import { createUseStyles } from 'react-jss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = createUseStyles({
  list: {
    marginBottom: '10px',
  },
});

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const classes = useStyles();

  const normalizeFilter = filter.toLowerCase();
  const filtrContactList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );

  const isLoading = useSelector(getLoading);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={classes.list}>
        {filtrContactList.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
