import ForgeUI, { ProjectPage, Table, Head, Row, Cell, Text, render } from '@forge/ui';

// Define the risk levels
const severityLevels = ['Marginal', 'Minor', 'Moderate', 'Serious', 'Catastrophic'];
const probabilityLevels = ['Unlikely', 'Rare', 'Occasional', 'Likely', 'Frequent'];

// Create the risk matrix data
const riskMatrixData = [
  [1, 2, 4, 6, 8],
  [2, 4, 6, 8, 10],
  [4, 6, 8, 10, 12],
  [6, 8, 10, 12, 14],
  [8, 10, 12, 14, 16]
];

const RiskMatrix = () => {
  const cellStyle = (risk) => {
    if (risk <= 16) {
      return { backgroundColor: 'yellow' };
    } else {
      return { backgroundColor: 'red' };
    }
  };

  return (
    <Table>
      <Head>
        <Cell><Text>Probability / Severity</Text></Cell>
        {severityLevels.map((severity, index) => (
          <Cell key={index}><Text>{severity}</Text></Cell>
        ))}
      </Head>
      {probabilityLevels.map((probability, rowIndex) => (
        <Row key={rowIndex}>
          <Cell><Text>{probability}</Text></Cell>
          {riskMatrixData[rowIndex].map((item, index) => (
            <Cell key={index} style={cellStyle(item)}>
              <Text>{item}</Text>
            </Cell>
          ))}
        </Row>
      ))}
    </Table>
  );
};

export const run = render(
  <ProjectPage>
    <RiskMatrix />
  </ProjectPage>
);
