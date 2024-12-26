/*
// 1_Context Api
import React from 'react'
import Consumer from './1_ContextApi/Consumer'

const App = () => {
  return (
    <div>
      <Consumer/>
    </div>
  )
}

export default App
*/


/*
// 2.HOC
import React from 'react'
import Nav from './2_HOC/Nav'
import Hoc from './2_HOC/Hoc'
const App = (props) => {

  return (
    <div>
        {props.data}
        <Nav/>
    </div>
  )
}

export default Hoc(App)
*/



/*
// 3_Bidirectional(Not recommended)
// It will affect the react algorithms
import React from 'react'
import Nav from './3_Unidirectional/Nav'

const App = () => {
  let handlesubmit=()=>
  {
    alert("hello app triggered")
  }
  return (
    <div>
      <Nav data={handlesubmit}/>
    </div>
  )
}

export default App
*/

/*
// 4.Outlet
import React from 'react'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import MainPage from './4_Outlet/MainPage'
import Page1 from './4_Outlet/Page1'
import Page2 from './4_Outlet/Page2'
import Page3 from './4_Outlet/Page3'

const App = () => {
  return (
    <div>
      <Routers>
        <Routes>
          <Route path="/mainpage" element={<MainPage/>}> 
            <Route path='/mainpage/page1' element={<Page1/>}/>
            <Route path='/mainpage/page2' element={<Page2/>}/>
            <Route path='/mainpage/page3' element={<Page3/>}/>
          </Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App
*/

/*
//5.Search field 
import React from 'react'
import Search from './5_search_field/Search'

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  )
}

export default App
*/

/*
// 6.Weather application
import React from 'react'
import WeatherApp from './6_Weather_App/WeatherApp'

const App = () => {
  return (
    <div><WeatherApp/></div>
  )
}

export default App
*/


// axios
import React from 'react'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import Viewer from './7_CRUD_w_JSON/Viewer'
import Create from './7_CRUD_w_JSON/Create'
import Update from './7_CRUD_w_JSON/Update'

const App = () => {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<Viewer/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </Routers>
  )
}

export default App