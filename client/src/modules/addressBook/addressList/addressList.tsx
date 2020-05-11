import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

function listHandler() {
  console.log('list clicked')
}

function AddressList() {
  return (
    <ListItem button onClick={listHandler}>
      <ListItemIcon>
        {/*<InboxIcon />*/}
        <FontAwesomeIcon icon={faAddressBook}/>
      </ListItemIcon>
      <ListItemText primary="Inbox"/>
    </ListItem>
  );
}

export default AddressList;