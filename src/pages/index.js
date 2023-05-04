import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import me from "../../public/me.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mrinal Portfolio</title>
      </Head>
      <main className="px-10 ">
        <section className="min-h-screen mb-8">
          {/* Navbar  */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-mono text-white">I am</h1>
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-6 py-2 rounded-md ml-8 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Main Banner Section */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-white">Mrinal Pramanick</h2>
            <h3 className="text-2xl py-2 text-cyan-400">
              Developer and photographer.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-200">
              Passionate about developing innovative solutions with JavaScript,
              Python, and Blockchain. Looking to make a positive impact through
              software development.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400 ">
            <Link href="https://twitter.com/Hi_Mrinal">
              <AiFillTwitterCircle className="cursor-pointer duration-100 ease-in-out hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hi-mrinal/">
              <AiFillLinkedin className="cursor-pointer duration-100 ease-in-out hover:text-white" />
            </Link>
            <Link href="https://github.com/mrinalxdev">
              <AiFillGithub className="cursor-pointer duration-100 ease-in-out hover:text-white" />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={me}
              layout="fill"
              ocjectFit="cover"
              className="p-5 rounded-full cursor-pointer duration-300 ease-in-out hover:bg-teal-500"
            />
          </div>
        </section>

        <section>
          <h1>Project Section</h1>
        </section>
      </main>
    </>
  );
}
