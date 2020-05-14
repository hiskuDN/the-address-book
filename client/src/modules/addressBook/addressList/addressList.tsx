import React, {Component, ReactComponentElement} from 'react';
import {Avatar, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AddressModal from "../addressModal/addressModal";
import {AddressResponse} from "../../../models/AddressResponse";
import {AddressRequest} from "../../../models/AddressRequest";
import {createAddress, editAddress, getAllAddresses} from "../../../services/addressServices";

interface IAddressListState {
  openModal: boolean,
  data: AddressResponse | null
}

interface IAddressListProps {
  data: AddressResponse[]
}

class AddressList extends Component<IAddressListProps, IAddressListState> {
  state = {
    openModal: false,
    data: null
  }

  constructor(props: any) {
    super(props);
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal = (status: string) => {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  handleSave = async (data: AddressRequest) => {
    console.log('handle save')
    console.log(data)
    await editAddress(data)
      .then((res: any) => {
        console.log(res.data)
      }).catch((err: any) => {
        console.log(err)
      })
    window.location.reload()
  }

  handleList = (event:any) => {
    let innerHTML = event.target.innerHTML

    this.props.data.map((address: AddressResponse, key: number) => {
      if(innerHTML.includes(address.firstName)) {
        this.setState({
          openModal: this.state.openModal,
          data: address
        })
        console.log(address.firstName)
      }
    })
    this.handleModal('VIEW')

  }

  getList = () => {
    let itemList: ReactComponentElement<any>[] = []
    this.props.data.map((address: AddressResponse, key: number) => {
      itemList.push(
        <ListItem
          button
          key={key}
          id={address.id + ''}
          onClick={(event:any) => {
            this.handleList(event)
          }}
        >

          <ListItemIcon>
            <Avatar>
              {address.firstName[0] + address.lastName[0]}
            </Avatar>
          </ListItemIcon>
          <ListItemText>
            {address.firstName}&nbsp;{address.lastName}
          </ListItemText>
        </ListItem>
      )
    })
    return itemList
  }

  render() {
    return (
      <div>
        {this.getList()}
        <AddressModal data={this.state.data} addressStatus={'VIEW'} openModal={this.state.openModal} handleModal={this.handleModal}
                      handleSave={this.handleSave}/>
      </div>
    );
  }
}

export default AddressList;