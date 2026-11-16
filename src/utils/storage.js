const KEY='dialback-demo-state-v1';
export function readState(){try{return JSON.parse(localStorage.getItem(KEY))||{favourites:[],activity:[],name:'Daniel'}}catch{return {favourites:[],activity:[],name:'Daniel'}}}
export function writeState(state){try{localStorage.setItem(KEY,JSON.stringify(state))}catch{/* storage may be unavailable */}}
export function addActivity(label){const s=readState();s.activity=[{id:Date.now(),label,at:new Date().toISOString()},...s.activity].slice(0,20);writeState(s)}
