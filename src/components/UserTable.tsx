import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import TableHeadUsers from "./TableHeadUsers.tsx";

type User = {
    id: number;
    name: string;
    username: string;
};

type Props = {
    userData: User[];
    page: number;
    rowsPerPage: number;
};

export default function UserTable({ userData, page, rowsPerPage }: Props) {
    return (
        <TableContainer>
            <Table>
                <TableHeadUsers />
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
    );
}
