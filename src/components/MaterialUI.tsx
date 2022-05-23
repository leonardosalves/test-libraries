import React from "react";
import { styled } from '@stitches/react';
const MaterialUI = () =>{
   
    var DivContentUI = styled('div',{
        paddingTop: '10px',
        width: '100%',
        alignItems: "start"
    })
    
    return(
        <DivContentUI>
           <h1>Material UI</h1>
        </DivContentUI> 
    )
}
export default MaterialUI