import { useState } from "react";
import { Download, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import user from "./images/user.jpg";

function App() {
  const [active, setActive] = useState("Início");

  const menuItems = [
    { name: "Início", href: "#" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="bg-bg flex flex-col items-center w-full h-full">
      <nav className="flex items-center justify-between py-8! px-15! w-full">

        <p className="text-2xl font-bold hover:scale-110 transition duration-300 ease-in-out">
          <a href="#">Emilly<span className="text-pink">Moitinho</span></a>
        </p>

        <ul className="flex justify-end gap-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`transition duration-300 cursor-pointer hover:border-b-2 font-bold text-lg pb-1.5! px-2!
                  ${active === item.name
                    ? "text-pink border-b-2 border-pink"
                    : "text-white hover:text-pink/70"}
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </nav>

      <main className="w-[85vw] flex justify-between items-center animate-fadeIn h-[85vh]">
        <div className="flex flex-col w-[30%] flex-2 px-5!">
          <h2 className="mb-2! text-xl! font-extralight!">Seja Bem Vindo(a)! Meu Nome é <span className="text-pink font-bold">Emilly</span></h2>
          <h1 className="text-5xl! text-pink mb-8!">Desenvolvedora Front-End</h1>

          <div className="flex flex-col mb-4! w-[70%] gap-3">
            <p className="w-150">Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e também de <strong>Engenharia da Computação</strong>.
            </p>
            <p>Tenho me dedicado ao <strong>Desenvolvimento Front-End</strong> e gosto transformar ideias em sites bonitos e funcionais. Estou sempre aprendendo novas tecnologias e buscando evoluir a cada projeto que faço.</p>
          </div>

          <div className="flex gap-6 mb-6! text-pink">
            <a href="https://www.linkedin.com/in/emillymoitinho/" target="_blank" title="Linkedin" className="social-media"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/emillymoitinho" target="_blank" className="social-media" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
            <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=emillysmoitinho@gmail.com" target="_blank"  className="social-media" title="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <a
            href="src/Emilly-Soares-Moitinho-CV.pdf" download className="flex items-center border border-pink rounded-3xl w-fit gap-2.5 py-3! px-5! font-bold text-pink transition duration-300 ease-in-out hover:bg-pink hover:text-bg hover:shadow-[0_0_25px_#b74b4b] hover:scale-105">Download CV   <Download /></a>
        </div>

        <div className="flex-1"><img src={user} alt="Foto de Emilly Moitinho" className=" rounded-full shadow-[0_0_25px_#FD4FA6] animate-float transition duration-500 ease-in-out hover:shadow-[0_0_45px_#FD4FA6] hover:scale-105" /></div>
      </main>
    </div>
  );
}

export default App;
