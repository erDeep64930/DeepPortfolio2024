import {Header, Footer} from "./components/index";
import {Home,About,Project,Contact, Service} from "./pages/index"


const App = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <Header/>
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App