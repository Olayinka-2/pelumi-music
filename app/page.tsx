import HomePage from '@/app/component/HomePageComponents/HomePage';
import { getSongs } from '@/lib/queries/getSongs';

export const dynamic = "force-dynamic";


const Home = async () => {
  const songs = await getSongs()
  return (
    <div className='min-h-screen bg-background bg-amb'>
      <HomePage songs = {songs} />
    </div>
  )
}

export default Home