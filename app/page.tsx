"use client";
import { useState } from "react";
import { Layout, Menu, Card, Tag, Button, BackTop } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link as ScrollLink } from "react-scroll";
import "../styles/globals.css";
import styles from "./Intro.module.css";

const { Header, Content, Footer } = Layout;

export default function Home() {
  const [open, setOpen] = useState(false);
  const sections = ["intro", "about", "works", "contact"];
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" style={{ background: "#161b22" }}>
          <Menu.Item className={styles.headerLink} style={{ fontSize: "25px", background: "black" }}>
            Kirti...
          </Menu.Item>
          {["intro", "about", "works", "contact"].map((section) => (
            <Menu.Item key={section} className={styles.headerLink}>
              <ScrollLink to={section} smooth duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </Menu.Item>
          ))}
        </Menu>
      </Header>

      <Content className="wrapper">
        <section id="intro" className={styles.heroSection}>
          <div className={styles.staticCircles}>
            <span className={styles.c0}></span>
            <span className={styles.c1}></span>
            <span className={styles.c2}></span>
            <span className={styles.c3}></span>
            <span className={styles.c4}></span>
            <span className={styles.c5}></span>
          </div>
          <div className={styles.content}>
            <div className={styles.eyebrow}>— HELLO WORLD</div>
            <h1 className={styles.heading}>
              I am Kirti, <br /> a frontend developer building AI-powered user interfaces
            </h1>
            <div className={styles.subtext}>
              Transforming ideas into sleek, scalable, and AI-powered web experiences.
            </div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutWrapper}>
            <div className={styles.imageContainer}>
              <img
                src="/mypic.jpeg"
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.eyebrow}>- ABOUT</h2>
              <p className={styles.description}>
                I’m a passionate frontend developer who loves building elegant
                UIs with React, Next.js, and modern design systems.
              </p>
              <a href="/cv.pdf" download className={styles.downloadBtn}>
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </section>
        <section id="works" className={styles.skillsSection}>
          <div className={styles.skillsWrapper}>
            {/* Expertise */}
            <div className={styles.column}>
              <h2 className={styles.eyebrow}>— EXPERTISE</h2>
              <div className={styles.grid}>
                <div className={styles.card}>HTML/CSS/JS </div>
                <div className={styles.card}>React.js & Next.js</div>
                <div className={styles.card}> Node.js, Express.js, MongoDB</div>
                <div className={styles.card}>TypeScript</div>
                <div className={styles.card}>Ant Design & MUI</div>
                <div className={styles.card}>Figma to Code</div>
                <div className={styles.card}>Responsive UI</div>
                <div className={styles.card}>Clean Code Practices</div>
                <div className={styles.card}>
                  AI Chatbot / Chat UI (OpenAI API + React)
                </div>
                <div className={styles.card}>AI Prompt Engineering</div>
                <div className={styles.card}>Prompt to UI Generation</div>
                <div className={styles.card}>
                  Socket Integration (Chat/Live updates)
                </div>
              </div>
              <br />

              {/* Experience */}
              <div className={styles.column}>
                <h2 className={styles.eyebrow}>— EXPERIENCE</h2>
                <ul className={styles.timeline}>
                  {/* ORMAE */}
                  <li className={styles.timelineItem}>
                    <h3 className={styles.role}>Frontend Developer</h3>
                    <p className={styles.company}>ORMAE, Bangalore, IN (Aug 2022 – Present)</p>
                    <ul className={styles.detailsList}>
                      <li>Contributed to a comprehensive <b>SCN platform</b>, enhancing <b>data accessibility</b> and <b>advanced analytics</b>.</li>
                      <li>Engineered <b>high-performance frontend solutions</b> with <b>ReactJS</b>, <b>NextJS</b>, <b>TypeScript</b>, and <b>NodeJS</b> for <b>scalable applications</b>.</li>
                      <li>Integrated <b>AI prompting workflows</b> to enable <b>intelligent data-driven interactions</b> within the platform.</li>
                      <li>Developed a <b>real-time chat</b> and <b>collaboration system</b> using <b>WebSockets (Socket.IO)</b> for seamless user engagement.</li>
                      <li>Collaborated with <b>cross-functional teams</b> to ensure smooth integration of <b>AI features</b> and <b>platform modules</b>.</li>
                      <li>Applied <b>responsive design principles</b> to deliver optimized <b>multi-device user experiences</b>.</li>
                      <li>Managed <b>Git-based version control workflows</b>, ensuring reliable and efficient deployments.</li>
                      <li>Conducted thorough <b>testing & debugging</b> to maintain <b>platform stability</b> and <b>performance</b>.</li>
                      <li>Maintained clear <b>documentation</b> to streamline <b>knowledge transfer</b> and support <b>future development</b>.</li>
                    </ul>
                  </li>

                  {/* MyGate */}
                  <li className={styles.timelineItem}>
                    <h3 className={styles.role}>Frontend Engineer</h3>
                    <p className={styles.company}>MyGate, Bangalore, IN (Feb 2019 – Jul 2022)</p>
                    <ul className={styles.detailsList}>
                      <li>Built the <b>MyGate website</b> in <b>WordPress</b> with custom <b>blog functionality</b>.</li>
                      <li>Developed <b>MyGate Business Dashboard UI</b> with <b>React.js</b> & <b>GraphQL</b>.</li>
                      <li>Created <b>Address Matcher Dashboard</b> (<b>React</b> + <b>Material UI</b>) with <b>API integration</b>.</li>
                      <li>Enhanced <b>MyGate Plus ERP</b>: automated <b>billing</b>, <b>credit-debit management</b>, and <b>booking features</b>.</li>
                      <li>Extended <b>MyGate Octopus Product</b> with <b>task & inventory management</b> + <b>real-time chat</b>.</li>
                      <li>Designed <b>KSP Pass UI</b> in <b>React.js</b> with <b>QR scanning</b> for <b>secure entry validation</b>.</li>
                      <li>Built <b>Unified Common Dashboard</b> combining <b>accounting</b> & <b>non-accounting services</b>.</li>
                    </ul>
                  </li>

                  {/* KredX */}
                  <li className={styles.timelineItem}>
                    <h3 className={styles.role}>Frontend Developer Intern</h3>
                    <p className={styles.company}>KredX, Bangalore, IN (Jul 2018 – Oct 2018)</p>
                    <ul className={styles.detailsList}>
                      <li>Worked on <b>UI enhancements</b> with <b>HTML5</b>, <b>CSS3</b>, <b>Bootstrap</b>, <b>JavaScript</b> & <b>React.js</b>.</li>
                      <li>Developed a <b>Common UI Components Library</b> for <b>invoice discounting product</b>.</li>
                      <li>Ensured seamless <b>integration of reusable components</b> across the product.</li>
                      <li>Applied <b>responsive design techniques</b> for <b>accessibility</b> across devices.</li>
                      <li>Participated in <b>code reviews</b> & promoted <b>best practices</b>.</li>
                    </ul>
                  </li>
                  </ul>
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactHeading}>GET IN TOUCH</div>
          <div className={styles.contactText}>
            I love to hear from you. Whether you have a question or just want to
            chat about design, tech & art — <strong>shoot me a message</strong>.
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactBlock}>
              <h4>REACH ME AT</h4>
              <p>kirti.developermail@gmail.com</p>
              <p>+91 9044681317</p>
              <p>Bangalore, Karnataka IN </p>
            </div>

            <div className={styles.contactBlock}>
              <h4>SOCIAL</h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/kirti-singh-29834413a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinOutlined />
                </a>

                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubOutlined />
                </a>
              </p>
            </div>
            <div className={styles.contactBlock}>
              <a href="mailto:kirti.developermail@gmail.com" target={"_blank"}>
                <Button
                  icon={<MailOutlined />}
                  className={styles.contactButton}
                >
                  &nbsp;SAY HELLO.
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Content>

      <Footer
        style={{ textAlign: "center", background: "black", color: "white" }}
      >
        © {new Date().getFullYear()} Kirti Singh. All rights reserved.
      </Footer>

      <BackTop />
    </Layout>
  );
}
