import React, {ReactComponentElement} from 'react';
import './addressModal.css'
import {
  Avatar,
  Button,
  Card,
  ListItem,
  ListItemIcon, ListItemText,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import {AddressResponse} from "../../../models/AddressResponse";
import {AddressRequest} from "../../../models/AddressRequest";
import {getCities} from "../../../services/citiesService";

interface IAddressModalProps {
  addressStatus: 'EDIT' | 'CREATE' | 'VIEW',
  handleModal: (status: string) => void,
  handleSave: (data: AddressRequest) => void,
  openModal: boolean,
  data: AddressResponse | null
}

interface CityType {
  id: string,
  city: string
}

function AddressModal(props: IAddressModalProps) {
  const [status, setStatus] = React.useState(props.addressStatus)
  const [enabled, setEnabled] = React.useState(status == 'EDIT' || status == 'CREATE')
  const [cityList, setCityList] = React.useState<CityType[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  //Input items
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [street, setStreet] = React.useState();
  const [zip, setZip] = React.useState();
  const [city, setCity] = React.useState<string>('none');

  React.useEffect(() => {
    cityListHandler().then(() => {
      if (props.data != null) {
        setFirstName(props.data.firstName)
        setLastName(props.data.lastName)
        setEmail(props.data.email)
        setStreet(props.data.street)
        setZip(props.data.zipCode)
        cityList.map((data: CityType ) => {
          //@ts-ignore
          if(data.id == props.data.city) {
            setCity(data.id)
          }
        })
      }
      setLoading(false)
    })
  })

  const cityListHandler = async () => {
    let tempList: CityType[] = []
    await getCities()
      .then((response: any) => {
        response.data.map((data: any) => {
          tempList.push({id: data.id, city: data.city})
        })
      })
      .catch((err:any) => {
        console.log(err)
      })
    setCityList(tempList)
  }

  const getCityList = () => {
    let itemList: ReactComponentElement<any>[] = []
    cityList.map((data: CityType, key: number) => {
      itemList.push(
        <MenuItem
          value={data.id}
          key={key}
        >
          {data.city}
        </MenuItem>
      )
    })

    return itemList
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string)
  }

  const handleEdit = () => {
    setStatus('EDIT')
    setEnabled(true)
  }

  return !loading ?
    <Modal
      open={props.openModal}
      onClose={props.handleModal}
    >
      <Card
        className={'modal-card'}
        elevation={3}
      >
        <Typography
          variant={'h4'}
          align={'center'}
        >
          {status}
        </Typography>
        <div className="form-data">
          <TextField
            className={'text-field'}
            variant={'outlined'}
            placeholder={'First Name'}
            disabled={!enabled}
            value={firstName}
            onChange={(event: any) => {
              setFirstName(event.target.value)
            }}
          >
            First Name
          </TextField>
          <TextField
            className={'text-field'}
            variant={'outlined'}
            placeholder={'Last Name'}
            disabled={!enabled}
            value={lastName}
            onChange={(event: any) => {
              setLastName(event.target.value)
            }}
          >
            Last Name
          </TextField>
          <TextField
            variant={'outlined'}
            className={'text-field'}
            type={'email'}
            placeholder={'Email'}
            disabled={!enabled}
            value={email}
            onChange={(event: any) => {
              setEmail(event.target.value)
            }}
          >
            Email
          </TextField>
          <TextField
            variant={'outlined'}
            className={'text-field'}
            placeholder={'Street'}
            disabled={!enabled}
            value={street}
            onChange={(event: any) => {
              setStreet(event.target.value)
            }}
          >
            Street
          </TextField>
          <TextField
            variant={'outlined'}
            className={'text-field'}
            placeholder={'Zip-Code'}
            disabled={!enabled}
            value={zip}
            onChange={(event: any) => {
              setZip(event.target.value)
            }}
          >
            Zip-Code
          </TextField>
          <Select
            value={city}
            defaultValue={'none'}
            className={'select-field'}
            onChange={handleChange}
            fullWidth
            disabled={!enabled}
          >
            <MenuItem value="none">
              <em>Select a City</em>
            </MenuItem>
            {getCityList()}
          </Select>
          {
            status == 'EDIT' || props.addressStatus == 'CREATE' ?
              <Button
                className={'save-btn'}
                variant={'contained'}
                color={'primary'}
                size={'large'}
                value={city}
                fullWidth
                onClick={() => {
                  props.handleSave({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    street: street,
                    zipCode: zip,
                    city: city
                  })
                }
                }
              >
                SAVE
              </Button>
              :
              <Button
                className={'save-btn'}
                variant={'contained'}
                size={'large'}
                fullWidth
                onClick={handleEdit}
              >
                EDIT
              </Button>
          }
        </div>
      </Card>
    </Modal>
  :
    null
}

export default AddressModal;