import styles from './Table0.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import {IconButton} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material';

export const Table0 = (props: any) => {
    return (
        <TableContainer 
            component={Paper} 
            style={{ maxHeight: props.maxHeight + 'px', overflowY: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {props.headers.map((header: any, index: any) => (
                        <TableCell key={index}>{header}</TableCell>
                        ))}
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row: any, index: any) => (
                        <TableRow key={index}>
                        {row.map((cell: any, index: any) => (
                            <TableCell key={index}>{cell}</TableCell>
                        ))}
                        <TableCell>
                            <IconButton 
                                aria-label="edit"
                                onClick={() => props.onEdit({index, row})}>
                                <Edit />
                            </IconButton>
                            <IconButton 
                                aria-label="delete"
                                onClick={() => props.onRemove({index, row})}>
                                <Delete />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

Table0.defaultProps =
{
    // headers: ['Name', 'Age', 'Gender'],
    // rows: [
    //     ['John Doe', 30, 'Male'],
    //     ['Jane Doe', 25, 'Female'],
    //     ['Bob Smith', 40, 'Male'],
    // ]
    headers: null,
    rows: null,
    maxHeight: 700

}

Table0.propTypes = 
{
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    maxHeight: PropTypes.number
}


