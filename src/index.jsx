import React, { useEffect,useRef } from "react";
import  './index.css';
import Typed from 'typed.js';
import about from './about.jpg';
import onlineImg from "./online-new.jpg";
import webNewsss from "./web newsss.jpg";
import { FaTwitter } from 'react-icons/fa';
import uiDesign from "./ui-design.jpg";
import { FaApple } from "react-icons/fa";
import { MdCrop } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useState } from "react";





function Portfolio() {
  const typedRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [ "Frontend Developer", "React Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);




  return (
    <>
   <header className="header">
    <a href="#" className="logo">Portfolio</a>
    <div className="menu-btn" onClick={() => setOpen(!open)}>
  ☰
</div>

      <nav className={`navbar ${open ? "open" : ""}`}>
        <a href="#home" style={{"--i":"1"}} className="active" >Home</a>
        <a href="#about" style={{"--i":"2"}} className="active" >About</a>
        <a href="#service" style={{"--i":"3"}} className="active" >Services</a>
        <a href="#skill" style={{"--i":"3"}} className="active" >Skills</a>
        <a href="#project" style={{"--i":"4"}} className="active">Projects</a>
        <a href="#contact" style={{"--i":"4"}} className="active">Contact</a>
    </nav>
   </header>
   <section id="home">
    <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Dinesh Kumar</h1>
        <h3>And I'm a  <span className="text" ref={typedRef}></span></h3>
        <p>I'm a web Developer with extensive for over 5 months.
            <br/>experience is to create and website design,Frontend design , and many more ......
        </p><br/>
        <div className="home-sci">
             <a href="https://instagram.com" style={{"--i":"7"}}>
        <FaInstagram />
      </a>

      <a href="https://wa.me/1234567890" style={{"--i":"8"}}>
        <FaWhatsapp />
      </a>

      <a href="https://linkedin.com" style={{"--i":"9"}}>
        <FaLinkedin />
      </a>
       <a href="https://facebook.com" style={{"--i":"10"}}>
        <FaFacebook />
      </a>
        </div>
        <a href="#" className="btn-box">More About Me</a>
    </div>
    <div className="home-img">
      <img src={about} alt="photo"></img>
    </div>
   </section>

   <section className="about" id="about">
    <div className="about-img">
      <img src={about} alt="photo"></img>
    </div>
    <div className="about-text">
      <h2>About<span>Me</span></h2>
      <h4>Full Stack Developer!</h4>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eum earum facere ipsum voluptates dignissimos a, tempora odio commodi. Dolorem voluptates voluptatum, distinctio enim iusto, eos similique saepe assumenda perspiciatis tempore deserunt officiis dolore cupiditate eum. Quasi non eius aut provident vel, reprehenderit saepe autem reiciendis odit perspiciatis velit quo id recusandae tempora molestiae est fugiat voluptatibus quia delectus alias cum omnis officiis. Rem neque provident accusamus sapiente pariatur voluptates, vel, iste molestiae obcaecati quaerat qui magnam dolorem eligendi nostrum et cupiditate sed iure exercitationem adipisci, rerum perspiciatis consequatur enim numquam! Alias corporis ex non, qui praesentium quibusdam soluta perferendis pariatur eaque maxime id saepe aspernatur, error commodi dolores ab perspiciatis quis modi dolorem odit. Sed quod ab, omnis nihil placeat ipsa. Tenetur laborum accusamus id natus unde maxime rerum nesciunt placeat a voluptate similique ipsam temporibus, iste nobis perferendis sit quae dignissimos consequuntur nam! Explicabo debitis nulla atque mollitia.</p>
    
    <a href="#" className="btn-box">More About</a>
    </div>
   </section>
   <br></br><br></br><br></br>
   <section>
    <div className="services" id="service">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div>
            <a href="#" className="bx bx-crop" style={{color:"#00eeff"}}> <MdCrop size={39} /></a>
            <h2>Responsive & Cross-Browser Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis veniam dignissimos amet voluptatibus culpa ea quas atque id rem minus recusandae laboriosam quam quidem, distinctio cum obcaecati. Architecto optio adipisci similique temporibus dignissimos, alias at officia error. Laboriosam, nobis. Porro aliquid provident iste quam illo dolorum eum, vitae sequi, aut corrupti dolor officiis nostrum consequatur eveniet minus id aliquam ipsam ad exercitationem optio natus dignissimos expedita fugit. Officia cumque iste quibusdam inventore excepturi doloremque nam libero suscipit illo vel deserunt est iusto, laborum laudantium asperiores quae id odit voluptatem. Iusto sit atque commodi facere ex sequi natus! Vel, ipsa!</p>
           <a href="#" className="read">learn more</a>
          </div>
           <div>
               <a href="#"  className="bx bx-code" style={{color:"#00eeff"}}><FaCode size={39} /></a>
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis veniam dignissimos amet voluptatibus culpa ea quas atque id rem minus recusandae laboriosam quam quidem, distinctio cum obcaecati. Architecto optio adipisci similique temporibus dignissimos, alias at officia error. Laboriosam, nobis. Porro aliquid provident iste quam illo dolorum eum, vitae sequi, aut corrupti dolor officiis nostrum consequatur eveniet minus id aliquam ipsam ad exercitationem optio natus dignissimos expedita fugit. Officia cumque iste quibusdam inventore excepturi doloremque nam libero suscipit illo vel deserunt est iusto, laborum laudantium asperiores quae id odit voluptatem. Iusto sit atque commodi facere ex sequi natus! Vel, ipsa!</p>
           <a href="#" className="read">learn more</a>
          </div>
           <div>
           <a href="https://www.apple.com" target="_blank" className="bx bx-apple" style={{color:"#00eeff"}} rel="noopener noreferrer"><FaApple size={39} /></a>
            <h2>Framework & Library Implementation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis veniam dignissimos amet voluptatibus culpa ea quas atque id rem minus recusandae laboriosam quam quidem, distinctio cum obcaecati. Architecto optio adipisci similique temporibus dignissimos, alias at officia error. Laboriosam, nobis. Porro aliquid provident iste quam illo dolorum eum, vitae sequi, aut corrupti dolor officiis nostrum consequatur eveniet minus id aliquam ipsam ad exercitationem optio natus dignissimos expedita fugit. Officia cumque iste quibusdam inventore excepturi doloremque nam libero suscipit illo vel deserunt est iusto, laborum laudantium asperiores quae id odit voluptatem. Iusto sit atque commodi facere ex sequi natus! Vel, ipsa!</p>
           <a href="#" className="read">learn more</a>
          </div>
        </div>
      </div>
    </div>
   </section>
   <div  id="skills">
 <h1 className="sub-title" id="skill">My <span>Skills</span></h1>
     <section>
      
    <div className="container1"  >
      <h1 className="heading1">Technical Skills</h1>
      <div className="technical-bars">
        <div className="bar">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><FaHtml5 color="#e34c26" size={40} /></a>
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html5">
            <span></span>
          </div>
        </div>
           <div className="bar">
             <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><FaCss3Alt color="#264de4" size={40} /></a>
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css3">
            <span></span>
          </div>
        </div>
           <div className="bar">
             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><FaJs color="#f0db4f" size={40} /></a>
          <div className="info">
            <span>JAVASCRIPT</span>
          </div>
          <div className="progress-line javascript">
            <span></span>
          </div>
        </div>
           <div className="bar">
              <a href="https://react.dev" target="_blank"><FaReact color="#61dbfb" size={40} /></a>
          <div className="info">
            <span>REACT</span>
          </div>
          <div className="progress-line react">
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div className="container1">
      <h1 className="heading1"> Professional Skills</h1>
      <div className="radial-bars">

      <div className="radial-bar">
        <svg x="0px" y="0px" viewBox="0 0 200 200">
          <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
          <circle className="path path-1" cx="100" cy="100" r="80"></circle>
        </svg>
        <div className="percentage">90%</div>
        <div className="text">Creativity</div>
      </div>

       <div className="radial-bar">
        <svg x="0px" y="0px" viewBox="0 0 200 200">
          <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
          <circle className="path path-1" cx="100" cy="100" r="80"></circle>
        </svg>
        <div className="percentage">65%</div>
        <div className="text">Commnication</div> 
      </div>

       <div className="radial-bar">
        <svg x="0px" y="0px" viewBox="0 0 200 200">
          <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
          <circle className="path path-1" cx="100" cy="100" r="80"></circle>
        </svg>
        <div className="percentage">75%</div>
        <div className="text">Problem Solving</div>
      </div>

       <div className="radial-bar">
        <svg x="0px" y="0px" viewBox="0 0 200 200">
          <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
          <circle className="path path-1" cx="100" cy="100" r="80"></circle>
        </svg>
        <div className="percentage">85%</div>
        <div className="text">Team Work</div>
      </div>
   </div>
    </div>
   </section>
  
  <section id="project">
    <div className="portfolio" id="project">
      <div className="main-text" id="project">
        <h2>Latest<span>Project</span></h2>

        <div className="portfolio-content">
          <div className="row">
           <img src={onlineImg} alt="Online Exam Project"  style={{ width: "500px", height: "auto" }}/>
            <div className="layer">
              <h5>Online Exam System</h5>
              <p>An online exam system allows students to take tests digitally, ensuring secure evaluation, instant results, time management, and flexible access from anywhere.</p>
              <a href="https://example.com" target="_blank"  style={{ color: "red"}} rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </div>

           <div className="row">
         <img src={webNewsss} alt="Web Project"  style={{ width: "500px", height: "auto" }}/>
            <div className="layer">
              <h5>Web Application</h5>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio excepturi eius, natus ipsam cupiditate praesentium tenetur, ipsum velit dolor ut recusandae dicta minus? Atque?</p>
              <a href="https://example.com" target="_blank"  style={{ color: "red"}} rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </div>

           <div className="row">
          <img src={uiDesign} alt="UI Design"  style={{ width: "500px", height: "auto" }} />
            <div className="layer">
              <h5>UI Design</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tenetur consequuntur. Esse aut obcaecati, cupiditate corporis rerum et sapiente quia, voluptatum quam nisi aspernatur!</p>
              <a href="https://example.com" target="_blank"  style={{ color: "red"}} rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <section className="contact" id="contact">
   <div className="contact-text">
    <h2>Contact<span>Me</span></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora beatae explicabo velit neque facilis repellat cumque ab corporis. Quas vel ullam cupiditate sequi velit laudantium!</p>
    <div className="contact-list">
      <li><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer" style={{fontSize: "28px",color: "#0ef",textDecoration: "none"}}><FaPaperPlane /></a>dkdhinesh562@gmail.com</li>
      <li><a href="tel:7448347359" style={{fontSize: "28px",color: "#0ef",textDecoration: "none"}}><FaPhoneAlt size={26}  /></a>7448347359</li>
    </div>
    <div className="contact-icons">
     <a href="https://instagram.com" style={{"--i":"7"}}>
        <FaInstagram />
      </a>

      <a href="https://wa.me/1234567890" style={{"--i":"8"}}>
        <FaWhatsapp />
      </a>

      <a href="https://linkedin.com" style={{"--i":"9"}}>
        <FaLinkedin />
      </a>
       <a href="https://facebook.com" style={{"--i":"10"}}>
        <FaFacebook />
      </a>
      </div>
   </div>

   <div className="contact-form">
    <form action="">
      <input type="" placeholder="Enter Your Name" required></input>
      <input type="email" placeholder="Enter Your Email" required></input>
      <input type="text" placeholder="Enter Your Subject"></input>
      <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
      <input type="submit" value="submit" className="send"></input>

    </form>
   </div>
  </section>
    </>
  );
}
export default Portfolio;