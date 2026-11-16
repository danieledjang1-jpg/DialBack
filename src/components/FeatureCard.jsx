import { motion } from 'framer-motion';
export default function FeatureCard({icon:Icon,title,description,tag}){return <motion.article className="feature-card" whileHover={{y:-5}} transition={{duration:.2}}><div className="feature-icon"><Icon size={21}/></div>{tag&&<span className="feature-tag">{tag}</span>}<h3>{title}</h3><p>{description}</p></motion.article>}
