import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='cart'>Cart</NavLink>
        </div>
    )
}