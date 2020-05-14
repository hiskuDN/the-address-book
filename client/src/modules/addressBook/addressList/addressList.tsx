import React, {Component, ReactComponentElement} from 'react';
import {Avatar, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AddressModal from "../addressModal/addressModal";
import {AddressResponse} from "../../../models/AddressResponse";
import {AddressRequest} from "../../../models/AddressRequest";
import {createAddress, getAllAddresses} from "../../../services/addressServices";

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
    await createAddress(data).then((res: any) => {
      console.log(res.data)
    })
  }

  getList = () => {
    let itemList: ReactComponentElement<any>[] = []
    this.props.data.map((address: AddressResponse, key: number) => {
      itemList.push(
        <ListItem
          button
          onClick={() => {
            this.setState({
              openModal: this.state.openModal,
              data: address
            })
            this.handleModal('VIEW')
          }}
          key={key}>
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