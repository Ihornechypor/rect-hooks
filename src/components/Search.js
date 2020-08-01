import React, {useContext, useState} from "react";
import {AlertContext} from "../context/AlertContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext);

    const onSubmit = event => {
        if(event.key !== 'Enter'){
            return
        }

        if(value.trim()){
            console.log('request')
        } else {
            show('Enter user data')
        }

    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="enter nick name"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />

        </div>
    )
}