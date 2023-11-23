import { Repo } from "./Repo";

export interface Profile{
    avatar_url:string;
    name:string;
    login:string;
    bio:string;
    html_url:string;
    public_repos:number;
    twitter_username:string;
    repos_url:string;
    repos:Repo[];
}