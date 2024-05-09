import { MessageCircle } from "lucide-react";
import { indigo } from "tailwindcss/colors";

type PostProps = {
  id: number;
  title: string;
  body: string;
};

export function Post({ title, body }: PostProps) {
  return (
    <li className="w-full flex justify-between gap-4 p-4 rounded-lg bg-white first-child:mt-12">
      <div>
        <strong className="text-indigo-900 text-xl">{title}</strong>
        <p className="text-gray-400">{body}</p>
      </div>
      <span className="flex items-center gap-2 font-bold text-indigo-900">
        <MessageCircle color={indigo["300"]} />4
      </span>
    </li>
  );
}
