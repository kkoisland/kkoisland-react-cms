import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, YearList, BlogDetail } from './components';
import './styles/global.scss';
import './styles/utils/utils.scss';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<YearList year="2018" />} />
        <Route path="/2005" element={<YearList year="2005" />} />
        <Route path="/2006" element={<YearList year="2006" />} />
        <Route path="/2007" element={<YearList year="2007" />} />
        <Route path="/2008" element={<YearList year="2008" />} />
        <Route path="/2009" element={<YearList year="2009" />} />
        <Route path="/2010" element={<YearList year="2010" />} />
        <Route path="/2011" element={<YearList year="2011" />} />
        <Route path="/2012" element={<YearList year="2012" />} />
        <Route path="/2013" element={<YearList year="2013" />} />
        <Route path="/2014" element={<YearList year="2014" />} />
        <Route path="/2015" element={<YearList year="2015" />} />
        <Route path="/2016" element={<YearList year="2016" />} />
        <Route path="/2017" element={<YearList year="2017" />} />
        <Route path="/2018" element={<YearList year="2018" />} />
        <Route path="/blog/:year/:month/:date" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
