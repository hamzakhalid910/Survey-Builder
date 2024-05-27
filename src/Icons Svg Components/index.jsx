import DropDown from "./DropDownIcon";
import DropDownIcon from './DropDownIcon'
import GridIconSVG from "./GridIconSVG";
import ListIconSVG from "./ListIconSVG";
import SearchIcon from "./SearchIcon";

const SvgIconRenderer = ({type, color,isOpen }) => {
    const svgs ={
        
        DropDown : <DropDownIcon  isOpen={isOpen} color={color || "#828282"}/> ,
        GridIcon: <GridIconSVG color={color || "black"}/>,
        ListIcon: <ListIconSVG color={color || "black"}/>,
        SearchIcon:<SearchIcon color={color || "#3498DB"}/>,
        
    }

  return svgs[type];
}

export default SvgIconRenderer