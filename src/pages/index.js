import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mrinal Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl">Mrinal</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer"/>
              </li>
              <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-6 py-2 rounded-md ml-8">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
