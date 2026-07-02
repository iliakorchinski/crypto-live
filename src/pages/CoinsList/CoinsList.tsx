import {Navbar} from '@/shared/ui/Navbar/Navbar'
import { Typography, Box } from '@mui/material'
import {colorTokens} from '@/shared/config/theme/tokens'

export const CoinsList = () => {
  return (
    <div >
       <Navbar /> 
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 4 }}>
        <Box>
            <Typography variant="h4" component="h4"  gutterBottom>
                Market
            </Typography>
            <Typography sx={{color: colorTokens.text.secondary}} component='span'>Latest cryptocurrency prices and market data</Typography>
        </Box>    
       </Box>
   
    </div>
  )
}