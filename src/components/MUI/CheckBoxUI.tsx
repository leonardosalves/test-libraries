import React from "react";
import { Checkbox, Chip, Divider, TableBody } from "@mui/material";
import { styled } from "@stitches/react";
import { styled as styledUI } from '@mui/material/styles'
import { Favorite, FavoriteBorder, Star, StarBorder } from "@mui/icons-material";

const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)",
    paddingTop: '1rem',
    paddingBottom: '1rem',
}))

const label = { inputProps: { 'aria-label': 'Teste' } };

const CheckBoxUI = () =>{
    
    const DivCheckBoxUI = styled('div', {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '100%',
        alignItems: "start"
    })

    return(
        <DivCheckBoxUI>
                <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                    <Root>
                        <Divider>
                            <Chip label="Checkbox - Normal" color="primary"></Chip>
                        </Divider>
                    </Root>
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />
                    <Root>
                        <Divider>
                            <Chip label="Checkbox - Coloridos" color="primary"></Chip>
                        </Divider>
                    </Root>
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
                    <Root>
                        <Divider>
                            <Chip label="Checkbox - Ícones" color="primary"></Chip>
                        </Divider>
                    </Root>
                    <Checkbox color="secondary" {...label} icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} />
                        <Checkbox color="error"
                            {...label}
                            icon={<StarBorder />}
                            checkedIcon={<Star />}
                        />
                </TableBody>
                
        </DivCheckBoxUI>
    )
}

export default CheckBoxUI