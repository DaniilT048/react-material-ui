import {TableCell, TableRow} from "@mui/material";
import { type ReactElement} from "react";

function TableHeadUsers (): ReactElement {
    return (
        <>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
            </TableRow>
        </>

    );
}

export default TableHeadUsers;