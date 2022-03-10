import * as React from 'react';
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  
  
  backgroundColor: theme.palette.mode === 'dark' ? '#3f51b5' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginTop: '20px',
  border: '1px grey',
  color: 'grey',


}));

export default function GlobalStats() {


  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const resp = await fetch('https://corona.lmao.ninja/v2/continents?yesterday&sort')
      let data = await resp.json();
      delete data[0].countries;
      setGlobalData(data[0])
    }
    getData()
  }, [])




  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} >
        {Object.keys(globalData).map((val, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Item>

                <h3 className="title" style={{color:'blue'}}
                
                
                >{val.toUpperCase()}</h3>
                <h3>{globalData[val]}</h3>
                 

              </Item>
            </Grid>
          )
        })}

      </Grid>
    </Box>
  );
}
