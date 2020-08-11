import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from "./styles";
import { APIRepo } from "../../@types/index";
import { URL_GITHUB } from "../../App";


interface Data {
	repo?: APIRepo;
	error?: string;
}
  
const Repo: React.FC = () => {
	const { username, reponame } = useParams();
	const [data, setData] = useState<Data>();
  
	useEffect(() => {
	  fetch(`${URL_GITHUB}/repos/${username}/${reponame}`).then(
		async (response) => {
		  setData(
			response.status === 404
			  ? { error: 'Repository not found!' }
			  : { repo: await response.json() }
		  );
		}
	  );
	}, [reponame, username]);
  
	if (data?.error) {
	  return <h1>{data.error}</h1>;
	}
  
	if (!data?.repo) {
	  return <h1>Loading...</h1>;
	}
  
	return (
		<Container>
			<Breadcrumb>
				<RepoIcon />

				<Link className={"username"} to={`/${data.repo.owner.login}`}>
					{data.repo.owner.login}
				</Link>
				<span>/</span>

				<Link
					className={"reponame"}
					to={`/${data.repo.owner.login}/${data.repo.name}`}
				>
					{data.repo.name}
				</Link>
			</Breadcrumb>

			<p>{data.repo.description}</p>

			<Stats>
				<li>
					<StarIcon />
					<b>{data.repo.stargazers_count}</b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon />
					<b>{data.repo.forks}</b>
					<span>forks</span>
				</li>
			</Stats>

			<LinkButton href={data.repo.html_url}>
				<GithubIcon />
				<span>View on Github</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
