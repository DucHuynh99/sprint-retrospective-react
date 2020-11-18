import React from 'react';
import { Box, Button } from '@material-ui/core';



export default function AddBoard({ text, onClick }) {
    return (
        <Box borderRadius={16}>
            <Button size="large" variant="outlined" color="primary" onClick={() => { onClick() }}>
                {text}
            </Button>
        </Box>
    );
};