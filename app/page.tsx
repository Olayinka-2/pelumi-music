import HomePage from '@/app/component/HomePageComponents/HomePage';
import { getLatestSong } from '@/lib/queries/getLatestSong';
import { getSongs } from '@/lib/queries/getSongs';



const Home = async () => {
  const songs = await getSongs()
  const latestSong = await getLatestSong();
  return (
    <div className='min-h-screen bg-background bg-amb'>
      <HomePage songs = {songs} latestSong = {latestSong} />
    </div>
  )
}

export const dynamic = "force-dynamic";
export default Home