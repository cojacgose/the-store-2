import ReactModal from "react-modal";


export default function LoginModal(props){
    
    return(
        <div>
            <div>THIS IS WHERE THE FORM WILL GO</div>
            <button>LOGIN</button>
            <button onClick={props.close}>CLOSE MODULE</button>
        </div>
    )
}