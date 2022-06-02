import {
  AssignerImgWrapper,
  DateWrapper,
  DescriptionWrapper,
  TextWrapper,
  TitleWrapper,
  TopRowContainer,
} from './Description.styled';

interface Props {
  title: string;
  date: string;
  description: string;
  asigner: string;
  onClick?: () => void;
}

export const Description = ({ title, date, description, asigner }: Props) => {
  return (
    <DescriptionWrapper>
      <TopRowContainer>
        <div>
          <TitleWrapper>{title}</TitleWrapper>
          <DateWrapper>{date}</DateWrapper>
          <TextWrapper>{description}</TextWrapper>
        </div>
        <AssignerImgWrapper>
          <img src={asigner} alt='assigner' />
        </AssignerImgWrapper>
      </TopRowContainer>
    </DescriptionWrapper>
  );
};
