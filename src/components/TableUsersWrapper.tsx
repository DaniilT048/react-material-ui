import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, CircularProgress } from '@mui/material';
import UserTable from './UserTable.tsx';
import TableUsersPagination from './TableUsersPagination';

type User = {
    id: number;
    name: string;
    username: string;
};

export default function TableUsersWrapper() {
    const [userData, setUserData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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
            <UserTable
                userData={userData}
                page={page}
                rowsPerPage={rowsPerPage}
            />
            <TableUsersPagination
                page={page}
                rowsPerPage={rowsPerPage}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                count={userData.length}
            />
        </Paper>
    );
}
