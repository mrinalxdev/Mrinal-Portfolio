import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
      </main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url(../../public/gradient-bg.jpg)] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hello, I am a Full stack developer with 2 years of experience
          </h1>
          <p className="flex-1">
            A seasoned full stack developer with expertise in JavaScript, React,
            Node, Ruby on Rails, Express, MongoDB, Python, and Typescript. With
            a strong passion for creating robust and scalable web applications,
            I bring a wealth of knowledge and experience to every project.{" "}
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="text-white bg-[#0A2239] font-medium py-3 px-12 rounded-full">Contact Me</button>
            <div>{/* Social Links */}</div>
          </div>
        </div>

        <div />
      </section>
    </>
  );
}
