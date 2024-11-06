import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import type { Meta, StoryObj } from "@storybook/react";
import Progress from "@/components/Progress";
import { surface } from "@/styles/tokens/alias";
import { disableProperty } from "@/utils/storybook-control-util";
import { demo } from "@/assets/aws-s3-assets";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 110px);
  margin-top: 110px;
  overflow: scroll;
`;

const ScrollContent = styled.div`
  width: 100%;
  height: 500vh;
  background-color: ${surface[10]};
`;

const AppBar = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...disableProperty("present"),
    ...disableProperty("top"),
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    top: 0,
  },
  render: function Render(args) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [present, setPresent] = useState<number>(0);

    const handleProgress = () => {
      if (!scrollRef.current) return;

      const { scrollTop, scrollHeight, offsetHeight } = scrollRef.current;
      const scrollY = scrollTop || 0;
      const height = (scrollHeight || 0) - (offsetHeight || 0);

      setPresent((scrollY / height) * 100);
    };

    useEffect(() => {
      scrollRef.current?.addEventListener("scroll", handleProgress);

      return () => {
        scrollRef.current?.removeEventListener("scroll", handleProgress);
      };
    }, []);

    return (
      <Container>
        <AppBar src={demo.appBar} />
        <Progress {...args} present={present} top={110} />
        <ScrollContainer ref={scrollRef}>
          <ScrollContent></ScrollContent>
        </ScrollContainer>
      </Container>
    );
  },
};
