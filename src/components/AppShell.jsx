import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import Sidebar from './Sidebar';
import StatusPill from './StatusPill';
import { useConnectivity } from '../hooks/useConnectivity';
export default function AppShell(){const [open,setOpen]=useState(false);const online=useConnectivity();return <div className="app-shell"><Sidebar open={open} onClose={()=>setOpen(false)}/><main className="main-area"><header className="topbar"><button className="icon-btn menu-trigger" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button><div className="breadcrumb">Workspace <span>/</span> <b>Overview</b></div><div className="topbar-actions"><StatusPill online={online}/><button className="icon-btn notification-btn" aria-label="Notifications"><Bell size={18}/><i/></button><div className="avatar">DE</div></div></header><div className="page-content"><Outlet/></div><footer className="app-footer">© 2026 DialBack <span>Simple. Smart. Accessible.</span><span className="demo-label">DEMO ENVIRONMENT</span></footer></main></div>}
