import React, { useState } from "react";
import { 
    FaBook, 
    FaChartLine, 
    FaHome,  
    FaUikit} from "react-icons/fa";
import { BiSliderAlt, BiCheckboxChecked } from "react-icons/bi"
import { CgSelect } from "react-icons/cg"
import { IoIosSwitch } from "react-icons/io"
import { SiMaterialui } from "react-icons/si"
import { BsUiRadiosGrid, BsMenuButtonFill } from "react-icons/bs"
import { MdOutlineGeneratingTokens, MdOutlineSmartButton, MdAutofpsSelect } from "react-icons/md"
import { FiLogOut } from "react-icons/fi";
import { 
    Menu, 
    MenuItem, 
    ProSidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarHeader, 
    SubMenu } from "react-pro-sidebar";
import  Logo from '../images/uber.jpg'
import BG from '../images/traffic.jpg'
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const Sidebar = () =>{
    const [ collapsed, setCollapsed ] = useState(false)

    const  handleClick = () =>{
      collapsed ? setCollapsed(false) : setCollapsed(true)
    } 

    return(
       
        <ProSidebar 
            image={BG} 
            collapsed={collapsed} 
            width="230px"
            breakPoint="md"
            >
            <SidebarHeader>
                <img 
                onClick={handleClick} 
                width={`${collapsed ? '80px' : '230px'}`} 
                src={Logo} 
                alt="Logo" />
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem icon={<FaHome/>}><Link to="/"/>Início</MenuItem>
                        <SubMenu title="Livrarias"  icon={<FaBook/>}>
                                <SubMenu title="MaterialUI" icon={<SiMaterialui/>}><Link to="/#" />
                                    <MenuItem icon={<MdAutofpsSelect/>}><Link to="/material-ui/autocomplete" />Autocomplete</MenuItem>
                                    <MenuItem icon={<MdOutlineSmartButton/>}><Link to="/material-ui/button" />Button</MenuItem>
                                    <MenuItem icon={<BiCheckboxChecked/>}><Link to="/material-ui/checkbox" />Checkbox</MenuItem>
                                    <MenuItem icon={<BsMenuButtonFill/>}><Link to="/material-ui/botao-flutuante" />Botão Flutuante</MenuItem>
                                    <MenuItem icon={<BsUiRadiosGrid/>}><Link to="/material-ui/radio" />Radio</MenuItem>
                                    <MenuItem icon={<MdOutlineGeneratingTokens/>}><Link to="/material-ui/rating" />Rating (Avaliação)</MenuItem>
                                    <MenuItem icon={<CgSelect/>}><Link to="/material-ui/select" />Select</MenuItem>
                                    <MenuItem icon={<BiSliderAlt/>}><Link to="/material-ui/slider" />Slider</MenuItem>
                                    <SubMenu title="Sliders Custons" icon={<BiSliderAlt/>}><Link to="/sliders/#" />
                                        <MenuItem icon={<BiSliderAlt/>}><Link to="/material-ui/slider/custons-phone" />Slider - Custom - Phone</MenuItem>
                                        <MenuItem icon={<BiSliderAlt/>}><Link to="/material-ui/slider/custons-music-player" />Slider - Custom - Music Player</MenuItem>
                                    </SubMenu>
                                    <MenuItem icon={<IoIosSwitch/>}><Link to="/material-ui/switch" />Switch</MenuItem>
                                </SubMenu>
                            <MenuItem icon={<FaChartLine/>}><Link to="/ri-chart" />RiChart</MenuItem>
                        </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
            <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Sair</MenuItem>
            </Menu>
            </SidebarFooter> 
        </ProSidebar>
       
    )
}

export default Sidebar