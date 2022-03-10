import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FootNav(screenConfig) {
  const [value, setValue] = React.useState(0);

  console.log(screenConfig)

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100%',
      left: 0,


    }}>
      <BottomNavigation
        showLabels
        value={screenConfig[0]}
        onChange={(event, newValue) => {

          setValue(newValue);
          screenConfig[1](newValue);
        }}
      >
        <BottomNavigationAction label="Globals Stats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Countries" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Graphs" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
