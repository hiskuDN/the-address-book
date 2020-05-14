import React, {Component} from 'react';
import './addressBook.css'
import {Button, Card, CardContent, Fab, List, ListItemIcon, Typography} from "@material-ui/core";
import AddressList from "./addressList/addressList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faPlus} from "@fortawesome/free-solid-svg-icons";
import AddressModal from "./addressModal/addressModal";
import {createAddress, getAllAddresses} from "../../services/addressServices";
import {AddressResponse} from "../../models/AddressResponse";
import {AddressRequest} from "../../models/AddressRequest";
import {exportJSON, exportXML} from "../../services/exportService";

interface IAddressListState {
  openModal: boolean,
  addresses: AddressResponse[],
  loading: boolean
}

interface IAddressListProps {

}

class AddressBook extends Component <IAddressListProps, IAddressListState> {
  state = {
    openModal: false,
    addresses: [],
    loading: true
  }

  constructor(props: any) {
    super(props);

    this.handleModal = this.handleModal.bind(this)
    this.handleXML = this.handleXML.bind(this)
    this.handleJSON = this.handleJSON.bind(this)
  }

  async componentWillMount() {
    await getAllAddresses().then((res: any) => {
      this.setState({
        addresses: res.data as AddressResponse[],
        loading: false
      })
    })
  }

  handleXML() {
    exportXML()
  }

  handleJSON() {
    exportJSON()
  }

  handleModal = (status: string) => {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  handleSave = async (data: AddressRequest) => {
    console.log('handle save')
    await createAddress(data)
      .then((res: any) => {
        console.log(res.data)
      }).catch((err: any) => {
        console.log(err)
      })
    window.location.reload()
  }

  render() {
    return !this.state.loading ?
      <div style={{width: '100%'}}>
        <Card
          className={'address-book-container'}
          variant={"outlined"}
        >
          {/*<CardHeader></CardHeader>*/}
          <CardContent style={{width: '100%'}}>
            <div className="card-header">
              <Typography
                variant={"h4"}
                align={"left"}
              >
                <FontAwesomeIcon icon={faAddressBook}/>
                &nbsp;
                The Address Book
              </Typography>
              <div className="btns">
                <Button
                  className={'export-json-btn'}
                  variant={'contained'}
                  onClick={this.handleXML}
                >
                  Export to XML
                </Button>
                <Button
                  className={'export-xml-btn'}
                  variant={'contained'}
                  onClick={this.handleJSON}
                >
                  Export to JSON
                </Button>
              </div>
            </div>
            <List className={'address-list'}>
              <AddressList data={this.state.addresses}/>
            </List>
            <Fab
              className={'fab'}
              variant={"round"}
              size={'large'}
              color={'primary'}
              onClick={() => this.handleModal('CREATE')}
            >
              <FontAwesomeIcon icon={faPlus}/>
            </Fab>
          </CardContent>
        </Card>
        <AddressModal data={null} addressStatus={'CREATE'} openModal={this.state.openModal} handleModal={this.handleModal}
                      handleSave={this.handleSave}/>
      </div>
      :
      <div>
        Working on it
      </div>
  }
}

export default AddressBook;