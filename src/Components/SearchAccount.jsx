import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  AbsoluteCenter,
  Divider,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

function SearchAccount() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState(undefined);
  const { user } = useUser();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchInput) {
      setError('Please enter an account number');
      setSuccess('');
      return;
    }

    const result = user.find((user) => user.accountNumber === parseInt(searchInput));

    if (result) {
      setSuccess('Search successful');
      setError('');
    } else {
      setError('Account number not found');
      setSuccess('');
    }

    setSearchResults(result);
  };

  return (
    <Box p="4" m="auto" bg="gray.100" borderRadius="lg" maxW="600px">
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
        <FormControl>
          <FormLabel>Enter Account Number</FormLabel>
          <Input
            type="number"
            value={searchInput}
            placeholder="Enter Account Number"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </FormControl>
        <Button mt="2" type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>

      {searchResults && (
        <Box mt="4">
          <Box position="relative" padding="10px">
            <Divider />
            <AbsoluteCenter bg="white" px="4">
              User Information
            </AbsoluteCenter>
          </Box>
          <p>Name: {searchResults.fullname}</p>
          <p>Balance: {searchResults.balance}</p>
          <p>Gender: {searchResults.gender}</p>
          <p>Address: {searchResults.address}</p>
          <p>Phone Number: {searchResults.phonenumber}</p>
          <p>Account Number: {searchResults.accountNumber}</p>
        </Box>
      )}
    </Box>
  );
}

export default SearchAccount;
