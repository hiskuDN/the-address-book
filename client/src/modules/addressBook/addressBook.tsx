import React, {Component} from 'react';
import './addressBook.css'
import {Card, CardActionArea, CardContent, Fab, List, Typography} from "@material-ui/core";
import AddressList from "./addressList/addressList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class AddressBook extends Component {
  constructor(props: any) {
    super(props);

    this.fabHandler = this.fabHandler.bind(this)
  }

  fabHandler() {
    console.log('fab handler clicked')
  }

  render() {
    return (
      <Card
        className={'address-book-container'}
        variant={"outlined"}
      >
        <CardContent style={{width: '100%'}}>
          <Typography
            variant={"h4"}
            align={"left"}
          >
            Address Book
          </Typography>
          <List className={'address-list'}>
            <AddressList/>
          </List>
          <Fab
            className={'fab'}
            variant={"round"}
            size={'large'}
            color={'primary'}
            onClick={this.fabHandler}
          >
            <FontAwesomeIcon icon={faPlus}/>
          </Fab>
        </CardContent>
      </Card>
    );
  }
}

export default AddressBook;