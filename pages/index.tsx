import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useMemo } from 'react'
import { useDebounce } from 'use-debounce'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ inputValue, setInputValue ] = useState("https://tvax3.sinaimg.cn/large/007YVyKcly1hc4hgfvo76j30rs0rsdp7.jpg")
  const [ debouncedInputVal ] = useDebounce(inputValue, 500)

  const imageUrl = useMemo(() => inputValue.split("/").slice(3).join("/"), [ debouncedInputVal ])

  return (
    <>
      <Head>
        <title>新浪图床 Vercel 反代</title>
        <meta name="description" content="新浪图床 Vercel 反代" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            试着在Input框中输入你在新浪图床上的图片链接
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <input className={styles.input}
            placeholder='输入新浪图床图片链接'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}>
          </input>
          <a className={styles.a} href={imageUrl}>💎https://sina-vercel.wuuconix.link/{imageUrl}</a>
          <img className={styles.logo}
            src={imageUrl}
            alt="sina img"
          />
        </div>

      </main>
    </>
  )
}
