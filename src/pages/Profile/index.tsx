import React from "react";

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {

	const TabContent = () => (
		<div className="content">
			<RepoIcon />
			<span className="label">Repositories</span>
			<span className="number">50</span>
		</div>
	);

	return (
		<Container>
			<Tab className="desktop">
				<div className="wrapper">
					<span className="offset" />
					<TabContent />
				</div>

				<span className="line" />
			</Tab>

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
					<Tab className="mobile">
						<TabContent />
						<span className="line" />
					</Tab>

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
					
					<CalendarHeading>
						Random calendar (do not represent actual data)
					</CalendarHeading>

					<RandomCalendar />
				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
