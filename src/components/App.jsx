import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress</b>}
      <ContactList />
    </>
  );
};
