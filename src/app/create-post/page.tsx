"use client";

import { useMutation } from "@tanstack/react-query";

import { createPost } from "../../queries/createPost";

const CreatePost = () => {
  const CREATE_POST = useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn() {
      return createPost();
    },
  });

  return (
    <div>
      <span>.create-post</span>
      <div>
        <button type="button" onClick={() => CREATE_POST.mutate()}>
          Criar Postagem
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
