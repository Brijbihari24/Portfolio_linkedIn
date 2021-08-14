import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Row, Col, Container } from 'reactstrap'
import Section from './Sections/section';
import Header from "./Layout/header"
import Projects from "./Sections/projects"
import ContentCreation from "./Sections/contentCreation"
import About from './Pages/about';
import Sayings from "./Sections/sayings"
import Form from './Pages/form';
import RecentBlogs from './Sections/recentBlogs';
import Footer from './Layout/footer';

const App = () => {

  const [state, setstate] = useState(initialState)
  
  return (
    <div>
      <Header />
      <Section />
      <Projects />
      <ContentCreation />
      <About />
      <Sayings />
      <Form />
      <RecentBlogs />
      <Footer />
    </div>

  );
}

export default App;
