import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <Link href='/photos'>Look photos</Link>
      </nav>
    </main>
  )
}
