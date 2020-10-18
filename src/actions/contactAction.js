export const addContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: contact,
  };
};

// get a contact

export const getContact = (id) => ({
  type: "GET_CONTACT",
  payload: id,
});

// update contact

export const updateContact = (contact) => ({
  type: "UPDATE_CONTACT",
  payload: contact,
});

// delete a contact
export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: id,
});

// selectall contacts

export const selectAllContact = (id) => ({
  type: "SELECT_CONTACT",
  payload: id,
});

//clear selected contacts

export const clearAllContact = () => ({
  type: "CLEAR_CONTACT",
});

// delete selected contact
export const deleteAllContact = () => ({
  type: "DELETE_SECLECTED_CONTACT",
});
