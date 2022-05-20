import React, { useState } from "react";
import { 
    FaAutoprefixer,
    FaBook, 
    FaChartLine, 
    FaHome, 
    FaJira, 
    FaUikit} from "react-icons/fa";
import { FiBluetooth, FiCheck, FiFigma, FiLogOut } from "react-icons/fi";
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
                                <SubMenu title="MaterialUI" icon={<FaUikit/>}><Link to="/material-ui" />
                                    <MenuItem icon={<FaAutoprefixer/>}><Link to="/material-ui/autocomplete" />Autocomplete</MenuItem>
                                    <MenuItem icon={<FiBluetooth/>}><Link to="/material-ui/button" />Button</MenuItem>
                                    <MenuItem icon={<FiCheck/>}><Link to="/material-ui/checkbox" />Checkbox</MenuItem>
                                    <MenuItem icon={<FiFigma/>}><Link to="/material-ui/botao-flutuante" />Botão Flutuante</MenuItem>
                                    <MenuItem icon={<FaJira/>}><Link to="/material-ui/radio" />Radio</MenuItem>
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