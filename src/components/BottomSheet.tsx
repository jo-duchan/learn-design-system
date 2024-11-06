import {
  FieldValues,
  FormProvider,
  useFormContext,
  useForm,
  useWatch,
} from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";
import { surface, text, icon } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Icons from "@/styles/iconography";
import Checkbox from "@/components/Checkbox";

type BottomSheetType = "default" | "option";

interface BaseProps {
  title: string;
  isShow: boolean;
  onClose: () => void;
}

interface BaseInjectedProps {
  type: BottomSheetType;
}

function BottomSheetContainer<P extends BaseInjectedProps>(
  Component: React.ComponentType<P>,
  type: BottomSheetType
): React.FC<Omit<P, keyof BaseInjectedProps> & BaseProps> {
  return ({ isShow = false, ...props }) => {
    return (
      <CSSTransition in={isShow} timeout={300} unmountOnExit>
        <BaseContainer>
          <BaseHeader>
            <BaseTitle>{props.title}</BaseTitle>
            <CloseButton onClick={props.onClose}>
              <Icons.close />
            </CloseButton>
          </BaseHeader>
          <ContentWrapper $type={type}>
            <Component {...(props as unknown as P)} />
          </ContentWrapper>
        </BaseContainer>
      </CSSTransition>
    );
  };
}

const Transition = css`
  transition: 300ms ease-in-out;
  transition-property: transform, opacity;
  transform: ${`translate3d(-50%, 100%, 0)`};

  &[class*="enter-"] {
    transform: ${`translate3d(-50%, 0, 0)`};
  }

  &[class*="exit-"] {
    transform: ${`translate3d(-50%, 100%, 0)`};
  }
`;

const BaseContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding-block: 24px 0;
  padding-inline: 24px;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  background-color: ${surface[20]};
  ${Transition};
`;

const BaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BaseTitle = styled.h2`
  ${textStyles.title2.bold18};
  color: ${text[10]};
`;

const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;

  & svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${icon[10]};
    }
  }
`;

const ContentWrapper = styled.div<{ $type: BottomSheetType }>`
  padding-block: 0 24px;
  box-sizing: border-box;
  height: fit-content;
  ${({ $type }) =>
    $type === "default"
      ? css`
          min-height: 118px;
          max-height: 402px;
        `
      : css`
          min-height: 96px;
          max-height: 262px;
        `}
  overflow: hidden auto;
`;

interface DefaultItem {
  imgUrl: string;
  title: string;
  description: string;
  path: string;
}

interface DefaultProps extends BaseInjectedProps {
  list: DefaultItem[];
}

function Default(props: DefaultProps) {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.remove();
  };

  return (
    <DefaultContainer>
      {props.list.map((item, index) => (
        <DefaultItem key={`${item.title}-${index}`}>
          <DefaultItemImage>
            <img
              src={item.imgUrl}
              alt={`${item.title}의 썸네일`}
              onError={handleImgError}
            />
          </DefaultItemImage>
          <DefaultItemTextWrapper>
            <DefaultItemTitle>{item.title}</DefaultItemTitle>
            <DefaultItemDescription>{item.description}</DefaultItemDescription>
          </DefaultItemTextWrapper>
        </DefaultItem>
      ))}
    </DefaultContainer>
  );
}

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DefaultItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
`;

const DefaultItemImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${surface[30]};

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DefaultItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const DefaultItemTitle = styled.h4`
  ${textStyles.body1.bold16};
  color: ${text[20]};
`;

const DefaultItemDescription = styled.p`
  ${textStyles.body2.regular14};
  color: ${text[30]};
`;

interface OptionItem {
  label: string;
  name: string;
  defaultValue?: boolean;
}

function OptionItem(props: OptionItem) {
  const { control } = useFormContext();

  const itemValue = useWatch({
    control,
    name: props.name,
  });
  return (
    <OptionItemContainer>
      <OptionItemLabel $checked={itemValue}>
        {props.label}
        <Checkbox name={props.name} checked={props.defaultValue} />
      </OptionItemLabel>
    </OptionItemContainer>
  );
}

const OptionItemContainer = styled.div`
  padding-block: 12px;
  box-sizing: border-box;
`;

const OptionItemLabel = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${textStyles.body1.regular16};
  color: ${({ $checked }) => ($checked ? text.primary : text[30])};
  transition: color 200ms ease-in-out;
  cursor: pointer;
  user-select: none;
`;

interface OptionProps extends BaseInjectedProps {
  list: OptionItem[];
}

function Option(props: OptionProps) {
  const methods = useForm<FieldValues>();

  return (
    <FormProvider {...methods}>
      <OptionContainer
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      >
        {props.list.map((item) => (
          <OptionItem key={item.name} {...item} />
        ))}
      </OptionContainer>
    </FormProvider>
  );
}

const OptionContainer = styled.form``;

const BottomSheet = {
  Default: BottomSheetContainer(Default, "default"),
  Option: BottomSheetContainer(Option, "option"),
};

export default BottomSheet;
