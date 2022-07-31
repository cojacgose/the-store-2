import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./HeaderFooter/Header";

const Bar = styled.div` //this is just a placeholder
    height:100px;
    background-color:#C72D7A;
    border-top: 10px solid #ff0;
`

export default function HeaderFooter(){
    return(
        <div>
            <Header></Header>
                <Outlet/>
            <Bar></Bar>
        </div>
    )
}