export const getContacts = state => state.contacts.items;
export const getFilteredContacts = state => state.contacts.filter;
export const getFilter = () => {
  return getContacts.filter(contact =>
    contact.name.toLowerCase().includes(getFilteredContacts)
  );
};
