import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const navDiv = styled.div`
    
`

export default function NavBar(){
    return(
        <navDiv>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='cart'>Cart</NavLink>
        </navDiv>
    )
}