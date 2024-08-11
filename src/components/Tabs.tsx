import { useState, useEffect } from "react";
import styled from "styled-components";
import textStyles from "@/styles/typography";
import { text, line } from "@/styles/tokens/alias";

interface Props {
  defaultIndex?: number;
  labels: string[];
  onChange: (index: number) => void;
  width?: number;
}

interface StyledProps {
  $width?: string;
  $length?: number;
  $selected?: boolean;
  $selectedIndex?: number;
}

function Tabs({ defaultIndex, labels, onChange, width }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex ?? 0);

  useEffect(() => {
    onChange(selectedIndex);
  }, [selectedIndex]);

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
  };

  const setSize = () => {
    if (width) {
      return `${width}px`;
    }
    return "100%";
  };

  return (
    <Container $width={setSize()}>
      {labels.map((label, index) => (
        <Item
          key={label}
          $length={labels.length}
          $selected={index === selectedIndex}
          onClick={() => handleSelectItem(index)}
        >
          {label}
        </Item>
      ))}
      <Indicator $length={labels.length} $selectedIndex={selectedIndex} />
    </Container>
  );
}

export default Tabs;

const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ $width }) => $width};
  height: 44px;
`;

const Item = styled.span<StyledProps>`
  width: ${({ $length }) => `calc(100% / ${$length})`};
  text-align: center;
  ${textStyles.body1.semiBold16};
  color: ${({ $selected }) => ($selected ? text[10] : text[40])};
  cursor: pointer;
  user-select: none;
`;

const Indicator = styled.div<StyledProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${line[30]};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $length }) => `calc(100% / ${$length})`};
    height: 100%;
    background-color: ${line[10]};
    transform: ${({ $selectedIndex }) =>
      `translate3d(calc(100% * ${$selectedIndex}), 0, 0);`};
    transition: 200ms ease-in-out;
    transition-property: transform;
  }
`;
