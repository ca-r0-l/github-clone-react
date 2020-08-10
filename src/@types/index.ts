export interface APIUser {
    login: string;
    name: string;
    email?: string;
    location?: string;
    company?: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    blog?: string;
}

export interface APIRepo {
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
}