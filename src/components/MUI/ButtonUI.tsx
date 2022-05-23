import React from "react";
import { Button, ButtonBase, ButtonGroup, Chip, Divider, IconButton, Stack, TableBody, Typography } from "@mui/material";
import { styled } from "@stitches/react";
import { styled as styleMU, useTheme} from '@mui/material/styles';
import { FaCamera } from "react-icons/fa";
import { Fingerprint } from "@mui/icons-material";

import PR from '../../images/pr.jpg'
import RU from '../../images/ru.png'

const Input = styleMU('input')({
    display: 'none',
});

const Root = styleMU('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)",
    paddingTop: '1rem',
    paddingBottom: '1rem'
}))

const ImageButton = styleMU(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,


    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
}));

const ImageSrc = styleMU('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styleMU('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styleMU('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styleMU('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));


const  ButtonUI = () =>{

    const DivButtonUI = styled('div',{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '100%',
        alignItems: "start"
    }) 
    return(
        <DivButtonUI>
            <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                <Root>
                    <Divider>
                        <Chip color="primary" label="Botões - Tipos"></Chip>
                    </Divider>
                </Root>
                <Button variant="outlined" color="error">Erro</Button>
                <Button variant="contained" color="success">Sucesso</Button>
                <Root>
                    <Divider>
                        <Chip label="Botões - Tamanhos" color="primary"></Chip>
                    </Divider>
                </Root>
                <Button variant="contained" size="small">Pequeno</Button>
                <Button variant="contained" size="medium">Médio</Button>
                <Button variant="contained" size="large">Grande</Button>
                <Root>
                    <Divider>
                        <Chip label="Botões - Ícones" color="primary"></Chip>
                    </Divider>
                </Root>
                <label htmlFor="contained-button-file">
                    <Input id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" endIcon={<FaCamera/>}>
                    Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <FaCamera />
                    </IconButton>
                </label>
                <Root>
                    <Divider>
                        <Chip label="Botões - Ícones Coloridos" color="primary"></Chip>
                    </Divider>
                </Root>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
                <Root>
                    <Divider>
                        <Chip label="Botões - Imagem" color="primary"></Chip>
                    </Divider>
                </Root>
                <ImageButton
                    focusRipple
                    key="prhumberto"
                    style={{
                        width: "50%"
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${RU})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        Rússia
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
                <Root>
                    <Divider>
                        <Chip color="primary" label="Botões - Grupo (Ou pelo mesno era para ser..)"></Chip>
                    </Divider>
                </Root>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </TableBody>
            
        </DivButtonUI>
    )
}

export default ButtonUI