import React, {Fragment, useContext, useEffect} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user,repos} = useContext(GithubContext);
    const urlname = match.params.name

    useEffect(()=>{
        getUser(urlname)
        getRepos(urlname)
        //eslint-disable-next-line
    },[]);

    if(loading){
        return <p className='text-center'>
            Loading...
        </p>
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        following,
        followers,
        public_gists,
        public_repos
    } =  user

    return(
        <Fragment>
            <Link to="/" className="btn btn-link">
                home page
            </Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style ={{width:'100px'}}
                            />
                            <h1>
                                {name}
                            </h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>
                                        BIO
                                    </h3>
                                    <p>
                                        {bio}
                                    </p>
                                </Fragment>
                            }
                            <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">open profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Username:</strong>{login}
                                </li>}
                                {company && <li>
                                    <strong>Company:</strong>{company}
                                </li>}
                                {blog && <li>
                                    <strong>Blog:</strong>{blog}
                                </li>}
                            </ul>
                            <div className="badge badge-primary">
                                Folowers: {followers}
                            </div>
                            <div className="badge badge-info">
                                Folowing: {following}
                            </div>
                            <div className="badge badge-success">
                                Repo: {public_repos}
                            </div>
                            <div className="badge badge-dark">
                                Gists: {public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
}