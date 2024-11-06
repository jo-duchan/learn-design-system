import styled, { css } from "styled-components";
import { text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Icons from "@/styles/iconography";
import { profile } from "@/assets/aws-s3-assets";
import Divider from "@/components/Divider";

interface Props {
  currentPath: string;
  onClick: (path: string) => void;
}

const navItems = [
  {
    icon: Icons.home,
    activeIcon: Icons.homeActive,
    label: "홈",
    path: "/home",
  },
  {
    icon: Icons.series,
    activeIcon: Icons.seriesActive,
    label: "시리즈",
    path: "/series",
  },
  {
    icon: Icons.write,
    activeIcon: Icons.writeActive,
    label: "글쓰기",
    path: "/write",
  },
  {
    icon: Icons.ground,
    activeIcon: Icons.groundActive,
    label: "그라운드",
    path: "/ground",
  },
  {
    url: profile.unknown1,
    label: "프로필",
    path: "/profile",
  },
];

function NavigationBar({ currentPath, onClick }: Props) {
  return (
    <Container>
      <Divider style="navigation" />
      <Navigation>
        {navItems.map((item) => (
          <Item key={item.label} onClick={() => onClick(item.path)}>
            <ItemAsset $active={item.path === currentPath}>
              {item.icon && <item.icon className="default" />}
              {item.icon && <item.activeIcon className="active" />}
              {item.url && <img src={item.url} alt="프로필 이미지" />}
            </ItemAsset>
            <ItemLabel $active={item.path === currentPath}>
              {item.label}
            </ItemLabel>
          </Item>
        ))}
      </Navigation>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
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

const ItemAsset = styled.div<{ $active: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 150ms ease-in-out;

    ${({ $active }) =>
      $active
        ? css`
            &.default {
              opacity: 0;
            }

            &.active {
              opacity: 1;
            }
          `
        : css`
            &.default {
              opacity: 1;
            }

            &.active {
              opacity: 0;
            }
          `}
  }
`;

const ItemLabel = styled.span<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? text.primary : text[10])};
  ${textStyles.caption.regular12};
  transition: color 150ms ease-in-out;
`;
