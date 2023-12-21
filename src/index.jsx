import ForgeUI, { Table, Head, Row, Cell, Button, AdminPage, IssueActivity, ModalDialog, IssueAction, IssueGlance, useProductContext, IssuePanel, render, ProjectPage, Fragment, Text, useState, router } from '@forge/ui';
import api, { route } from '@forge/api'; // Fixed the import statement for 'route'

// // Define the risk levels
// const severityLevels = ['Marginal', 'Minor', 'Moderate', 'Serious', 'Catastrophic'];
// const probabilityLevels = ['Unlikely', 'Rare', 'Occasional', 'Likely', 'Frequent'];

// // Create the risk matrix data
// const riskMatrixData = [
//   [1, 2, 4, 6, 8],
//   [2, 4, 6, 8, 10],
//   [4, 6, 8, 10, 12],
//   [6, 8, 10, 12, 14],
//   [8, 10, 12, 14, 16]
// ];

// const RiskMatrix = () => {
//   const cellStyle = (risk) => {
//     if (risk <= 16) {
//       return { backgroundColor: 'yellow' };
//     } else {
//       return { backgroundColor: 'red' };
//     }
//   };

//   return (
//     <Table>
//       <Head>
//         <Cell><Text>Probability / Severity</Text></Cell>
//         {severityLevels.map((severity, index) => (
//           <Cell key={index}><Text>{severity}</Text></Cell>
//         ))}
//       </Head>
//       {probabilityLevels.map((probability, rowIndex) => (
//         <Row key={rowIndex}>
//           <Cell><Text>{probability}</Text></Cell>
//           {riskMatrixData[rowIndex].map((item, index) => (
//             <Cell key={index} style={cellStyle(item)}>
//               <Text>{item}</Text>
//             </Cell>
//           ))}
//         </Row>
//       ))}
//     </Table>
//   );
// };

// export const run = render(
//   <ProjectPage>
//     <RiskMatrix />
//   </ProjectPage>
// );

// const NextPage = () => {
//     return (
//         <Fragment>
//             <Text>This is the next page.</Text>
//         </Fragment>
//     );
// };

// const App = () => {
//     const handleClick = async (page) => {
//         await router.navigate(page); // Navigate to the specified 'page'
//     };

//     return (
//         <Fragment>
//             <Table>
//                 <Head>
//                     <Cell>
//                         <Text>List of existing risk management projects</Text>
//                     </Cell>
//                 </Head>
//                 <Row onClick={() => handleClick('next-page')}>
//                     <Cell>
//                         <Text>Hardware</Text>
//                     </Cell>
//                 </Row>
//                 <Row onClick={() => handleClick('next-page')}>
//                     <Cell>
//                         <Text>Software</Text>
//                     </Cell>
//                 </Row>
//             </Table>
//             <Button text="Create new risk management project" onClick={() => handleClick('/Users/fotofinder/Desktop/First-App/risktable.jsx')} />
//             <Button text="Create risk management project from existing Jira project" />
//         </Fragment>
//     );
// };

// export const run = render(
//     <ProjectPage>
//         <App />
//     </ProjectPage>
// );


const Page = () => {
    const [redirectToRiskMatrix, setRedirectToRiskMatrix] = useState(false);
  
    if (redirectToRiskMatrix) {
      return <Redirect to="/Users/fotofinder/Desktop/First-App/riskmatrix.jsx" />;
    }
  
    return (
      <ForgeUI>
        <Button
          text="Go to Risk Matrix"
          onClick={() => setRedirectToRiskMatrix(true)}
        />
      </ForgeUI>
    );
  };
  
  export default Page;
  

const Panel = () =>{
    const{platformContext: {issueKey}}= useProductContext();
    return(
        <Fragment>
            <Text> Something about this issue: {issueKey} </Text>
        </Fragment>
    )
}

export const panel = render(
   <IssuePanel>
     < Panel />
   </IssuePanel>
);

export const glance = render(
    <IssueGlance>
        <Fragment>
            <Text> Information about this issue </Text>
        </Fragment>
    </IssueGlance>
)

const Action = () =>{
    const [isVisible, setVisible] = useState(true);
    if(isVisible){
        return(
           <ModalDialog closeButtonText= "Do It!" header= "My Action" onClose={()=> setVisible(false)} >
             <Text>We will perform an action</Text>
           </ModalDialog>
    )
    } else{
        console.log("Performing the action");
        return null;
    }
}

export const action = render (
   <IssueAction>
      <Action/>
   </IssueAction>
)

export const activity = render(
    <IssueActivity>
        <Fragment>
            <Text> Some Text</Text>
        </Fragment>
    </IssueActivity>
)

export const validate = async ({issue}) => {
    console.log("Validator invoked");
}

export const admin = render(
    <AdminPage>
        <Fragment>
            <Text>Some admin text </Text>
        </Fragment>
    </AdminPage>
)

export async function trigger(event, context) {
    console.log("Event trigerred");
}



// const App = () => {
//     const context = useProductContext();
//     console.log(JSON.stringify(context));



//     const [numIssues] = useState(async () => await fetchNumberOfIssues());

//     return (
//         <Fragment>
//             <Text> Number of Issues: {numIssues} </Text>
//         </Fragment>
//     );
// };

// export const run = render(
//     <ProjectPage>
//         <App />
//     </ProjectPage>
// );