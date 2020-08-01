import React, {useContext, useState} from "react";
import {AlertContext} from "../context/AlertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext);
    const gitHub = useContext(GithubContext);

    const onSubmit = event => {
        if(event.key !== 'Enter'){
            return
        }

        if(value.trim()){
            gitHub.search(value.trim())
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