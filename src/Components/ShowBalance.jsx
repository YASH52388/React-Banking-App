import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

function ShowBalance() {
  const { user } = useUser();
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  const handleShowBalance = (event) => {
    event.preventDefault();

    const selectedUser = user.find((u) => u.accountNumber === parseInt(accountNumber));

    if (!selectedUser) {
      setError("User not found!");
      setBalance('');
      return;
    }

    setBalance(selectedUser.balance);
    setError('');
    setAccountNumber('');
  };

  return (
    <Box p="4" m="auto" bg="gray.100" borderRadius="lg" maxW="600px">
      <h2>Show Balance</h2>
      <form onSubmit={handleShowBalance}>
        <FormControl>
          <FormLabel>Account Number</FormLabel>
          <Input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        </FormControl>
        <Button mt="3" type="submit" colorScheme="blue">Show Balance</Button>
      </form>
      {error && (
        <Alert status="error" mt="3">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {balance !== '' && (
        <p mt="3">Balance for Account Number {accountNumber}: {balance}</p>
      )}
    </Box>
  );
}

export default ShowBalance;
