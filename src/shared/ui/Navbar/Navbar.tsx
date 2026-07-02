import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { Box } from '@mui/material'
import { LinksContainer, NavbarBrand, NavbarRoot } from './Navbar.styles'
import { ListItem } from '@mui/material'
import { NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <NavbarRoot>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}> 
      <NavbarBrand>
        <FontAwesomeIcon icon={faBitcoin} />
        Crypto Live
      </NavbarBrand>
      <LinksContainer>
        <ListItem  sx={{ padding: 0, textDecoration: 'none' }}>
            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/">Coins</NavLink>
        </ListItem>
        <ListItem sx={{ padding: 0, }}>
            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/favorites">Favorites</NavLink>
        </ListItem>
      </LinksContainer>
       </Box> 
    </NavbarRoot>
  )
}
