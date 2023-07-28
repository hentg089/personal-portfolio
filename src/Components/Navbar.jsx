import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){
  return (
    <nav className="nav">
      <Link to="/" className="title">Mark's Portfolio</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>  
        <CustomLink to="/projects">Projects</CustomLink>  
        <CustomLink to="/resume">Resume</CustomLink> 
        <CustomLink to="/research">Research</CustomLink> 
        <CustomLink to="/contact">Contact</CustomLink>  
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className = {isActive === to ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}