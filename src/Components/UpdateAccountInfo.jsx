import React, { useState } from 'react';
import { useUser } from '../Context/UserContext';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

function UpdateAccountInfo() {
  const { user, updateUser } = useUser();
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [editField, setEditField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');

  const handleFindUser = () => {
    const userToEdit = user.find(user => user.accountNumber.toString() === accountNumber);
    if (!userToEdit) {
      setAccountNumberError("Invalid account number");
      setSelectedUser(null);
    } else {
      setAccountNumberError('');
      setSelectedUser(userToEdit);
    }
  };
  
  const handleUpdate = () => {
    const fieldToUpdate = editField.toLowerCase();

    if (!newValue) {
      setError("Please enter a new value");
      setSuccess('');
      return;
    }

    updateUser(selectedUser.accountNumber, { [fieldToUpdate]: newValue });
    setSuccess("Information updated successfully");
    setError('');
    setAccountNumber('');
    setSelectedUser(null);
    setEditField('');
    setNewValue('');
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
      {accountNumberError && (
        <Alert status="error" my="4">
          <AlertIcon />
          {accountNumberError}
        </Alert>
      )}
      {!selectedUser && (
        <>
          <FormControl>
            <FormLabel>Enter Account Number</FormLabel>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </FormControl>
          <Button mt="2" colorScheme="blue" onClick={handleFindUser}>Find User</Button>
        </>
      )}

      {selectedUser && (
        <>
          <Box mt="4">
            <p>Edit information for: {selectedUser.fullname}</p>
            <FormControl>
              <FormLabel>Select field to edit</FormLabel>
              <Select value={editField} onChange={(e) => setEditField(e.target.value)}>
                <option value="">Select field to update</option>
                <option value="fullname">Name</option>
                <option value="address">Address</option>
                <option value="phoneNumber">Phone Number</option>
              </Select>
            </FormControl>
            <FormControl mt="2">
              <FormLabel>Enter new value</FormLabel>
              <Input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
            </FormControl>
            <Button mt="2" colorScheme="blue" onClick={handleUpdate}>Update</Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default UpdateAccountInfo;
