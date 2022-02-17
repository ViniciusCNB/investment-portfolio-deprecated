import React from 'react'
import { Paper, Box } from '@mui/material'
import { styles } from './styles'

const BottomBar = () => {
  return (
    <React.Fragment>
      <Paper sx={{ ...styles.bottomBar }}>
        <Box sx={{ ...styles.bottomBarText }}>
          @vinicius_cnborges
        </Box>
      </Paper>
    </React.Fragment>
  )
}

export default BottomBar
