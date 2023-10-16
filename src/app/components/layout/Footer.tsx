import Link from 'next/link'

const Footer = () => (
  <footer className="text-center text-xs [&_a]:text-link-color">
    Challenge by
    {' '}
    <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</Link>
    .
    Coded by
    {' '}
    <Link href="https://atsuno.github.io/frontendmentor-news-homepage" target="_blank" rel="noreferrer">Atsuno</Link>
    .
  </footer>
)

export default Footer
