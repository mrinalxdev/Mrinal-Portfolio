import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import me from '../../public/me.jpeg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mrinal Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          {/* Navbar  */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-mono">Mrinal</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-6 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Main Banner Section */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600">Mrinal Pramanick</h2>
            <h3 className="text-2xl py-2">Developer and photographer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Passionate about developing innovative solutions with JavaScript,
              Python, and Blockchain. Looking to make a positive impact through
              software development.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle className="cursor-pointer duration-100 ease-in-out hover:text-black"/>
            <AiFillLinkedin className="cursor-pointer duration-100 ease-in-out hover:text-black" />
            <AiFillGithub className="cursor-pointer duration-100 ease-in-out hover:text-black" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={me} layout="fill" ocjectFit="cover" />
          </div>
        </section>
      </main>
    </>
  );
}
