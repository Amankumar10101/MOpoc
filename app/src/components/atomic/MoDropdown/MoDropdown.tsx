import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import { MoLabel } from '../MoMolecules/Molecules';

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
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'animal',
];

const placeHolder = "Select category"

const BootstrapInput = styled(Select)(({ theme }) => ({

    // css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline
    '& .MuiInputBase-input': {
        borderRadius: 6,
        position: 'relative',
        backgroundColor: "white",
        border: '2px solid',
        borderColor: theme.palette.mode === 'light' ? '#dedddd' : '#2D3843',
        fontSize: 16,
        color: "#c6c3c3",
        // width: width,
        width: "100%",
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,

        },
        '&:after': {
            borderBottom: 'none'
        }
    },
    // '& .MuiInputBase-root .MuiInput-root .MuiSelect-root.Mui-focused':{
    //     '&:after':{
    //         border: 'none'
    //     }
    // }
    //     '& .MuiInputBase-input .MuiInput-root .MuiSelect-root': {
    // color:"red"
    //     }
}));

interface ISelectDropdown {
    width?: string,
    label?: string,
    placeholder?: string,
    name?: string,
    inputType?: string,
    multiple?: boolean,
    showErrorMessage?: boolean,
    errorMessage?: string,
    className?: string,
    onChange: (name: string, value: string) => void,
}

export default function MoDropdown(props: ISelectDropdown) {

    const { label,className, width, multiple, inputType, placeholder, name } = props;

    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string>("0");

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            value,
        );

        props.onChange(event?.target?.name, event?.target?.value);
        console.log(event.target.value);
    };

    return (


        <FormControl className={props.className}  variant="standard">
            <MoLabel>{label}</MoLabel>

            <Select
                // sx={{ color: '#2D3843' }}
                // className={props.className}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={personName}
                onChange={handleChange}
                input={<BootstrapInput />}
                name={name}
                defaultValue="30"

            >
                <MenuItem value="0">
                    {placeholder}
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        /* {multiple ?
            <FormControl className={props.className} variant="standard">
                <InputLabel shrink id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    className={props.className}
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    MenuProps={MenuProps}
                    name={name}
                    placeholder={placeholder}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> :
            <FormControl className='textfield' variant="standard">
                <InputLabel shrink id="demo-customized-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={""}
                    className={props.className}
                    onChange={(event) => { props.onChange(name, event?.target?.value) }}
                    input={<BootstrapInput  />}
                    name={name}
                    placeholder={placeholder}
                >
                    <MenuItem disabled value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>} */



    );
}