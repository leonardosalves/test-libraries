import React from "react";
import { TableBody, TableCell, Typography, Rating, Divider, Chip } from '@mui/material';
import { styled } from "@stitches/react";
import { styled as styledUI } from "@mui/material/styles";

const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)"
}))

const AvaliacaoUI = () =>{
    const [valueR, setRValue] = React.useState<number | null>(2);

    const DivAvaliacaoUI = styled('div',{
        paddingTop: '10px',
        width: '100%',
        alignItems: "start"
    })

    return(
        <DivAvaliacaoUI>
            <Root>
                <Divider>
                    <Chip label="Avaliação" color="primary"></Chip>
                </Divider>
                <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                    <TableCell>Ratings (Avaliação)</TableCell>
                    <TableCell><code>Normal</code></TableCell>
                    <TableCell align="left">
                        <Typography component="legend">Controlled</Typography>
                            <Rating
                            name="simple-controlled"
                            value={valueR}
                            onChange={(event, newValue) => {
                            setRValue(newValue);
                            }}
                        />
                    </TableCell>
                </TableBody>
            </Root> 
        </DivAvaliacaoUI> 
    )
}

export default AvaliacaoUI