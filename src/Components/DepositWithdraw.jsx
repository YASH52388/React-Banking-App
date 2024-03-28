import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

function DepositWithdraw() {
  const { user, updateUser } = useUser();
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit'); // Default to deposit
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDepositWithdraw = (event) => {
    event.preventDefault();

    const selectedUser = user.find((u) => u.accountNumber === parseInt(accountNumber));

    if (!selectedUser) {
      setError("User not found!");
      setSuccess("");
      return;
    }

    const newBalance =
      transactionType === "deposit"
        ? selectedUser.balance + parseFloat(amount)
        : selectedUser.balance - parseFloat(amount);

    if (newBalance < 0 && transactionType === "withdraw") {
      setError("Insufficient balance!");
      setSuccess("");
      return;
    }

    updateUser(selectedUser.accountNumber, { balance: newBalance });
    setAccountNumber('');
    setAmount('');
    setSuccess("Transaction successful");
    setError("");
  };

  return (
    <Box p="4" m="auto" bg="gray.100" borderRadius="lg" maxW="600px">
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
      <h2>Deposit/Withdraw Money</h2>
      <form onSubmit={handleDepositWithdraw}>
        <FormControl>
          <FormLabel>Account Number</FormLabel>
          <Input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Transaction Type</FormLabel>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </Select>
        </FormControl>
        <Button mt="3" type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default DepositWithdraw;
