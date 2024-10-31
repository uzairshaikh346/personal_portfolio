import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-8 space-y-6 md:space-y-0 md:space-x-8">
      {/* Image Section */}
      <div className="relative w-40 h-40 md:w-64 md:h-64">
        <div className="absolute inset-0 bg-blue-700 rounded-full w-40 h-40 md:w-64 md:h-64" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>
        <Image
          src="/images/image2.jpeg"
          alt="About Me"
          className="relative w-80 h-68 object-cover rounded-full"
          width={256}
          height={256}
        />
      </div>

      {/* Text Section */}
      <div className="text-gray-800 max-w-md sm:mt-20 relative top-10">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="mb-4 text-xl">
          Hi, I’m Uzair! I specialize in front-end development, data science, and AI. I’m passionate about creating intuitive and responsive web applications that provide engaging user experiences.
        </p>
        <p className='text-xl'>
          With expertise in TypeScript, Next.js, and Tailwind CSS, I focus on building high-quality digital solutions. Let’s collaborate to make something amazing!
        </p>
      </div>
    </section>
  );
}
