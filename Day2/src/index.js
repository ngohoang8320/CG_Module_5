import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//     <App /*headerProp="Header from props..." contentProp="Content from props..."*/ />
//   </React.Fragment>
// );

/* // const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ] */


const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  root.render(
    /* // <div>
    //   <h1>Hello, world!</h1>
    //   <h2>It is {new Date().toLocaleTimeString()}.</h2>
    // </div> */


    /* // <h4>Browser's details: {navigator.userAgent}</h4> */

    /* // <table>
    //   {students.map(student => (
    //     <tr>
    //       <td>{student.company}</td>
    //       <td>{student.contact}</td>
    //       <td>{student.country}</td>
    //     </tr>
    //   ))}
    // </table> */

  );
};

setInterval(tick, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
