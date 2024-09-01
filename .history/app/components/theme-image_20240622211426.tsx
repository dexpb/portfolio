import Image, { ImageProps } from 'next/image'
import DarkEmail from '/public/darkmode-email.svg'
import DarkGithub from '/public/darkmode-github.svg'
import DarkLinkedin from '/public/darkmode-linkedin.svg'
import Linkedin from "/public/linkedin-icon.svg";
import Github from "/public/github-icon.svg";
import Email from "/public/email-icon.svg";
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
}
 
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} alt="" src={Linkedin} className={styles.imgLight} />
      <Image {...rest} alt="" src={DarkLinkedin} className={styles.imgDark} />
      <Image {...rest} alt="" src={Github} className={styles.imgLight} />
      <Image {...rest} alt="" src={DarkGithub} className={styles.imgDark} />
      <Image {...rest} alt="" src={Email} className={styles.imgLight} />
      <Image {...rest} alt="" src={DarkEmail} className={styles.imgDark} />
    </>
  )
}