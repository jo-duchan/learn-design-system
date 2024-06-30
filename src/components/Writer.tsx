import styled from "styled-components";
import { text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Level2Badge from "@/assets/img/user-level-2.png";
import AdminBadge from "@/assets/img/user-level-admin.png";
import Visibility from "@/components/Visibility";

interface Props {
  connected: boolean;
  profile: string;
  name: string;
  level: "level-1" | "level-2" | "admin";
  loginId: string;
}

function Writer({ connected, profile, name, level, loginId }: Props) {
  const setBadge = () => {
    if (level === "level-2") return Level2Badge;
    if (level === "admin") return AdminBadge;
  };
  return (
    <Container>
      <UserProfile>
        <img src={profile} alt="user profile image" />
      </UserProfile>
      <UserName>{name}</UserName>
      <UserBadge>
        <img src={setBadge()} alt="user badge image" />
      </UserBadge>
      <Visibility visible={connected}>
        <UserLoginId>{loginId}</UserLoginId>
      </Visibility>
    </Container>
  );
}

export default Writer;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UserProfile = styled.div`
  width: 20px;
  height: 20px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.span`
  ${textStyles.caption.regular12};
  color: ${text[10]};
`;

const UserBadge = styled.div`
  width: 16px;
  height: 16px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const UserLoginId = styled.span`
  ${textStyles.caption.regular12};
  color: ${text[20]};
`;
