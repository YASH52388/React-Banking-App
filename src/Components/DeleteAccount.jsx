import React, { useState } from "react";
import { useUser } from "../Context/UserContext";
import { Box, Button, FormControl, FormLabel, Input, Stack, Alert, AlertIcon } from "@chakra-ui/react";

function DeleteAccount() {
    const [accountNumber, setAccountNumber] = useState('');
    const { user, deleteUser } = useUser();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleDelete = (event) => {
        event.preventDefault();

        const accountExists = user.some(user => user.accountNumber.toString() === accountNumber);

        if (!accountNumber || !accountExists) {
            setError('Account number does not exist');
            setSuccess('');
            return;
        }

        deleteUser(Number(accountNumber), { deleted: true }); // You can mark it as deleted or remove it from the array based on your logic
        setSuccess('Account deleted successfully');
        setError('');

        setAccountNumber('');
    };

    return (
        <Box p="20px" m="auto" bg="gray.100" borderRadius="lg" maxW="600px">
            <form onSubmit={handleDelete}>
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
                        <FormLabel>Account Number</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter Account Number"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="red">
                        Delete Account
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default DeleteAccount;
