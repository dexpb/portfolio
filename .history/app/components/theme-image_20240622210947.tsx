import styles from './theme-image.module.css'
import Image, { ImageProps } from 'next/image'
import DarkEmail from '/public/darkmode-email.svg'
import DarkGithub from '/public/darkmode-github.svg'
import DarkLinkedin from '/public/darkmode-linkedin.svg'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
}
 
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} alt="" src={DarkEmail} className={styles.imgLight} />
      <Image {...rest} alt="" src={DarkGithub} className={styles.imgDark} />
      <Image {...rest} alt="" src={DarkLinkedin} className={styles.imgDark} />
    </>
  )
}