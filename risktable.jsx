// Import the necessary components
import ForgeUI, { render, Fragment, Table, Row, Cell } from '@forge/ui';

// Define the data for the risk table
const risks = [
  { id: 1, name: 'Low Risk', description: 'Minor impact, easily manageable' },
  { id: 2, name: 'Medium Risk', description: 'Moderate impact, may require attention' },
  { id: 3, name: 'High Risk', description: 'Significant impact, urgent action needed' },
];

// Define the RiskTable component
const RiskTable = () => {
  return (
    <Fragment>
      <Table>
        <Row>
          <Cell>
            <strong>ID</strong>
          </Cell>
          <Cell>
            <strong>Risk Name</strong>
          </Cell>
          <Cell>
            <strong>Description</strong>
          </Cell>
        </Row>
        {risks.map((risk) => (
          <Row key={risk.id}>
            <Cell>{risk.id}</Cell>
            <Cell>{risk.name}</Cell>
            <Cell>{risk.description}</Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};

// Render the RiskTable component
const App = () => {
  return (
    <Fragment>
      <RiskTable />
    </Fragment>
  );
};

// Export the main App component
export const run = render(<App />);
