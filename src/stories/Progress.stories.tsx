import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import type { Meta, StoryObj } from "@storybook/react";
import Progress from "@/components/Progress";
import { surface } from "@/styles/tokens/alias";
import { disableProperty } from "@/utils/storybook-control-util";

const ScrollContainer = styled.div`
  width: 360px;
  height: 500px;
  overflow: scroll;
`;

const ScrollContent = styled.div`
  width: 100%;
  height: 500vh;
  background-color: ${surface[30]};
`;

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    ...disableProperty("present"),
    ...disableProperty("width"),
    ...disableProperty("top"),
    ...disableProperty("left"),
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    width: 360,
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
      <ScrollContainer ref={scrollRef}>
        <ScrollContent>
          <Progress {...args} top={16} left={16} present={present} />
        </ScrollContent>
      </ScrollContainer>
    );
  },
};
