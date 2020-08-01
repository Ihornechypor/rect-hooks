import React, {useContext, useState} from "react";
import {AlertContext} from "../context/AlertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext);
    const gitHub = useContext(GithubContext);

    const onSubmit = event => {
        if(event.key !== 'Enter'){
            return
        }

        console.log(gitHub.clearUsers())

        gitHub.clearUsers()

        if(value.trim()){
            alert.hide()
            gitHub.search(value.trim())
        } else {
            alert.show('Enter user data')
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