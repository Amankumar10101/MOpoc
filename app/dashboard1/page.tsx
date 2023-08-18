'use client'

import "./page.scss";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoButton from "../src/components/shared/MoButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import MoTitleDetails from "../src/components/shared/MoTitle&Details/MoTitle&Details";

function createData(
    notification: string,
    time: string,
) {
    return { notification, time};
}

const rows = [
    createData('Jenny Miles modified Healthily UX Research Project', '5min ago'),
    createData('HCL Technologies added Providers in Healthify UX Research.', '5min ago'),
    createData('ABC Technologies Submit Rework.', '5min ago'),
    createData('Fund Transfer of Fitness app UX/UI Milestone 2 to HCL Tech.', '5min ago'),
    createData('Fund Transfer of Fitness app UX/UI Milestone 2 to HCL Tech.', '5min ago'),
];

export default function AccessibleTable() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <TableContainer className="notification" component={Paper}>
            <Table className="notification-table" >
                <TableBody className="notification-table-body">
                    {rows.map((row) => (
                        <TableRow className="notification-row" >
                            {/* <TableCell className="notification-tables"> */}
                                <div className="notification-avatar"><Avatar >H</Avatar></div>
                                <MoTitleDetails className="notification-data" title={row.notification} description={row.time} />
                                {/* <p>{row.notification}</p><p>{row.time}</p> */}
                                <ArrowForwardIosIcon className="arrow" />
                                {/* </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
                    <MoButton className="create-escrow-button" onClick={handleClose} variant='outlined' name='Activity History >'></MoButton>

            </Table>
        </TableContainer>
    );
}

