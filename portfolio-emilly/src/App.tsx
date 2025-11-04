import { useState } from "react";
import { Download } from 'lucide-react';
import user from "./images/user.jpg";

function App() {
  const [active, setActive] = useState("Início");

  const menuItems = [
    { name: "Início", href: "#" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <div className="bg-bg flex flex-col w-full h-full">
      <nav className="flex items-center justify-between py-8! px-10! mb-20!">

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

      <main className="flex justify-between items-center px-10! mx-20! animate-fadeIn">
        <div className="flex flex-col w-[30%] flex-2 px-5!">
          <h2 className="mb-2! text-xl! font-extralight!">Seja Bem Vindo(a)! Meu Nome é <span className="text-pink font-bold">Emilly</span></h2>
          <h1 className="text-5xl! text-pink mb-8!">Desenvolvedora Front-End</h1>
          <p className="w-150 mb-8!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis doloremque facilis sint nulla consectetur aut, commodi harum minima laboriosam magnam facere. Assumenda deleniti quod incidunt, qui nesciunt ea est!</p>
          <button className="flex items-center border border-pink rounded-3xl w-fit gap-2.5 py-3! px-5! font-bold text-pink transition duration-300 ease-in-out hover:bg-pink hover:text-bg hover:shadow-[0_0_25px_#b74b4b] hover:scale-105">Download CV   <Download /></button>
        </div>


        <div className="flex-1"><img src={user} alt="Foto de Emilly Moitinho" className=" rounded-full shadow-[0_0_25px_#FD4FA6] animate-float transition duration-500 ease-in-out hover:shadow-[0_0_45px_#FD4FA6]" /></div>
      </main>
    </div>
  );
}

export default App;
