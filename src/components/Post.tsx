import { MessageCircle } from "lucide-react";
import { indigo } from "tailwindcss/colors";
import { useComments } from "../hooks/useComments";

type PostProps = {
  id: number;
  title: string;
  body: string;
};

export function Post({ id, title, body }: PostProps) {
  const { comments } = useComments(id);

  return (
    <li className="w-full flex justify-between gap-4 p-4 rounded-lg bg-white first-child:mt-12">
      <div>
        <strong className="text-indigo-900 text-xl">{title}</strong>
        <p className="text-gray-400">{body}</p>
      </div>
      <span className="flex items-center gap-2 font-bold text-indigo-900 cursor-pointer">
        <MessageCircle color={indigo["300"]} />
        {comments.length}
      </span>
    </li>
  );
}
