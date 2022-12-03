import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { getData } from '../../config/firebaseMethods'

export function MuiCheckBox(props) {

    const { label, onChange, value } = props

    return (
        <>
            <FormControlLabel value={value} control={<Checkbox />} label={label} onChange={onChange} />
        </>
    )
}
export function MuiCheckBoxGroup(props) {

    const { defaultValue, label, onChange, disabled, value, variant, color, name, error, fullWidth, id, labelId, nodeName, dataSource, required, displayValue, fieldValue } = props

    const [dataBaseSource, setDataBaseSource] = useState(dataSource)

    const selectRadioDb = () => {
        if (nodeName) {
            return getData(nodeName)
                .then((res) => {
                    setDataBaseSource(res)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        selectRadioDb()
    }, [])

    return (
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
                <FormGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={defaultValue}
                    name="radio-buttons-group"
                >
                    {dataBaseSource && dataBaseSource.length > 0 ? dataBaseSource.map((e, i) => {
                        return <FormControlLabel 
                        key={i} 
                        value={e[fieldValue ? fieldValue : 'option']} 
                        control={<Checkbox />} 
                        label={e[displayValue ? displayValue : 'option']}
                        onChange={onChange}
                         />
                    }) : null}
                </FormGroup>
            </FormControl>
        </>
    )
}
