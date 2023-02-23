// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Form } from '../Form/Form';
import { PhoneBook, Container, PhoneContacts } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhoneBook>Телефонна книга</PhoneBook>
      <Form />
      <PhoneContacts>Контакти</PhoneContacts>
      <Filter></Filter>
      {<ContactList />}
    </Container>
  );
}

// {
//   isLoading && !error && (
//     <LoaderWrapper>
//       <Loader />
//     </LoaderWrapper>
//   );
// }
// App.propTypes = {
//   onSubmitName: PropTypes.object,
// };
