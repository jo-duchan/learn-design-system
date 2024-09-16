import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import Icons from "@/styles/iconography";
import { icon } from "@/styles/tokens/alias";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Checkbox(props: Props) {
  const { register } = useFormContext();
  return (
    <Container>
      <input
        type="checkbox"
        {...register(props.name, { required: props.required })}
      />
      <CheckIconWrapper className="checkbox">
        <Icons.check />
      </CheckIconWrapper>
    </Container>
  );
}

export default Checkbox;

const Container = styled.div`
  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"]:checked ~ .checkbox {
    & svg path {
      fill: ${icon.accent};
    }
  }
`;

const CheckIconWrapper = styled.div`
  width: 24px;
  height: 24px;

  & svg path {
    fill: ${icon[30]};
    transition: fill 200ms ease-in-out;
  }
`;
