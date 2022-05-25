const About = () => {
  return (
    <section className="border-t border-dotted mt-5">
      <h2 className="text-center mt-5 text-xl">LET ME INTRODUCE MYSELF</h2>
      <div className="flex flex-row">
        <div className="flex-2">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto"
            src="/img/asaduzzaman-pavel.png"
            alt="Asaduzzaman Pavel"
            width="384"
            height="512"
          />
        </div>
        <div className="pl-5 pt-6 text-center md:text-left">
          <h2 className="text-lg font-medium">
           👋🏻 Hi, <span>I am Asaduzzaman Pavel</span>
          </h2>
           I am a software engineer with building experience building building digital products with different technologies.
        </div>
      </div>
    </section>
  )
}

export default About
