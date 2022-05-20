import React from "react";
import { Checkbox, TableBody } from "@mui/material";
import { styled } from "@stitches/react";
import { Favorite, FavoriteBorder, Star, StarBorder } from "@mui/icons-material";

const label = { inputProps: { 'aria-label': 'Teste' } };

const CheckBoxUI = () =>{
    
    const DivCheckBoxUI = styled('div', {
        width: '100%'
    })

    return(
        <DivCheckBoxUI>
                <h1>Checkbox</h1>
                <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} defaultChecked color="secondary" />
                    <Checkbox {...label} defaultChecked color="success" />
                    <Checkbox {...label} defaultChecked color="default" />
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{
                        color: 'green',
                        '&.Mui-checked': {
                            color: 'orange',
                        },
                        }}
                    />
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox
                            {...label}
                            icon={<StarBorder />}
                            checkedIcon={<Star />}
                        />
                </TableBody>
                
        </DivCheckBoxUI>
    )
}

export default CheckBoxUI