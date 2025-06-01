
import './App.css'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
  

  return (
    
    <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <Dashboard/>
            </div>
        </div>
    
  )
}

export default App
