import React from 'react';
import {Button, ButtonGroup} from "@mui/material";

export const ShowPacksButton = () => {
    return (
        <div>
            <h2 style={{margin: '30px 0'}}>Show packs cards</h2>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>My</Button>
                <Button>All</Button>
            </ButtonGroup>
        </div>
    );
};

