import Image from 'next/image'
import Husky from '../public/husky.jpeg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <Image src={Husky} alt="Husky Image" width={650} height={300} />
      </div>
      <div className={styles.container__text}>
        Edit index.js to make changes
      </div>
    </div>
  )
}

export default Home
