import { useState } from "react";

function App() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <div className="bg-bg flex flex-col w-full h-full min-h-screen">
      <nav className="flex items-center justify-between py-8! px-10!">
        <h1 className="text-2xl font-bold">
          Emilly<span className="text-pink">Moitinho</span>
        </h1>

        <ul className="flex justify-end gap-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`transition duration-300 cursor-pointer hover:border-b-2 font-bold text-lg
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

      <main className="flex flex-col justify-between px-10! ">

      </main>
    </div>
  );
}

export default App;
