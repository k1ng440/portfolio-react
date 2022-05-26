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
            <p>I am a software engineer, specialised in building applications using mordern programming languages.</p>

            <p>I always want to learn more and do more. I'm also a firm believer that we should never settle. I'm hard working, super curious, passionate, committed and a fast learner!</p>
        </div>
      </div>
    </section>
  )
}

export default About
