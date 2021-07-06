import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header from './components/header/'
import Footer from './components/footer/'
import HotelProfile from './components/hotel-profile/'
import Messages, {Greetings} from './components/messages'
import Guests from './components/guests'
import { Modal } from 'antd'
import './custom-antd.css'
import CompanyList from './assets/Companies.json'
import GuestList from './assets/Guests.json'

const appCss = css`
  color: #333331;
  background: #fff;

  main {
    padding: 20px 16px;
  }

  @media only screen and (min-width: 768px) {
    main {
      padding: 32px 16px;
      text-align: center;
    }
  }
`

const headingCss = css`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`

const logoCss = css`
  background-color: #BEDFFF;
  color: #333331;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Sans', sans-serif;
  padding: 48px 0;
  font-size: 15px;

  img {
    margin-right: 12px;
    height: 50px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding: 72px 0 20px 0;
  }
`

const pMsgsTextCss = css`
  margin-bottom: 32px;
  font-size: 16px;
  font-family: 'Oxygen';
`

function App() {
  //const templateExampleValues = { greeting: "HELLO" , guestName: "GUEST", hotelName: "HOTEL", roomNumber: "NUMBER" }
  //console.log(Greetings()[0](templateExampleValues))
  const [templateID, setTemplateID] = useState("")
  const [hotelID, setHotelID] = useState(0)
  const [checkedItems, setCheckedItems] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);
  const allMessages = []
  let pMsgsText = "0 messages were sent."

  // Modal business
  const showModal = () => {
    setIsModalVisible(true)
    console.log(allMessages)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  
  let obj = checkedItems
  let keys = Object.keys(obj)
  let guestIDs = keys.filter(function(key) {
    return obj[key]
  })

  /* Turning the array into Ints
  var resultA = guestIDs.map(function (x) { 
    return parseInt(x, 10)
  })
  // Alternative method
  var resultB = guestIDs.map(Number)
  */

  const handleChange = newValue => {
    setTemplateID(newValue)
  }

  const handleHotel = newID => {
    setHotelID(newID)
  }
  
  const handleAllGuests = e => {
    setCheckedItems({
      ...checkedItems,
      [e.target.value]: e.target.checked
    })
  }

  const greetingString = entryTimestamp => {
    var date = new Date(entryTimestamp)
    if (date.getHours() >= 5 && date.getHours() < 12) {
        return "Good morning"
    }
    else if (date.getHours() >= 12 && date.getHours() < 17) {
        return "Good afternoon"
    }
    else {
        return "Good evening"
    }
  }

  const fillModal = () => {
    const allValues = []
    const selectedGuestList = []
    GuestList.forEach(guest => {
      guestIDs.forEach(selectedGuest => {
        if (guest.id == selectedGuest) {
          selectedGuestList.push({ name: guest.firstName, room: guest.reservation.roomNumber, time: guest.reservation.startTimestamp })
        }
      })
    })

    selectedGuestList.forEach(item => {
      allValues.push({ greeting: greetingString(item.time) , guestName: item.name, hotelName: CompanyList[hotelID-1].company, roomNumber: item.room })
    })

    allValues.forEach(item => {
      allMessages.push(Greetings()[templateID-1](item))
    })

    if (allMessages.length == 1) {
      pMsgsText = `1 message was sent as ${CompanyList[hotelID-1].company}.`
    }
    if (allMessages.length > 1) {
      pMsgsText = `${allMessages.length} messages were sent as ${CompanyList[hotelID-1].company}.`
    }
  }
  
  const isPrepared = () => {
    if (hotelID > 0 && templateID > 0 && guestIDs.length > 0) {
      fillModal()
      return true
    }
    return false
  }

  return (
    <div css={appCss}>
      <div css={logoCss}>
        <img src="./src/assets/realscrub.png" alt="scrub logo"/>
        <h1>Messaging Scrub</h1>
      </div>
      <Header />
      <main>
        <h2 css={headingCss}>First,</h2>
        <HotelProfile onChange={handleHotel} />
        <h2 css={headingCss}>Second,</h2>
        <Messages onChange={handleChange}/>
        <h2 css={headingCss}>Third,</h2>
        <Guests value={checkedItems} onChange={handleAllGuests} />
        <h2 css={headingCss}>Generating your message:</h2>
        {isPrepared()
          ? <button onClick={showModal}>Send Now</button>
          : <p>Send button appears here when you've completed the sections above.</p>
        }
        <Modal title="Results" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>{pMsgsText}</p>
          <div style={ {margin: '32px 0'} }>
            <p><b>Sample:</b></p>
            <p>{allMessages[0]}</p>
          </div>
          <p>The complete list of messages sent can be viewed from the browser's console.</p>
        </Modal>
      </main>
      <Footer />
    </div>
  );
}
export default App;