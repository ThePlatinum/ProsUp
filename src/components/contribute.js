import { Button } from 'reactstrap';
export default function ContributeBtn({styleClass}){
    
    return(

        <Button className={styleClass} onClick={()=>{window.open("https://paystack.com/pay/supportprosup", "_blank")}}>Contribute</Button>
    )
}