import React from 'react';
import { ReactTable } from './components/react-table/react-table';
import { ThemeWrapper } from './components/theme-wrapper/theme-wrapper';
import { useInlineEdit } from './components/react-table/use-inline-edit';

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  { Header: "Description", accessor: "description" },
  { Header: "Hans", accessor: "hans" },
];
const tableData = [
  {
    id: "1",
    name: "Hubert",
    description: "Test Analysis description",
    hans: "Second Test description",
  },
  {
    id: "2",
    name: "F",
    description: "Second Test description",
    hans: "Second Test description",
  },
  {
    id: "3",
    name: "G",
    description: "Third Test description",
    hans: "Third Test description",
  },
  {
    id: "4",
    name: "4",
    description: "Forth Test description",
    hans: "Forth Test description",
  },
  {
    id: "5",
    name: "C",
    description: "Fifth Test description",
    hans: "Fifth Test description",
  },
  {
    id: "6",
    name: "D",
    description: "Sixth description",
    hans: "Sixth description",
  },
  {
    id: "7",
    name: "B",
    description: "Seventh description",
    hans: "Seventh description",
  },
  { id: "8", name: "2", description: "15", hans: "15" },
  { id: "9", name: "3", description: "10", hans: "10" },
  { id: "10", name: "1", description: "159", hans: "159" },
];

const MYComponent = () => {
  const { data } = useInlineEdit({
    tableData,
  });
  return <ReactTable columns={columns} data={data} pageSize={10} />;
};

const App: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <MYComponent />
    </ThemeWrapper>
  );
};
export default App;