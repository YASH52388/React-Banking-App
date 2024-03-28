// App.js
import React, { useState, useRef } from 'react';
import { Divider } from '@chakra-ui/react';
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import { UserProvider } from './Context/UserContext';
import DisplayUser from './Components/DisplayUser';
import SearchAccount from './Components/SearchAccount';
import PerformTransaction from './Components/PerformTransaction';
import CreateAccount from './Components/CreateAccount';
import UpdateAccountInfo from './Components/UpdateAccountInfo';
import DepositWithdraw from './Components/DepositWithdraw';
import ShowBalance from './Components/ShowBalance';
import DrawerExample from './Components/DrawerMenu';
import { Home } from './Components/Home';
import Aboutus from './Components/Aboutus';
import DeleteAccount from './Components/DeleteAccount';
import "./App.css"; 

function App() {
  const [activeForm, setActiveForm] = useState("Home");
  const aboutUsRef = useRef(null);

  const toggleFormVisibility = (formId) => {
    setActiveForm(formId);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <UserProvider>
      <header>
        <Box p="4">
          <Flex align="center">
            <Text color="#FFD600" fontSize='4xl'>ᒪIOᑎ ᗷᗩᑎK</Text>
            <Spacer />
            <Text m="20px" color="Cyan" onClick={() => toggleFormVisibility("Home")}>Home</Text>
            {activeForm === "Home" && (
              <Text m="20px" color="Cyan" onClick={scrollToAboutUs}>About Us</Text>
            )}
            <DrawerExample setForm={toggleFormVisibility} />
          </Flex>
        </Box>
      </header>

      <Divider/>
      <DisplayUser/>
      {activeForm === "Home" && <Home />}
      {activeForm === "createAccount" && < CreateAccount />}
      {activeForm === "searchAccount" && <SearchAccount />}
      {activeForm === "PerformTransaction" && <PerformTransaction />}
      {activeForm === "UpdateAccountInfo" && <UpdateAccountInfo />}
      {activeForm === "DepositWithdraw" && <DepositWithdraw />}
      {activeForm === "ShowBalance" && <ShowBalance />}
      {activeForm==="DeleteAccount"&&<DeleteAccount/>}
      <footer>
      <div ref={aboutUsRef}>
        {activeForm === "Home" && <Aboutus />}
      </div>
      </footer>
    </UserProvider>
  );
}

export default App;
