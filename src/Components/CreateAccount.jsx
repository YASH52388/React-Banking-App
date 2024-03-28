import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Alert, 
  AlertIcon
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import { AbsoluteCenter } from "@chakra-ui/react";


function CreateAccount() {
    const [userData, setUserData] = useState([]);
    const [fullname, setName] = useState('');
    const [balance, setBalance] = useState(0);
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const { addUser } = useUser();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!fullname || !balance || !address || !phonenumber) {
        setError('Please fill in all fields');
        setSuccess('');
        return;
      }
  
      function generateAccountId() {
        return Math.floor(Math.random() * 1000000000);
      }
  
      const data = {
        balance: parseFloat(balance),
        fullname,
        gender,
        address,
        phonenumber,
        accountNumber: generateAccountId()
      };
  
      addUser(data);
      setUserData((prevData) => [...prevData, data]);
      setSuccess('Account created successfully');
      setError('');
  
      // Reset form fields after submission
      setName('');
      setBalance(0);
      setGender('');
      setAddress('');
      setPhoneNumber('');
    };
  
    return (
      <Box p="20px" m="auto" bg="gray.100" borderRadius="lg" maxW="600px">

{userData.length > 0 && (
          <Box mt={4}>
            <Box position='relative' padding='10px'>
              <Divider />
              <AbsoluteCenter bg='white' px='4'>
                User Information
              </AbsoluteCenter>
            </Box>
            <p>Name: {userData[userData.length - 1].fullname}</p>
            <p>Balance: {userData[userData.length - 1].balance}</p>
            <p>Address: {userData[userData.length - 1].address}</p>
            <p>Phone Number: {userData[userData.length - 1].phonenumber}</p>
            <p>Account Number: {userData[userData.length - 1].accountNumber}</p>
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          {error && (
            <Alert status="error" my="4">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success" my="4">
              <AlertIcon />
              {success}
            </Alert>
          )}
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Name"
                value={fullname}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Balance</FormLabel>
              <Input
                type="number"
                placeholder="Enter Balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </Stack>
        </form>
  
      
      </Box>
    );
  }
  
  export default CreateAccount;
  