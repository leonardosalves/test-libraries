import React, { useEffect, useState } from "react";
import { 
    Autocomplete, 
    TextField, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Stack,
    Typography,
    ButtonBase,
    ButtonGroup,
    Checkbox,
    Fab,
    AppBar,
    Tabs,
    Tab,
    Zoom,
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Rating,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    OutlinedInput,
    ListItemText,
    Chip,
    Theme
    
} from "@mui/material";
import { SxProps } from '@mui/system';
import { 
    Fingerprint, 
    FavoriteBorder, 
    Favorite, 
    StarBorder, 
    Star,
    Dangerous
} from '@mui/icons-material';
import { styled } from "@stitches/react";
import  Button  from '@mui/material/Button';
import { 
    FaCamera,
    FaPlus,
    FaEdit,
    FaArrowUp,
    FaFacebook
 } from "react-icons/fa";
import  SwipeableViews  from 'react-swipeable-views';
import { styled as styleMU, useTheme} from '@mui/material/styles';







  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
const MaterialUI = () =>{
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [valueR, setRValue] = React.useState<number | null>(2);
    const [age, setAge] = React.useState('');
    const [personName, setPersonName] = React.useState<string[]>([]);
    const themeSelectControled = useTheme();


  const handleChangeSelectedControled = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeSelectS = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  

  

  

    var DivContentUI = styled('div',{
        paddingTop: '10px',
        width: '100%',
        alignItems: "start"
    })
    

    return(
        <DivContentUI>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} area-label="caption table">
                    <caption>Legal tabela com caption</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Componente</TableCell>
                            <TableCell>Variação</TableCell>
                            <TableCell>Renderização</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                        <TableCell>Avaliação</TableCell>
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
                    <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                        <TableCell>Select</TableCell>
                        <TableCell><code>Normal</code></TableCell>
                        <TableCell align="left">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChangeSelectS}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableBody>
                    <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                        <TableCell>Select</TableCell>
                        <TableCell><code>Controlado</code></TableCell>
                        <TableCell align="left">
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChangeSelectedControled}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChangeSelectedControled}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, themeSelectControled)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableBody>
                    <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                        <TableCell>Slider</TableCell>
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
                </Table>
            </TableContainer>
        </DivContentUI>
       
    )
}

export default MaterialUI