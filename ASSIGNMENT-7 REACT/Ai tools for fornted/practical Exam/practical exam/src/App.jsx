import SimpleCrud from "./component/Usestate/SimpleCrud"
import './App.css'
import EffectCrud from "./component/UseEffect/EffectCrud"
import ContextUse from "./component/useContext/ContextUse"
import Form from "./component/useContext/Form"
import Table from "./component/useContext/Table"
import CrudRef from "./component/UseRef/CrudRef"
import CallbackCrud from "./component/usecallback/CallbackCrud"
import MemoUse from "./component/usememo/MemoUse"
// import UserCrud from "./component/redux-crud/UserCrud"
import ReduxComponent from "./component/ReduxRtk crud/ReduxComponent"

function App(){
  return(
    <><hr />
    {/* <SimpleCrud /> */}
    <hr />
    {/* <EffectCrud /> */}
    <hr />
    {/* <ContextUse>
      <Form />
      <Table />
    </ContextUse> */}

    <hr />
    {/* <CrudRef /> */}
    <hr />
    {/* <CallbackCrud /> */}
    <hr />
    {/* <MemoUse /> */}
    <hr />
    {/* <UserCrud /> */}
    <hr />
    <ReduxComponent />

    </>
  )
}
export default App