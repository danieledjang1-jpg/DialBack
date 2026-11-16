import { Zap } from 'lucide-react';
export default function Brand({small=false}){return <div className={`brand ${small?'brand-small':''}`}><span className="brand-mark"><Zap size={small?17:21} fill="currentColor"/></span><span>Dial<span>Back</span></span></div>}
