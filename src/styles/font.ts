import { Itim, Roboto } from 'next/font/google'

const fontPrimary = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-primary',
})

const fontSecondary = Itim({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
})

const useFonts = [fontPrimary, fontSecondary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
