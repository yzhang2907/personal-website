import logo from './logo.svg';
import './App.css';

function Title() {
  return (
    <div className="title">
      Hi! I'm Lux.
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      Im WUx!!! very wux-like (real) also qualified for whatever job!!!!
      I promis wil not eat server room :3 (yumy servers) i am ver y safe to have!!!!!
      at any jobs! i am to be trusted wit h computes!!!!! pogger cabols very 
      tastey :DD but i no eat! wil code 4 cabol 4 eats!!!!!
    </div>
  )
}

function Contacts(props) {
  return (
    <div className="contacts">{props.children}</div>
  )
}

function Contact(props) {
  return (
    <div className="contact">
      <span className="contact-icon">
        <img src="logo192.png" />
      </span>
      <a className="contact-name" href={props.link}>
          {props.name}
      </a>
    </div>
  )
}

function BigCards(props) {
  return (
    <div className="big-cards">
      {props.children}
    </div>
  )
}

function BigCard(props) {
  return (
    <div className="big-card">
      <img src='https://via.placeholder.com/320x150' />
      <div className="big-card-title">{props.title}</div>
      <div className="big-card-desc">{props.desc}</div>
    </div>
  )
}

function SmallCards(props) {
  return (
    <div className="small-cards">
      {props.children}
    </div>
  )
}

function SmallCard(props) {
  return (
    <div className="small-card">
      <div className="small-card-title">{props.title}</div>
    </div>
  )
}

function Skills(props) {
  return (
    <div className="skills">
      {props.children}
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-title">{props.title}</div>
      <div className="skill-level">{props.level}</div> 
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Title />
      <Intro />
      <Contacts>
        <Contact icon="" name="GitGud" link="https://github.com/yzhang2907"/>
        <Contact icon="" name="LonkedIn" link="https://www.linkedin.com/in/lux-zhang-0/"/>
        <Contact icon="" name="E-Mail" link="mailto:yz862@cornell.edu"/>
      </Contacts>
      <BigCards>
        <BigCard 
          title="Maryland Large Vehicles Crash Corridors Analysis"
          desc="Analyzed and visualized Maryland large trucks and 
          buses crash corridors data using ArcGIS, ArcPy, and R; 
          delivered a presentation on the project to the chief safety
           officer, regional field administrator, my mentor, and data 
           analysts at FMCSA."/>
        <BigCard 
          title="Maryland Large Vehicles Crash Corridors Analysis"
          desc="Analyzed and visualized Maryland large trucks and 
          buses crash corridors data using ArcGIS, ArcPy, and R; 
          delivered a presentation on the project to the chief safety
           officer, regional field administrator, my mentor, and data 
           analysts at FMCSA."/>
      </BigCards>
      <SmallCards>
        <SmallCard title="Fard"/>
        <SmallCard title="Fard"/>
        <SmallCard title="Fard"/>
        <SmallCard title="Fard"/>
      </SmallCards> 
      <Skills>
        <Skill title={"Python"} level={10} />
        <Skill title={"JavaScript"} level={10} />
        <Skill title={"SQL"} level={9} />
        <Skill title={"CSS"} level={9} />
        <Skill title={"HTML"} level={10} />
        <Skill title={"farding"} level={8} />
        <Skill title={"Python"} level={10} />
        <Skill title={"Python"} level={10} />
      </Skills>
    </div>
  );
}

export default App;
