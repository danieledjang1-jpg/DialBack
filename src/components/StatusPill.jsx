import { Wifi, WifiOff } from 'lucide-react';
export default function StatusPill({online}){return <span className={`status-pill ${online?'is-online':'is-offline'}`}>{online?<Wifi size={14}/>:<WifiOff size={14}/>} {online?'Online':'Offline mode'}</span>}
