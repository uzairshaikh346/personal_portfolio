import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "GIAIC Clone Web",
      description: "A clone of the GIAIC website, demonstrating advanced Next.js skills.",
      image: "/images/Governor_of_Sindh_Logo.png", 
      link: "https://giaic-clone-web.vercel.app",
    },
    {
      title: "Weather App (Next.js)",
      description: "A weather app built with Next.js that fetches live weather data.",
      image: "/images/weather.webp", // Replace with actual image path
      link: "https://weather-app-next-js-t7c8.vercel.app",
    },
    {
      title: "Countdown Timer (Next.js)",
      description: "A countdown timer built with Next.js, featuring dynamic timing.",
      image: "/images/countdowntimer.png", // Replace with actual image path
      link: "https://count-down-timer-nextjs-project.vercel.app",
    },
    {
      title: "Al-Ikhlas",
      description: "A web project centered around the theme of Al-Ikhlas.",
      image: "/images/quran.jpg", // Replace with actual image path
      link: "https://alikhlas.vercel.app",
    },
    {
      title: "Dynamic & Static Resume Builder",
      description: "A resume builder with options for dynamic and static resumes.",
      image: "/images/resume.png", // Replace with actual image path
      link: "https://uzairsmilestone5.vercel.app",
    },
  ];

  return (
    <section className="px-10 py-10 bg-blue-50">
      <h2 className="text-3xl font-bold mb-10">My Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
