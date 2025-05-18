import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer,
    TableRow, Paper, CircularProgress
} from '@mui/material';
import TableHeadUsers from "./TableHeadUsers.tsx";


type User = {
    id: number;
    name: string;
    username: string;
};

export default function EnhancedTableWithData() {
    const [userData, setUserData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUserData(res.data);
            } catch (err) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);



    if (loading) return <CircularProgress />;
    if (error) return <div>{error}</div>;

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHeadUsers/>
                    <TableBody>
                        {userData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}
