import './App.css';
import { GlobalContext } from './Components/Context/GlobalProvider';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import CoursesFetched from './Components/LandingPageComponents/CoursesFetched';
import SearchResults from './Components/LandingPageComponents/SearchResults';
import SharedLayoutMain from './Components/SharedLayoutMain';
import CourseCategory from './Components/LandingPageComponents/CourseCategory';
import { useContext, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';
import ContentLearnerDashboard from './Components/StudentDashboard.jsx/ContentLearnerSB';
import SharedLayoutStudentDashboard from './Components/SharedLayoutStudentDashboard';
import SideBar from './Components/StudentDashboard.jsx/SideBar';
import LearnerDashboard from './Pages/LearnerDashboard';
import BlogPage from './Pages/blogPage/BlogPage';
import LandingPage from './Pages/landingpage/LandingPage';
import About from './Pages/aboutpage/About';
function App() {
 const {learner } = useContext(GlobalContext)


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayoutMain user={learner} />} >
               <Route index element={<LandingPage/>}/>
               <Route path='/blog' element={<BlogPage/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='courses' >
                  <Route index element={<CoursesFetched/>}/>
                  <Route path=':searchTerm' element={<SearchResults/>} />
                  <Route path='category' >
                    <Route path=':categoryType' element={<CourseCategory/>} />
                  </Route>
               </Route> 
          </Route>
      <Route path='/dashboard' element={< SharedLayoutStudentDashboard/>}>
                <Route path='learner' user={learner} element={   
              <ProtectedRoute user={learner}>
                 <SideBar>
                  <LearnerDashboard/>
                 </SideBar>
              </ProtectedRoute> }/>
      </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
