import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
	return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData
						username={"carol"}
						name={"Caroline Ribeiro"}
						avatarUrl={"https://avatars1.githubusercontent.com/u/8212327?s=400&u=897e9f7b525699ef4def7ddf31b845137a02f1d1&v=4"}
						followers={56}
						following={98}
						company={"@Guiabolso"}
						location={"São Bernardo do Campo, Brasil"}
						email={"email"}
						blog={"http://carolineandrade.netlify.com"}
					/>
				</LeftSide>
				<RightSide>
					<Repos>
						<h2>Random Repos</h2>

						<div>
							{[ 1, 2, 3, 4, 5, 6].map(n => {
								return <RepoCard
									key={n}
									username={"carol"}
									reponame={"repo1"}
									description={"Legal"}
									language={n % 3 === 0 ? "Javascript" : "Typescript"} 
									stars={8}
									forks={1}
								/>
							})}
						</div>
					</Repos>					
				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
