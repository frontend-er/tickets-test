import { ReactNode } from 'react';
import {
  ChildrenComponetWrapper,
  LabelHolder,
  TableMultipleWrapper,
  TableRow,
} from './Table.styled';

interface Props {
  rows: {
    label: string;
    children: ReactNode;
  }[];
}

export const TableMultiple = ({ rows }: Props) => {
  const separatedRows = rows.map((i) => {
    return (
      <TableRow key={i.label}>
        <LabelHolder>{i.label}</LabelHolder>
        <ChildrenComponetWrapper>{i.children}</ChildrenComponetWrapper>
      </TableRow>
    );
  });
  return <TableMultipleWrapper>{separatedRows}</TableMultipleWrapper>;
};
