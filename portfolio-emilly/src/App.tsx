import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Download } from 'lucide-react';
import { useState } from "react";
import VsCodeIcon from './components/SvgIcons/VsCodeIcon';
import HtmlIcon from './components/SvgIcons/HtmlIcon';

import user from "./assets/images/user.jpg";
import CardTech from './components/CardTech/CardTech';
import CssIcon from './components/SvgIcons/CssIcon';
import JsIcon from './components/SvgIcons/JsIcon';
import TsIcon from './components/SvgIcons/TsIcon';
import ReactIcon from './components/SvgIcons/ReactIcon';
import TailwindIcon from './components/SvgIcons/TailwindIcon';
import GitIcon from './components/SvgIcons/GitIcon';
import GitHubIcon from './components/SvgIcons/GitHubIcon';

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
      <nav className="flex items-center justify-between py-8! px-15! w-full ">

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

      <section className="container">
        <main className="flex items-center animate-fadeIn h-[90vh]">
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
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emillysmoitinho@gmail.com" target="_blank" className="social-media" title="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <a
              href="src/Emilly-Soares-Moitinho-CV.pdf" download className="flex items-center border border-pink rounded-3xl w-fit gap-2.5 py-3! px-5! font-bold text-pink transition duration-300 ease-in-out hover:bg-pink hover:text-bg hover:shadow-[0_0_25px_#b74b4b] hover:scale-105">Download CV   <Download /></a>
          </div>
          <div className="flex-1"><img src={user} alt="Foto de Emilly Moitinho" className=" rounded-full shadow-[0_0_25px_#FD4FA6] animate-float transition duration-500 ease-in-out hover:shadow-[0_0_45px_#FD4FA6] hover:scale-105" /></div>
        </main>
        {/* 
        <article id="sobre" className="section-content w-[70vw] h-150 flex flex-col gap-4 p-8! border-3 border-pink shadow-[1px_0px_59px_-25px_#f599c7f7]
        rounded-2xl">
          <h2 className="text-3xl!">Sobre Mim</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam suscipit numquam iste voluptatibus dolores repudiandae minima impedit possimus dolor ducimus ad necessitatibus ea laboriosam sit magni officiis, quam placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, assumenda accusamus a sed dicta vitae obcaecati similique accusantium sit omnis officiis, fugit nihil quae odio. Vero modi nobis fugiat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veniam dolores voluptatibus minus ea necessitatibus at nisi. Optio aut aspernatur voluptas minus aliquid expedita illum blanditiis omnis, facere, ea sapiente?</p>

          <div></div>
        </article> */}

        <article id='skills' className="w-full h-screen flex justify-center flex-col gap-8 py-5!">
          <h2 className="text-3xl! mb-4! font-bold">Ferramentas e Tecnologias</h2>

          <div className="flex flex-wrap gap-8">
            <CardTech icon={VsCodeIcon} name='Visual Studio Code' category='Editor de Código' />
            <CardTech icon={HtmlIcon} name='HTML' category='Linguagem de Marcação' />
            <CardTech icon={CssIcon} name='CSS' category='Linguagem de Estilo' />
            <CardTech icon={JsIcon} name='JavaScript' category='Linguagem de Programação' />
            <CardTech icon={TsIcon} name='TypeScript' category='Linguagem de Programação' />
            <CardTech icon={ReactIcon} name='React' category='Framework JavaScript' />
            <CardTech icon={TailwindIcon} name='Tailwind CSS' category='Framework de Estilização' />
            <CardTech icon={GitIcon} name='Git' category='Controle de Versão' />
            <CardTech icon={GitHubIcon} name='GitHub' category='Repositório de Código' />
          </div>
        </article>

      </section>
    </div>
  );
}

export default App;
