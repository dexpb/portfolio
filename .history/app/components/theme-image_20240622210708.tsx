import styles from './theme-image.module.css'
import Image, { ImageProps } from 'next/image'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
}
 
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} alt="" src={srcLight} className={styles.imgLight} />
      <Image {...rest} alt="" src={srcDark} className={styles.imgDark} />
    </>
  )
}