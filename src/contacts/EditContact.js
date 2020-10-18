import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getContact,
  updateContact,
} from "../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let history = useHistory();
  let { id } = useParams();
  //   alert(id);
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    // important point using Object.assign
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    // console.log(update_contact);

    dispatch(updateContact(update_contact));

    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
