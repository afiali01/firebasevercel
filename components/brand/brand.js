import { Logo } from "components/icons/logo"
import {BrandStyles} from "./styles"


function Brand ({...props}){
  return(
    <BrandStyles {...props}>
      <Logo {...props}/>
      <figcaption><h2>2doolyst</h2></figcaption>
    </BrandStyles>
  )
}

export default Brand