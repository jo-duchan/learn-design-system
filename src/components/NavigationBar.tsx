import styled from "styled-components";
import { text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Icons from "@/styles/iconography";
import { profile } from "@/assets/aws-s3-assets";
import Divider from "@/components/Divider";

interface Props {
  fixedPosition: boolean;
  fullWidth: boolean;
  width?: number;
}

interface StyledProps {
  $position: string;
  $width: string;
}

function NavigationBar({
  fixedPosition = false,
  fullWidth,
  width = 360,
}: Props) {
  const navItems = [
    {
      icon: Icons.home,
      label: "홈",
      path: "",
    },
    {
      icon: Icons.series,
      label: "시리즈",
      path: "",
    },
    {
      icon: Icons.home,
      label: "글쓰기",
      path: "",
    },
    {
      icon: Icons.home,
      label: "그라운드",
      path: "",
    },
    {
      url: profile.unknown1,
      label: "프로필",
      path: "",
    },
  ];

  const setWidth = () => {
    if (fullWidth) {
      return "100%";
    }
    return `${width}px`;
  };

  const setPosition = () => {
    if (fixedPosition) {
      return "fixed";
    }
    return "static";
  };
  return (
    <Container $position={setPosition()} $width={setWidth()}>
      <Divider style="navigation" fullWidth />
      <Navigation>
        {navItems.map((item) => (
          <Item key={item.label}>
            <ItemAsset>
              {item.icon && <item.icon />}
              {item.url && <img src={item.url} alt="프로필 이미지" />}
            </ItemAsset>
            <ItemLabel>{item.label}</ItemLabel>
          </Item>
        ))}
      </Navigation>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.div<StyledProps>`
  position: ${({ $position }) => $position};
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width};
  height: fit-content;
  /* background-color: salmon; */
`;

const Navigation = styled.nav`
  display: flex;

  justify-content: space-between;
  width: 100%;
  height: 52px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 60px;
  height: 52px;
  cursor: pointer;
  user-select: none;
`;

const ItemAsset = styled.div`
  width: 20px;
  height: 20px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemLabel = styled.span`
  color: ${text[10]};
  ${textStyles.caption.regular12};
`;
