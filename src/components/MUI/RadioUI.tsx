import React from "react";
import { styled } from "@stitches/react";
import { styled as styledUI, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TableBody, Divider, Chip } from "@mui/material";

const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)",
    paddingTop: '1rem',
    paddingBottom: '1rem',

}))

const RadioUI = () =>{
    const [selectedValue, setSelectedValue] = React.useState('a');

    const DivRadio = styled('div', {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '100%',
        alignItems: "start"
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
            <Root>
                <Divider>
                    <Chip label="Radio - Normal" color="primary"></Chip>
                </Divider>
            </Root>
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
                <Root>
                    <Divider>
                        <Chip label="Radio - Colorido" color="primary"></Chip>
                    </Divider>
                </Root>
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