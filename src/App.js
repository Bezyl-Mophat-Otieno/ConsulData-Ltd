import './App.css';
import { GlobalContext } from './Components/Context/GlobalProvider';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import CoursesFetched from './Components/LandingPageComponents/CoursesFetched';
import SharedLayoutMain from './Components/SharedLayoutMain';
import CourseCategory from './Components/LandingPageComponents/CourseCategory';
import { useContext, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';
import SharedLayoutStudentDashboard from './Components/SharedLayoutStudentDashboard';
import SideBar from './Components/StudentDashboard/SideBar';
import BlogPage from './Pages/blogPage/BlogPage';
import LandingPage from './Pages/landingpage/LandingPage';
import About from './Pages/aboutpage/About';
import LearnerDashboard from './Pages/LearnerDashboard/LearnerDashboard';
import Single from './Pages/singleCourse/Single';
import Cart from './Components/StudentDashboard/Cart';
import CompleteB from './Components/completeBlog/CompleteB';

function App() {
 const {learner } = useContext(GlobalContext)


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayoutMain user={learner} />} >
               <Route index element={<LandingPage/>}/>
               <Route path='/blogs' >
               <Route index element={<BlogPage/>}/>
               <Route path='/blogs/singleblog' element={<CompleteB/>}/>
               </Route>
               <Route path='/about' element={<About/>}/>
               <Route path='/cart' element={<Cart/>} />
               <Route path='courses' >
                  <Route index element={<CoursesFetched/>}/>
                  <Route path='/courses/course'>
                  <Route path=':courseName' element={<Single/>} />
                  </Route>
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
