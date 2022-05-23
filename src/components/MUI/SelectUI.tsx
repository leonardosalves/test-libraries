import React from 'react'
import { 
    TableBody,
    TableCell,
    FormControl, 
    SelectChangeEvent, 
    Theme, 
    InputLabel, 
    Select, 
    OutlinedInput, 
    MenuItem, 
    Chip, 
    Checkbox, 
    ListItemText, 
    styled as styledUI, 
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { styled } from '@stitches/react';

const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)",
    paddingTop: '1rem',
    paddingBottom: '1rem',

}))

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


function getStylesChip(name: string, personNameChip: readonly string[], theme: Theme) {
    return {
        fontWeight:
        personNameChip.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const SelectUI = () =>{
        const [age, setAge] = React.useState('');
        const [personName, setPersonName] = React.useState<string[]>([]);
        const [personNameChip, setPersonNameChip] = React.useState<string[]>([]);
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

    const handleChangeSelectedControledChip = (event: SelectChangeEvent<typeof personNameChip>) => {
        const {
        target: { value },
        } = event;
        setPersonNameChip(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const DivSelectUI = styled('div', {
        paddingTop: '10px',
        width: '100%',
        alignItems: "center"
    })

    const handleChangeSelectS = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return(
        <DivSelectUI>
            <Root>
                <Divider>
                    <Chip label="Select - Normal" color="primary"></Chip>
                </Divider>
            </Root>
            <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
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
            <Root>
                <Divider>
                    <Chip label="Select - Controlado" color="primary"></Chip>
                </Divider>
            </Root>
            <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
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
                    <Root>
                        <Divider>
                            <Chip label="Select - Controlado - Chip" color="primary"></Chip>
                        </Divider>
                    </Root>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personNameChip}
                            onChange={handleChangeSelectedControledChip}
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
                                    style={getStylesChip(name, personNameChip, themeSelectControled)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </TableCell>
            </TableBody>
        </DivSelectUI>
    )

}

export default SelectUI