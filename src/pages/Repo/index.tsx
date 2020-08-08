import React from "react";

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from "./styles";

import { Link } from "react-router-dom";

const Repo: React.FC = () => {
	return (
		<Container>
			<Breadcrumb>
				<RepoIcon />

				<Link className={"username"} to={"/ca-r0-l"}>
					ca-r0-l
				</Link>
				<span>/</span>

				<Link
					className={"reponame"}
					to={"/ca-r0-l/gerenciador-produtos-sql-koa"}
				>
					gerenciador-produtos-sql-koa
				</Link>
			</Breadcrumb>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

			<Stats>
				<li>
					<StarIcon />
					<b>9</b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon />
					<b>0</b>
					<span>forks</span>
				</li>
			</Stats>

			<LinkButton href={"https://github.com/ca-r0-l/gerenciador-produtos-sql-koa"}>
				<GithubIcon />
				<span>View on Github</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
