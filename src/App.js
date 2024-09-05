// // import React from 'react'
// // import './App.css'
// // import Header from './Header'
// // import Sidebar from './Sidebar'
// // import Content from './Content';
// // import Footer from './Footer';

// // function App() {
// //   return (
// //     <div>
// //       <div align="center">
// //         <Header/>
// //       </div>
// //       <div>
// //         <Sidebar/>
// //       </div>
// //       <div align ="center">
// //         <Content title = "Content EIei"/>
// //       </div>
// //       <div align="center">
// //         <Footer title = "Footer EIEI"/>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App
// // import React,{useState} from 'react'

// // function App() {
// //   const name = "Achirawich"
// //   const empty = 0;
// //   const [data,setData] = useState(0);
// //   const [data1,setData1] = useState([]);
// //   function addData(){
// //     setData([...data1,{
// //       value: Math.random()
// //     }])
// //   }
// //   return (
// //     <div>
// //       <div>
// //         <button onClick={addData}>
// //           Add data
// //         </button>
// //         <ul>
// //           {
// //             data1.nap(item => (<li>{item.value}</li>))
// //           }
// //         </ul>
// //       </div>
// //       <p>
// //         ข้อมูลปัจจุบัน : {data}
// //       </p>
// //       <button onClick={() => setData(data + 1)}>Plus</button>
// //       <button onClick={() => setData(data * 3)}>Time</button>
// //       <button onClick={() => setData(data - 1)}>Minus</button>
// //       <button onClick={() => setData(data / 3)}>Divind</button>
// //       <button onClick={() => setData(data ** data)}>Explonansion</button>
// //       <button onClick={() => setData(name)}>Name</button>
// //       <button onClick={() => setData(empty)}>Clear</button>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import {browserRouter,Route,Routes,Link, BrowserRouter} from 'react-router-dom'
// import Home from './components/Home'
// import Webboard from './components/Webboard'
// import Contactus from './components/Contactus'
// import Urlnotfound from './components/Urlnotfound'
// import Linkk from './components/Linkk'
// import './App.css'

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">First page</Link>
//           </li>
//           <li>
//             <Link to="/Webboard">Webboard</Link>
//           </li>
//           <li>
//             <Link to="/Contactus">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/Linkk">Linkk</Link>
//           </li>
//         </ul>
//         <div>
//           <Routes>
//             <Route exact path="/" Component={Home}/>
//             <Route exact path="/Webboard" Component={Webboard}/>
//             <Route exact path="/Contactus" Component={Contactus}/>
//             <Route exact Component={Urlnotfound}/>
//             <Route exact path="/Linkk" Component={Linkk}/>
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

// import React,{ useState} from 'react'
// import  Toast  from 'react-bootstrap/Toast'
// import  Container  from 'react-bootstrap/Container'
// import  BasicButton  from './components/BasicButton'
// import  BasicToast from './components/BasicToast';
// import {browserRouter,Route,Routes,Link, BrowserRouter} from 'react-router-dom'
// import Home from './components/Home'
// import Webboard from './components/Webboard'
// import Contactus from './components/Contactus'
// import Urlnotfound from './components/Urlnotfound'
// import Linkk from './components/Linkk'

// const ExampleToast = ({ Children }) => {
//   const [show,toggleShow] = useState(true);
//   return (
//     <Toast show={show} onClose={() => toggleShow(!show)}>
//               <Toast.Header>
//                   <strong className='mr-auto'>Bootstrap na</strong>
//               </Toast.Header>
//               <Toast.Body>{Children}</Toast.Body>
//         </Toast>
//   );
// };
// const App = () => (
//   <><Container className='p-3'>
//     <Container className='p-5 mb-d bg-light rounded-3'>
//       <h1 className='header'>This is a bootstrap</h1>
//       <ExampleToast>
//         <p>HEEHEEE</p>
//       </ExampleToast>
//       <BasicToast />
//     </Container><br></br>
//     <BasicButton />
//   </Container><BrowserRouter>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">First page</Link>
//           </li>
//           <li>
//             <Link to="/Webboard">Webboard</Link>
//           </li>
//           <li>
//             <Link to="/Contactus">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/Linkk">Linkk</Link>
//           </li>
//         </ul>
//         <div>
//           <Routes>
//             <Route exact path="/" Component={Home} />
//             <Route exact path="/Webboard" Component={Webboard} />
//             <Route exact path="/Contactus" Component={Contactus} />
//             <Route exact Component={Urlnotfound} />
//             <Route exact path="/Linkk" Component={Linkk} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter></>
// )

// export default App
// import React, {Component} from "react";
// import UserForm from './components/UserForm'
// import './App.css'

// class App extends Component {
//   render(){
//     return(
//       <div class="container"> 
//         <UserForm/>
//       </div>
//     )
//   }
// }
// export default App;
import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import CreateStudent from "./Components/create-student.component";
import EditStudent from "./Components/edit-student.component";
import StudentList from "./Components/student-list.component";

// App Component
const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/create-student"}
                                    className="nav-link">
                                    React MERN Stack App
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-student"}
                                        className="nav-link">
                                        Create Student
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={"/student-list"}
                                        className="nav-link">
                                        Student List
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Switch>
                                    <Route exact path="/"
                                        component={CreateStudent} />
                                    <Route path="/create-student"
                                        component={CreateStudent} />
                                    <Route path="/edit-student/:id"
                                        component={EditStudent} />
                                    <Route path="/student-list"
                                        component={StudentList} />
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;