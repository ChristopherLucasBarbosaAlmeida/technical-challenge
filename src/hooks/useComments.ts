import { useEffect, useState } from "react";
import { axiosInstance } from "../libs/axios";
import { AxiosResponse } from "axios";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function useComments(postId: number) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Comment[]> = await axiosInstance.get("comments", {
        params: {
          postId,
        },
      });
      setComments(response.data);
    })();
  }, [postId]);

  return { comments };
}
