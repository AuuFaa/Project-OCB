import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className='bg-slate-200'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <ul className='flex gap-4'>
                <Link to='/'><li>Utama</li></Link>
                <Link to='/aturcara'><li>Aturcara</li> </Link>
                <Link to='/lokasi'><li>Lokasi</li></Link>
                <Link to='/rsvp'><li>RSVP</li></Link>
            </ul>
        </div>

    </div>
  )
}
