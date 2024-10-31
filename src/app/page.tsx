"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className="bg-blue-100 pb-20">
        <main className="bg-blue-100 font-thin pt-10 flex flex-col lg:flex-row lg:items-center">
          <div className="p-4 lg:pl-14 lg:w-2/3 text-center lg:text-left">
            <p className="text-sm lg:text-base">Hey, I am Uzair</p>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
              I create impactful <span className="text-blue-700">web solutions</span>
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              and engaging user experiences
            </h1>
            <p className="mb-8 text-xs sm:text-sm lg:text-base">
              With a strong foundation in front-end development, data science, and AI, I specialize in building intuitive and responsive web applications. My focus is on delivering high-quality digital solutions that bring ideas to life, using technologies like TypeScript, Next.js, and Tailwind CSS. Let's collaborate to build something remarkable!
            </p>
            <button onClick={() => {router.push("/contact")}} className="p-2 text-xs sm:text-sm rounded bg-blue-700 border text-white">
              Contact me
            </button>
          </div>
          <div className="flex justify-center lg:justify-start items-center mt-8 lg:mt-0">
            <Image
              className="h-48 w-52 sm:h-60 sm:w-60 lg:h-64 lg:w-72 rounded"
              src="/images/image1.jpeg"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </main>

        <div className="bg-blue-100 px-4 lg:pl-14 pt-12">
          <p className="mb-1 text-center lg:text-left">My skills</p>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl mb-3 text-center lg:text-left">
            My Expertise
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pr-4">
            <div className="bg-blue-200 rounded-xl p-4">
              <h1 className="text-lg sm:text-xl font-semibold mb-4">Frontend Development</h1>
              <ul className="text-xs sm:text-sm">
                <li className="mb-2">Expertise in HTML, CSS, JavaScript, and TypeScript.</li>
                <li className="mb-2">Experience with responsive web design using Tailwind CSS and Bootstrap.</li>
                <li className="mb-2">Proficient in creating engaging, user-friendly interfaces.</li>
              </ul>
            </div>
            <div className="bg-blue-200 rounded-xl p-4">
              <h1 className="text-lg sm:text-xl font-semibold mb-4">Next.js & React</h1>
              <ul className="text-xs sm:text-sm">
                <li className="mb-2">Currently learning and building projects using Next.js.</li>
                <li className="mb-2">Skilled in creating interactive components with React.</li>
                <li className="mb-2">Knowledge of server-side rendering and dynamic routing.</li>
              </ul>
            </div>
            <div className="bg-blue-200 rounded-xl p-4">
              <h1 className="text-lg sm:text-xl font-semibold mb-4">Data Science & AI</h1>
              <ul className="text-xs sm:text-sm">
                <li className="mb-2">Beginner-level knowledge in data science and AI fundamentals.</li>
                <li className="mb-2">Exploring applications of AI in frontend development.</li>
                <li className="mb-2">Interested in cloud-based generative AI tools and services.</li>
              </ul>
            </div>
            <div className="bg-blue-200 rounded-xl p-4">
              <h1 className="text-lg sm:text-xl font-semibold mb-4">Cloud & Applied Generative AI Engineering</h1>
              <ul className="text-xs sm:text-sm">
                <li className="mb-2">IT student with a focus on Cloud Applied Generative AI Engineering.</li>
                <li className="mb-2">Familiar with cloud platforms and the basics of generative AI.</li>
                <li className="mb-2">Keen on integrating AI-driven features into frontend applications.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
