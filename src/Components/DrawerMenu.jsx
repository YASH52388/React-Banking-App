import React, { useRef } from 'react';
import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";

function DrawerExample({ setForm }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const handleNavigation = (formId) => {
    setForm(formId);
    onClose(); // Close the drawer after navigation
  };

  return (
    <>
      <Button ref={btnRef} colorScheme='blue'  onClick={onOpen}>
        Open Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='blue.500' color='white'>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button onClick={() => handleNavigation("createAccount")} variant='ghost'>
              Create Account
            </Button>
            <Button onClick={() => handleNavigation("searchAccount")} variant='ghost'>
              Search Account
            </Button>
            <Button onClick={() => handleNavigation("PerformTransaction")} variant='ghost'>
              Perform Transaction
            </Button>
            <Button onClick={() => handleNavigation("UpdateAccountInfo")} variant='ghost'>
              Update Account Info
            </Button>
            <Button onClick={() => handleNavigation("DepositWithdraw")} variant='ghost'>
              Deposit Withdraw
            </Button>
            <Button onClick={() => handleNavigation("ShowBalance")} variant='ghost'>
              View Balance
            </Button>
          </DrawerBody>
          <DrawerFooter>
          <Button m="30px" colorScheme='red' onClick={() => handleNavigation("DeleteAccount")} variant='outline'>
              Delete Account
            </Button>
            <Button variant='outline' colorScheme='red' onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
