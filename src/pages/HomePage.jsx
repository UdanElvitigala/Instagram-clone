import Post from "../components/home/Post";
import HomeStories from "../components/home/Stories";
import Header from "../components/home/Header"
import ProfileData from "../data/profiles.json"
import PostData from "../data/posts.json"

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeStories data={ProfileData} />
      <Post data={PostData} />
    </div>
  )
}