import { AxiosResponse } from "axios";
import { Plus } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button, Input, Modal, Post } from "./components";
import { axiosInstance } from "./libs/axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Post[]> = await axiosInstance.get("posts");
      setPosts(response.data);
    })();
  }, []);

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      const response: AxiosResponse<Post> = await axiosInstance.post("posts", post);
      setPosts((prev) => [response.data, ...prev]);
      modalRef.current?.close();
      setPost((prev) => ({ ...prev, title: "", body: "" }));
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCloseModal() {
    modalRef.current?.close();
    setPost((prev) => ({ ...prev, title: "", body: "" }));
  }

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center bg-indigo-50">
      <div className="w-1/2 h-2/3 mb-4 overflow-auto">
        <header className="w-1/2 flex justify-between items-center p-4 rounded-md bg-indigo-900 fixed top-16">
          <strong className="text-lg text-white">Posts</strong>
          <Button
            variant="primary"
            leftIcon={() => <Plus />}
            onClick={() => modalRef.current?.showModal()}
          >
            Add Post
          </Button>
        </header>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </ul>
        <Modal
          ref={modalRef}
          title="Create a new post"
          handleClickCloseModal={handleClickCloseModal}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full flex gap-4 items-start"
          >
            <fieldset className="flex-1 flex flex-col gap-4">
              <Input
                label="Title"
                placeholder="Title..."
                value={post.title}
                onChange={(ev) => setPost((prev) => ({ ...prev, title: ev.target.value }))}
              />
              <Input
                label="Body"
                placeholder="Body..."
                isTextArea
                value={post.body}
                onChange={(ev) => setPost((prev) => ({ ...prev, body: ev.target.value }))}
              />
            </fieldset>
            <Button variant="secondary">Reply</Button>
          </form>
        </Modal>
      </div>
    </main>
  );
}
