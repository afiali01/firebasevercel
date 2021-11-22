import { Brand } from "../brand" 
import { Anchor } from "ui/anchors"
import Bar from "./styles"
 
 function AppBar(props) {
    return (
        <Bar>
            <ul>
                <li><Brand font="14px" letter="16px" logo="20px" /></li>
               
                <li>
                   <Anchor size="12px" style={{marginRight:"1rem"}} href="/options" hover="#ED4747">
                      Login
                    </Anchor>

                    <Anchor size="12px" style={{marginRight:"1rem"}} href="/" hover="#ED4747">
                        Sign Up
                    </Anchor>
                   
                </li>

            </ul>
        </Bar>
    )
}

export default AppBar