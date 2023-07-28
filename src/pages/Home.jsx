import me from '.././resources/picofme.jpg';

export default function Home(){
  return (
    <div className = "home-container">
      <h1 className="header-home">Hi... I'm Mark Hentges</h1>  
      <h2 className="header-extra">
        Welcome to my personal portfolio, where you can navigate my carefully curated collection of skills, 
        projects, and research relating to my professional career.
      </h2>
      <h2 className="header-extra2"> Below is a brief introduction to myself. </h2>
      <img src={me} alt="pic of me" height="900"></img>
    </div>
  )
}