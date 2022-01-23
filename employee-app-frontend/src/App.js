import { useEffect, useReducer } from 'react';
import { AppContext } from './context'
import reducer from './reducer';
import initialState from './state';
import './styles/App.css';
import { getAllEmployees } from './actions';
import { Header, Loading } from './components';
import EmployeesList from './components/Employees/EmployeesList';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {

    getAllEmployees(dispatch)

  }, [])

  console.log(state)
  const { employees, loading } = state
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        {
          !loading && <EmployeesList list={employees} dispatch={dispatch} />
        }
        {
          loading && <Loading />
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;
