import logo from "../../assets/images/long-logo.png";
import "./styles.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import PositionedMenu from "./ProfileMenu" ;
import Navbottom from "./Navbottom copy.js";
import Mobileport from "../Mobileport";
export default function Header(){
    return( 
        <div className="header">
        <img src={logo}  className="logo" alt="logo" ></img>
        <div className="middle-search">
            {/* <input type="text"  className="search-bar" placeholder="search here to go"></input> */}
            <div className="search-inside-div">Any where</div>
            <div className="search-inside-div">Any weeks</div>
            <div className="search-inside-div2">Any guests</div>
            <div className="search-icon-div">
            <SearchOutlinedIcon className="search-icon"/>
            </div>
            </div>
        
           
    <div className="third-nav-profile">
<div className="airbun-home">airbun your-home</div>
<div className="airbun-home">
                <PublicSharpIcon className="global"/>
            </div>
      <div>     
<PositionedMenu className="airbun-home"/> 

</div>    
        </div>
        {/* <Mobileport/> */}
        <Navbottom/>
        </div>

    );
}