import '@/app/style/style.global.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="container-fluid px-4 py-3">
        <h1>HOME</h1>
        <hr />
        <Link href={'/movies'} className='btn btn-dark'>View Movies</Link>
      </div>
    </>
  )
}
