import Image from 'next/image'

type DataList = {
  src: string,
  alt: string,
  ranking: string,
  name: string,
  desc: string,
}

const topLists: Array<DataList> = [{
  src: './images/image-retro-pcs.jpg',
  alt: 'Retro PCs',
  ranking: '01',
  name: 'Reviving Retro PCs',
  desc: 'What happens when old PCs are given modern upgrades?',
}, {
  src: './images/image-top-laptops.jpg',
  alt: 'laptops',
  ranking: '02',
  name: 'Top 10 Laptops of 2022',
  desc: 'Our best picks for various needs and budgets.',
}, {
  src: './images/image-gaming-growth.jpg',
  alt: 'gaming growth',
  ranking: '03',
  name: 'The Growth of Gaming',
  desc: 'How the pandemic has sparked fresh opportunities.',
}]

const TopList = () => (
  <section className="w-full p-5 pb-10 lg:px-10%">
    <ul className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap md:gap-0 lg:flex-nowrap">
      {topLists.map(({ src, alt, name, ranking, desc }) => (
        <li key={ranking} className="flex gap-6 md:w-2/4 md:py-5 lg:w-1/3">
          <Image className="h-32 w-40 object-center" width={200} height={254} priority src={src} alt={alt} />
          <div className="w-full">
            <h1 className="pb-3 text-3xl font-bold text-neutral-two">{ranking}</h1>
            <p className="pb-3 text-xl font-extrabold text-neutral-four hover:cursor-pointer hover:text-primary-one">{name}</p>
            <p className="text-neutral-four/60">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default TopList
