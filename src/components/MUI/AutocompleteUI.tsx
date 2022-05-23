import React, { useState, useEffect } from "react";
import { styled } from "@stitches/react";
import { styled as styledUI } from "@mui/material/styles";
import { Autocomplete, Chip, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)"
}))

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
        paddingTop: '10px',
        width: '100%'
    })

    return(
        <DivAutocomplete>
            <Root>
                <Divider>
                    <Chip color="primary" label="Autocomplete (Dados API)"></Chip>
                </Divider>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={paises}
                        sx={{ width: 300 }}
                        renderInput={(params)=><TextField {...params} label="Paises"/>}
                    />
                </Box>
            </Root>
        </DivAutocomplete>
    )
}

export default AutocompleteUI