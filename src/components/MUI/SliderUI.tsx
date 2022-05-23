import React, { useState } from "react";
import { 
    styled as styledUI,
    Box,
    Slider,
    Divider,
    Chip,
    Typography,
    Stack
} from '@mui/material'
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { styled } from "@stitches/react";


const Root = styledUI('div')(({ theme })=>({
    ...theme.typography.body2,
    '& > :not(style) + :not(style)' : {
        marginTop: theme.spacing(2)
    },
    width: "calc(var(--vw, 1vw) * 75)",
    paddingTop: '1rem',
    paddingBottom: '1rem',
}))


function valuetext(value : number){
    return `${value}°C`
}

function valueLabelFormat(value : number){
    return marks.findIndex((mark) => mark.value === value) + 1
}

const marks = [{
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },]

const SliderUI = () =>{
    const [value, setValue] = useState<number>(30);
    const [valueR1 , setValueR1] = useState<number[]>([20,37])

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const [value1, setValue1] = React.useState<number[]>([20, 37]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    const [value2, setValue2] = React.useState<number[]>([20, 37]);

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue2([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue2([clamped - minDistance, clamped]);
        }
        } else {
        setValue2(newValue as number[]);
        }
    };

    const DivSliderUI = styled('div',{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '100%'
    })

    const handleChangeR1 = (event: Event, newValue: number | number[]) => {
        setValueR1(newValue as number[]);
    };
    
    const minDistance = 10;
    
    return(
        <DivSliderUI>
            <Root>
                <Divider>
                    <Chip label="Slider - Contínuos" color="primary"></Chip>
                </Divider> 
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
                Os sliders contínuos permitem que os usuários selecionem um valor ao longo de um intervalo subjetivo.
            </Typography>
            <Box sx={{ width:200 }}>
                <Stack spacing={2} direction="row" sx={{mb:1}} alignItems="center">
                    <FaVolumeDown/>
                    <Slider aria-label="Volume" value={value} onChange={handleChange}/>
                    <FaVolumeUp/>
                </Stack>
                <Slider disabled defaultValue={30} area-label="Slider desabilitado."/>
            </Box>
            <Root>
                <Divider>
                    <Chip label="Slider - Tamanhos" color="primary"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            Para slider menores, use a propriedade <code>size="small"</code>.
            </Typography>
            <Box width={300}>
                <Slider size="small" defaultValue={70}
                aria-label="Pequeno"
                valueLabelDisplay="auto" />
                <Slider defaultValue={50} aria-label="Normal" 
                valueLabelDisplay="auto"
                />
            </Box>
            <Root>
                <Divider>
                    <Chip label="Slider - Slider discreto" color="primary"></Chip>
                </Divider>
            </Root>
            <Typography  variant="caption" display="block" gutterBottom>
            Os sliders discretos podem ser ajustados para um valor específico, fazendo referência ao seu indicador de valor. <br/>
            Você pode gerar uma marca para cada etapa com <code>marks igual = true.</code>
            </Typography>
            <Box sx={{ width: 300 }}>
                <Slider 
                    area-label="Temperatura"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            </Box>
            <Root>
                <Divider>
                    <Chip label="Slider - Pequenas etapas" color="primary"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            Você pode alterar o incremento padrão da etapa.
            </Typography>
            <Box sx={{ width : 300 }}>
                <Slider 
                    aria-label="Pequenos passos"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Root>
                <Divider>
                    <Chip color="primary" label="Slider - Marcas Personalisadas"></Chip>
                </Divider>
            </Root>
            <Box sx={{ width : 300 }}>
                <Slider 
                   aria-label="Marcas personalisadas"
                   defaultValue={20}
                   getAriaValueText={valuetext} 
                   step={10}
                   valueLabelDisplay="auto"
                   marks={marks}
                />
            </Box>
            <Root>
                <Divider>
                    <Chip color="primary" label="Slider - Valores Restritos"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            Você pode restringir os valores selecionáveis fornecidos na propriedade marks configurando a propriedade step = null.
            </Typography>
            <Box sx={{ width : 300 }}>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
            <Root>
                <Divider>
                    <Chip color="primary" label="Slider - Rótulo sempre visível"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            Você pode forçar o marcador a ficar sempre visível com <code>valueLabelDisplay="on".</code>
            </Typography>
            <Box sx={{ width : 300 }}>
                <Slider 
                    aria-label="Rótulo sempre visível"
                    defaultValue={80}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </Box>
            <Root>
                <Divider>
                    <Chip color="primary" label="Slider - Slider sem intervalo"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            O slider pode ser usado para definir o início e o fim de um intervalo, fornecendo um array de valores para a propriedade <code>value.</code>
            </Typography>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Diferença de temperatura'}
                    value={valueR1}
                    onChange={handleChangeR1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <Root>
                <Divider>
                    <Chip color="primary" label="Slider - Slider sem intervalo"></Chip>
                </Divider>
            </Root>
            <Typography variant="caption" display="block" gutterBottom>
            Você pode impor uma distância mínima entre os valores no manipulador de eventos <code>onChange</code>.
            Por padrão, quando você move <br/> o ponteiro sobre um polegar enquanto arrasta outro polegar, 
            o polegar ativo mudará para o polegar em foco. Você pode desabilitar esse comportamento <br/> com o prop <code>disableSwap</code>. 
            Se você quiser que o alcance mude ao atingir a distância mínima, você pode utilizar o parâmetro <code>activeThumb</code> em <code>onChange</code>.
            </Typography>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
                <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        </DivSliderUI>    
    )
}

export default SliderUI