import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoList from "./TodoList";
import axios from "axios";
import { useState } from "react";

export default function MainSection() {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const postList = useMutation({
    mutationFn: async (newItem) => {
      try {
        const res = await axios.post("http://localhost:3000/list", newItem);
        return res.data;
      } catch (e) {
        console.log(e.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getList");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    postList.mutate({
      action: text,
      id: +new Date(),
    });
  };

  //   const deleteList = useMutation({mutationFn: async () => {
  //      try{
  //        const res = await axios.delete("http://localhost:3000/list")
  //      }catch(e){
  //         console.log(e.message)
  //      }
  //   }})

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
        <p className="font-semibold text-3xl mb-4">My Todo List</p>

        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What to do..."
            className="border-[1px] border-black p-2 rounded-lg outline-none"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="bg-gray-300 p-2 rounded-2xl">
            Add
          </button>
        </form>

        <TodoList />
      </div>
    </>
  );
}
