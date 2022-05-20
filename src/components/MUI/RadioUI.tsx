import React from "react";
import { styled } from "@stitches/react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TableBody } from "@mui/material";


const RadioUI = () =>{
    const [selectedValue, setSelectedValue] = React.useState('a');

    const DivRadio = styled('div', {
        width: '100%'
    })

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item: string) => ({
      checked: selectedValue === item,
      onChange: handleChangeRadio,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
    return(
        <DivRadio>
            <h1>Radio</h1>
            <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="mulher"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="mulher" control={<Radio />} label="Mulher" />
                        <FormControlLabel value="macho" control={<Radio />} label="Macho" />
                    </RadioGroup>
                </FormControl>
                <Radio {...controlProps('a')} />
                    <Radio {...controlProps('b')} color="secondary" />
                    <Radio {...controlProps('c')} color="success" />
                    <Radio {...controlProps('d')} color="default" />
                    <Radio
                        {...controlProps('e')}
                        sx={{
                        color: 'rosa',
                        '&.Mui-checked': {
                            color: 'vermelho',
                        },
                        }}
                />
            </TableBody>
        </DivRadio>
    )
}

export default RadioUI