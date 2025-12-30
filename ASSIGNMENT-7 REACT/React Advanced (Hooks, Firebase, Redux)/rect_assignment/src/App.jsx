import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/*==========Home======================*/ 
import Home from "./pages/Home/Home";

/* ================= HOOKS ================= */
import HooksLayout from "./pages/Hooks/HooksLayout";
import HooksTask1 from "./pages/Hooks/Task1";
import HooksTask2 from "./pages/Hooks/Task2";
import HooksTask3 from "./pages/Hooks/Task3";
import HooksTask4 from "./pages/Hooks/Task4";

/* ================= ROUTER ================= */
import RouterLayout from "./pages/Router/RouterLayout";

/* Project 1 */
import Project1Layout from "./pages/Router/Project1/Project1Layout";
import Project1Home from "./pages/Router/Project1/Home";
import Project1About from "./pages/Router/Project1/About";

/* Project 2 */
import Project2Layout from "./pages/Router/Project2/Project2Layout";
import Project2Home from "./pages/Router/Project2/Home";
import Project2About from "./pages/Router/Project2/About";
import Project2Contact from "./pages/Router/Project2/Contact";

/* ================= FIREBASE ================= */
import FirebaseLayout from "./pages/Firebase/FirebaseLayout";
import FirebaseTask1 from "./pages/Firebase/Task1/FirebaseTask1";
import FirebaseTask21 from "./pages/Firebase/Task1/FirebaseTask21";
import FirebaseTask2 from "./pages/Firebase/Task2/FirebaseTask2";
import FirebaseTask3 from "./pages/Firebase/Task3/FirebaseTask3";
import FirebaseLayoutTask1 from "./pages/Firebase/Task1/FirebaseLayoutTask1";

/* ================= CONTEXT ================= */
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import ContextLayout from "./pages/ContextTasks/ContextLayout";

/* Context Task 1 */
import ContextTask1Layout from "./pages/ContextTasks/Task1/ContextTask1Layout";
import ThemeToggle from "./pages/ContextTasks/Task1/ThemeToggle";
import ThemedBox from "./pages/ContextTasks/Task1/ThemedBox";

/* Context Task 2 */
import ContextTask2Layout from "./pages/ContextTasks/Task2/ContextTask2Layout";
import Login from "./pages/ContextTasks/Task2/Login";
import Welcome from "./pages/ContextTasks/Task2/Welcome";

/* ================= REDUX + RECOIL ================= */
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReduxLayout from "./pages/ReduxTasks/ReduxLayout";
import Counter from "./pages/ReduxTasks/Task1/Counter";
import CrudPage from "./pages/ReduxTasks/Task3/CrudPage";

/* ================= LIFECYCLE ================= */
import LifecycleLayout from "./pages/Lifecycle/LifecycleLayout";
import UserList from "./pages/Lifecycle/Task1/UserList";
import LifecycleDemo from "./pages/Lifecycle/Task2/LifecycleDemo";

/*===============FORMS==========================*/
import FormsLayout from "./pages/Forms/FormsLayout";
import Task1Form from "./pages/Forms/Task1Form";
import Task2Form from "./pages/Forms/Task2Form";

/*===========List-Key===========================*/
import ListKeyLayout from "./pages/List-key/ListKeyLayout";
import Friutmap from "./pages/List-key/Friutmap";
import UserList1 from "./pages/List-key/UserList1";

/*=============Conditional-Rendring==================*/
import ConditionalRendring from './pages/conditional-rendring/ConditionalRendring'
import LoginLogout from "./pages/conditional-rendring/LoginLogout";
import VotingEligibility from "./pages/conditional-rendring/VotingEligibility";

/*=================Handle-Event==================================*/
import HandlingEventLayout from "./pages/Handling-Event/HandlingEventLayout";
import ButtonClick from "./pages/Handling-Event/ButtonClick";
import LiveInput from "./pages/Handling-Event/LiveInput";

const App = () => {
  return (
    <Provider store={store}>
        <ThemeProvider>
          <UserProvider>
            <Navbar />
            <Routes>
              {/* HOME */}
              <Route path="/" element={<Home />} />

              {/* HOOKS */}
              <Route path="/hooks" element={<HooksLayout />}>
                <Route index element={<HooksTask1 />} />
                <Route path="task1" element={<HooksTask1 />} />
                <Route path="task2" element={<HooksTask2 />} />
                <Route path="task3" element={<HooksTask3 />} />
                <Route path="task4" element={<HooksTask4 />} />
              </Route>

              {/* ROUTER */}
              <Route path="/router" element={<RouterLayout />}>
                <Route path="project1" element={<Project1Layout />}>
                  <Route index element={<Project1Home />} />
                  <Route path="home" element={<Project1Home />} />
                  <Route path="about" element={<Project1About />} />
                </Route>

                <Route path="project2" element={<Project2Layout />}>
                  <Route index element={<Project2Home />} />
                  <Route path="home" element={<Project2Home />} />
                  <Route path="about" element={<Project2About />} />
                  <Route path="contact" element={<Project2Contact />} />
                </Route>
              </Route>

              {/* FIREBASE */}
              <Route path="/firebase" element={<FirebaseLayout />}>
                <Route path="task1" element={<FirebaseLayoutTask1 />}>
                  <Route index element={<FirebaseTask1 />} />
                  <Route path="crud" element={<FirebaseTask21 />} />
                </Route>
                <Route path="task2" element={<FirebaseTask2 />} />
                <Route path="task3" element={<FirebaseTask3 />} />
              </Route>

              {/* CONTEXT */}
              <Route path="/context" element={<ContextLayout />}>
                <Route path="task1" element={<ContextTask1Layout />}>
                  <Route index element={<> <ThemeToggle /><ThemedBox /></>}/>
                </Route>

                <Route path="task2" element={<ContextTask2Layout />}>
                  <Route index element={<><Login /><Welcome /></> } />
                </Route>
              </Route>

              {/* REDUX TASKS */}
              <Route path="/redux" element={<ReduxLayout />}>
                <Route path="task1" element={<Counter />} />
                <Route path="task3" element={<CrudPage />} />
              </Route>

              {/* LIFECYCLE */}
                <Route path="/lifecycle" element={<LifecycleLayout />}>
                  <Route index element={<UserList />} />
                  <Route path="task1" element={<UserList />} />
                  <Route path="task2" element={<LifecycleDemo />} />
                </Route>   

                {/* Forms */}
                <Route path="/forms" element={<FormsLayout />}>
                <Route path="task1" element={<Task1Form />} />
                <Route path="task2" element={<Task2Form />} />
                </Route>

                {/* List-Key */}
                <Route path="/listkeylayout" element={<ListKeyLayout />}>
                <Route path="task1" element={<Friutmap />}  />
                <Route path="task1" element={<Friutmap />}  />
                <Route path="task2" element={<UserList1 />}  />
                </Route>

                {/* Conditional-Rendring */}
                <Route path="/conditionalrendring" element={<ConditionalRendring />}>
                <Route path="task1" element={<LoginLogout />} />
                <Route path="task2" element={<VotingEligibility />} />
                </Route>

                {/* Handling-Event */}
                <Route path="/handlingeventlayout" element={<HandlingEventLayout />} >
                <Route path="task1" element={<ButtonClick />} />
                <Route path="task2" element={<LiveInput />} />
                </Route>
                
            </Routes>

          </UserProvider>
        </ThemeProvider>
      {/* </RecoilRoot> */}
    </Provider>
  );
};

export default App;
