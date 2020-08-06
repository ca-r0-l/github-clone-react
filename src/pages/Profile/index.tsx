import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";

import ProfileData from "../../components/ProfileData";

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
						company={"Guiabolso"}
						location={"São Bernardo, Brasil"}
						email={"email"}
						blog={"carolineandrade.netlify.com.br"}
					/>
				</LeftSide>
				<RightSide></RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
