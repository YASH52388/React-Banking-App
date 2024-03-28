import React, { useState, useContext, createContext } from "react";

export const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]); // Renamed for clarity

    const addUser = (data) => {
        setUser((prevUsers) => [...prevUsers, data]);
    };


    const updateUser = (accountNumber, newValue) => {
        setUser((prevUsers) =>
            prevUsers.map(user =>
                user.accountNumber === accountNumber ? { ...user, ...newValue } : user
            )
        );
    };

    const deleteUser = (accountNumber) => {
        setUser((prevUsers) =>
            prevUsers.filter(user => user.accountNumber !== accountNumber)
        );
    };

    return (
        <UserContext.Provider value={{ user,setUser, addUser, updateUser,deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};
