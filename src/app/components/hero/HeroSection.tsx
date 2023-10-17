import Image from 'next/image'

type Newlist = {
  header: string,
  title: string,
  hrUnderLine?: React.ReactNode
}

const newLists: Array<Newlist> = [{
  header: 'Hydrogen VS Electric Cars',
  title: 'Will hydrogen-fueled cars ever catch up to EVs?',
  hrUnderLine: <hr className=" opacity-40 md:pb-5" />,
}, {
  header: 'The Downsides of AI Artistry',
  title: 'What are the possible adverse effects of on-demand AI image generation?',
  hrUnderLine: <hr className="opacity-40 md:pb-5" />,
}, {
  header: 'Is VC Funding Drying Up?',
  title: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
}]

const HeroSection = () => (
  <section className="flex flex-col gap-5 p-5 md:flex-row lg:gap-10 lg:px-10%">
    <div className=" md:block md:w-2/3">
      <div className="pb-8 lg:pb-10">
        <Image className="md:hidden" width={686} height={600} priority src="/images/image-web-3-mobile.jpg" alt="hero" />
        <Image className="hidden object-cover md:block" width={1460} height={600} priority src="/images/image-web-3-desktop.jpg" alt="hero" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <h1 className=" text-5xl font-extrabold text-neutral-four md:w-1/3 md:text-4xl lg:text-5xl">The Bright Future of Web 3.0?</h1>
        <div className="flex flex-col justify-between gap-5 pb-14 pt-5 md:w-2/4 md:py-0">
          <p className="text-black/60">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <button className="w-fit bg-primary-two px-8 py-3 font-bold uppercase tracking-[0.3em] text-specific hover:bg-neutral-four" type="button">Read more</button>
        </div>

      </div>
    </div>
    <div className="bg-neutral-four p-5 md:w-1/3 md:pb-0">
      <h1 className="pb-5 text-3xl font-bold text-primary-one md:text-xl lg:text-3xl">New</h1>
      {newLists.map(({ header, title, hrUnderLine }) => (
        <div key={header} className="pt-10 md:pt-0">
          <h1 className="text-xl font-bold text-specific hover:cursor-pointer hover:text-primary-one md:text-base lg:text-xl">{header}</h1>
          <p className="py-10 pt-3 text-neutral-two/80 md:py-5">{title}</p>
          {hrUnderLine}
        </div>
      ))}
    </div>
  </section>
)

export default HeroSection
