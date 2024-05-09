import { AxiosResponse } from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Post } from "./components";
import { axiosInstance } from "./libs/axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Post[]> = await axiosInstance.get("posts");
      setPosts(response.data);
    })();
  }, []);

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center bg-indigo-50">
      <div className="w-1/2 h-2/3 mb-4 overflow-auto">
        <header className="w-1/2 flex justify-between items-center p-4 rounded-md bg-indigo-900 fixed top-16">
          <strong className="text-lg text-white">Posts</strong>
          <button className="w-36 p-2 flex justify-center items-center gap-2 bg-fuchsia-600 text-white rounded-md font-semibold">
            <Plus />
            Add post
          </button>
        </header>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
