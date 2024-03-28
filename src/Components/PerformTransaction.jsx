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

function PerformTransaction() {
  const [senderAccountNumber, setSenderAccountNumber] = useState('');
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const { user, setUser } = useUser();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTransfer = () => {
    if (!senderAccountNumber || !receiverAccountNumber || !amount) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    const senderIndex = user.findIndex((u) => u.accountNumber === parseInt(senderAccountNumber));
    const receiverIndex = user.findIndex((u) => u.accountNumber === parseInt(receiverAccountNumber));

    const transferAmount = parseFloat(amount);

    if (senderIndex === -1 || receiverIndex === -1) {
      setError("Invalid account numbers");
      setSuccess("");
      return;
    }

    const sender = user[senderIndex];
    const receiver = user[receiverIndex];

    if (sender.balance < transferAmount) {
      setError("Insufficient balance");
      setSuccess("");
      return;
    }

    const updatedSender = { ...sender, balance: sender.balance - transferAmount };
    const updatedReceiver = { ...receiver, balance: receiver.balance + transferAmount };

    const updatedUser = [...user];
    updatedUser[senderIndex] = updatedSender;
    updatedUser[receiverIndex] = updatedReceiver;

    setUser(updatedUser);
    setSuccess("Transaction successful");
    setError("");
    // Reset form fields after successful transaction
    setSenderAccountNumber('');
    setReceiverAccountNumber('');
    setAmount('');
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
      <FormControl>
        <FormLabel htmlFor="senderAccountNumber">Sender Account Number</FormLabel>
        <Input type="number" id="senderAccountNumber" value={senderAccountNumber} onChange={(e) => setSenderAccountNumber(e.target.value)} />
      </FormControl>
      <FormControl mt="3">
        <FormLabel htmlFor="receiverAccountNumber">Receiver Account Number</FormLabel>
        <Input type="number" id="receiverAccountNumber" value={receiverAccountNumber} onChange={(e) => setReceiverAccountNumber(e.target.value)} />
      </FormControl>
      <FormControl mt="3">
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <Button mt="3" colorScheme="blue" onClick={handleTransfer}>Transfer</Button>
    </Box>
  );
}

export default PerformTransaction;
