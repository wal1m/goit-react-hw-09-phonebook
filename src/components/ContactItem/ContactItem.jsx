import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    marginBottom: '6px',
    minWidth: 275,
  },
  button: {
    // margin: theme.spacing(1),
    // color: '#3F51B5',
  },
  contentItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(deleteContact(id));
  };
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.contentItem}
            variant="subtitle2"
            color="textPrimari"
            component="p"
          >
            {name}: {number}
            <Button
              type="button"
              onClick={handelDelete}
              variant="contained"
              color="default"
              size="small"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
