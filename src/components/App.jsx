import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Navigation } from './Navigation/Navigation';
import { Register } from './Register/Register';
import { Login } from './Login/Login';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector(getContacts);
  const loading = contactsState.isLoading;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
        </Route>
    </Routes>
        {/* <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {loading ? <p>Loading...</p> : <ContactList />}
     */}
    </div>
  );
};
