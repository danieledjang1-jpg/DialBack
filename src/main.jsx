import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Landing from './pages/Landing';
import AppShell from './components/AppShell';
import Dashboard from './pages/Dashboard';
import Ussd from './pages/Ussd';
import Assistant from './pages/Assistant';
import Services from './pages/Services';
import Activity from './pages/Activity';
import Settings from './pages/Settings';
import About from './pages/About';
import './styles/global.css';
function App(){return <MotionConfig reducedMotion="user"><BrowserRouter><Routes><Route path="/" element={<Landing/>}/><Route path="/app" element={<AppShell/>}><Route index element={<Dashboard/>}/><Route path="ussd" element={<Ussd/>}/><Route path="assistant" element={<Assistant/>}/><Route path="services" element={<Services/>}/><Route path="activity" element={<Activity/>}/><Route path="settings" element={<Settings/>}/><Route path="about" element={<About/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter></MotionConfig>}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
