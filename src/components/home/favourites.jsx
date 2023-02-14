import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Divider, Link, Stack, Typography } from "@mui/material"
import usePlaylists from "../../hooks/usePlaylists"
import ShowPlaylists from "../shared/ShowPlaylists"

const Favourite = () => {
    const { favouritesForHome } = usePlaylists();

    return (
        <React.Fragment>
            <Typography variant='h6'>Your Favourite Playlists</Typography>
            <Divider />
            <Stack direction='column' spacing={2}>
                <ShowPlaylists playlists={favouritesForHome} term={'favourites'} />
                <Typography variant='body1' color='text.primary' align='right'>
                    <Button variant='outlined'>
                        <Link 
                            component={RouterLink} 
                            to={`/favourites/lists`} 
                            sx={{ textDecoration: 'none', color: 'text.secondary' }}
                        >
                            Show all playlists
                        </Link>
                    </Button>
                </Typography>
            </Stack>
        </React.Fragment>
    )
};

export default Favourite;