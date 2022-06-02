import { ReactNode } from 'react';
import { ChildrenWrapper, LabelHolder, TablenWrapper } from './Table.styled';

interface Props {
  label: string;
  children: ReactNode;
}

export const Table = ({ label, children }: Props) => {
  return (
    <TablenWrapper>
      <LabelHolder>{label}</LabelHolder>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </TablenWrapper>
  );
};
