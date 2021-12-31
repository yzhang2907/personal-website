import logo from './logo.svg';
import './App.css';
import ICON_LINKEDIN from './icons/linkedin-brands.svg';
import ICON_GITHUB from './icons/github-square-brands.svg';
import ICON_EMAIL from './icons/envelope-square-solid.svg';

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
      {/* Im WUx!!! very wux-like (real) also qualified for whatever job!!!!
      I promis wil not eat server room :3 (yumy servers) i am ver y safe to have!!!!!
      at any jobs! i am to be trusted wit h computes!!!!! pogger cabols very 
      tastey :DD but i no eat! wil code 4 cabol 4 eats!!!!! */}
      Software engineer, data science enthusiast, Cornell class of '22.
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
        <a href={props.link}>
          <img src={props.icon} />
        </a>
      </span>
      {/* <a className="contact-name" href={props.link}>
          {props.name}
      </a> */}
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
      <div className='big-card-text-container'>
        <div className="big-card-title">{props.title}</div>
        <div className="big-card-desc">{props.desc}</div>
      </div>
      
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
      <img src='https://via.placeholder.com/320x200' />
      <div className='small-card-text-container'>
        <div className="small-card-title">{props.title}</div>
        <div className="small-card-desc">{props.desc}</div>
      </div>
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

function Bar(props) {
  let tot = props.totalPx;
  let f = props.filledPx;
  let ri = props.innerRadius;
  let ro = props.outerRadius;
  let orig = ro + 2;
  let fill = props.fill;

  const innerPath = `
    M ${orig},${orig+ri}
    A ${ri} ${ri} 90 0 1 ${orig-ri} ${orig}
    A ${ri} ${ri} 90 0 1 ${orig} ${orig-ri}
    L ${orig+f} ${orig-ri}
    L ${orig+f} ${orig+ri}
    Z
  `;

  const inner = (<path 
    fill={fill}
    stroke="none"
    d={innerPath}
  />);

  const outerPath = `
    M ${orig},${orig+ro}
    A ${ro} ${ro} 90 0 1 ${orig-ro} ${orig}
    A ${ro} ${ro} 90 0 1 ${orig} ${orig-ro}
    L ${orig+tot} ${orig-ro}
    A ${ro} ${ro} 90 0 1 ${orig+tot+ro} ${orig}
    A ${ro} ${ro} 90 0 1 ${orig+tot} ${orig+ro}
    Z
  `;

  const outer = (<path 
    fill="none"
    stroke={fill}
    strokeWidth={1}
    d={outerPath}
  />);

  // const result = (<svg className="skill-bar">
  //   <rect className="skill-bar-outer" x='0' y='0' width='100' height='20' style={{
  //     fill: "none", 

  //   }} />
  // </svg>);

  return (<svg viewbox={`0 0 ${orig*2} ${orig*2}`} className="skill-bar">
    {inner}
    {outer}
  </svg>);
}

function Skill(props) {
  return (
    <div className="skill">
      <span className="skill-title">{props.title}</span>
      <span className="skill-level">
        <Bar totalPx={200} filledPx={20*props.level} innerRadius={4} outerRadius={7} fill="#211A1E" />
      </span> 
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Title />
      <Intro />
      <Contacts>
        <Contact icon={ICON_GITHUB} name="GitGud" link="https://github.com/yzhang2907"/>
        <Contact icon={ICON_LINKEDIN} name="LonkedIn" link="https://www.linkedin.com/in/lux-zhang-0/"/>
        <Contact icon={ICON_EMAIL} name="E-Mail" link="mailto:yz862@cornell.edu"/>
      </Contacts>
      <BigCards>
        <BigCard 
          title="Large Vehicles Crash Analysis"
          desc="Analyzed and visualized Maryland large trucks and 
          buses crash corridors data using ArcGIS, ArcPy, and R; 
          delivered a presentation on the project to the chief safety
           officer, regional field administrator, my mentor, and data 
           analysts at FMCSA."/>
        <BigCard 
          title="Wavestep"
          desc="I and my friend made a 3D scrolling shooting game inspired by 
          outrun/vaporwave subcultures. Fly through an existential neon dream and 
          shoot sentries with twin-laser cannons!"/>
        <BigCard 
          title="Offer Database"
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to aggregate 
          information and roll out future discounts more effectively. Used SQL, Python,
           NumPy, Pandas, Jupyter Notebook."/>
        <BigCard 
          title="Offer Database"
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to aggregate 
          information and roll out future discounts more effectively. Used SQL, Python,
           NumPy, Pandas, Jupyter Notebook."/>
        <BigCard 
          title="Offer Database"
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to aggregate 
          information and roll out future discounts more effectively. Used SQL, Python,
           NumPy, Pandas, Jupyter Notebook."/>
      </BigCards>
      {/* <SmallCards>
        <SmallCard title="Offer Database" 
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to 
          aggregate information and roll out future discounts more effectively. 
          Used SQL, Python, NumPy, Pandas, Jupyter Notebook."/>
        <SmallCard title="Offer Database" 
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to 
          aggregate information and roll out future discounts more effectively. 
          Used SQL, Python, NumPy, Pandas, Jupyter Notebook."/>
        <SmallCard title="Offer Database" 
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to 
          aggregate information and roll out future discounts more effectively. 
          Used SQL, Python, NumPy, Pandas, Jupyter Notebook."/>
        <SmallCard title="Offer Database" 
          desc="Analyzed student discount data (Oracle and Microsoft DBs) to 
          aggregate information and roll out future discounts more effectively. 
          Used SQL, Python, NumPy, Pandas, Jupyter Notebook."/>
      </SmallCards>  */}
      <Skills>
        <Skill title={"Python"} level={9} />
        <Skill title={"Python"} level={3} />
        <Skill title={"JavaScript"} level={9} />
        <Skill title={"shid"} level={8} />
        <Skill title={"SQL"} level={9} />
        <Skill title={"fard"} level={10} />
        <Skill title={"CSS"} level={9} />
        <Skill title={"employ"} level={1} />
      </Skills>
    </div>
  );
}

export default App;
