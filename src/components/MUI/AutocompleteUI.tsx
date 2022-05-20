import React, { useState, useEffect } from "react";
import { styled } from "@stitches/react";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

const AutocompleteUI = () =>{
    const [paises, setPaises] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3003/paises')
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result)
                const paisesAutocomplete = result.map((values:any)=>{
                    return {'label' : values.nome, 'numcode' : values.numcode}
                })
                 setPaises(paisesAutocomplete)
            },
            (error)=>{
                console.log(error)
            }
        )
    }, [])

    const DivAutocomplete = styled('div', {
        width: '100%',
        padding: '1rem'
    })

    return(
        <DivAutocomplete>
            <Box sx={{ '& button': { m: 1 } }}>
                <h1>Autocomplete</h1>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={paises}
                    sx={{ width: 300 }}
                    renderInput={(params)=><TextField {...params} label="Paises"/>}
                />
            </Box>
        </DivAutocomplete>
    )
}

export default AutocompleteUI