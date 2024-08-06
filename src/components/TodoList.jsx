import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TodoList() {
  const { data } = useQuery({
    queryKey: ["getList"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:3000/list");
        return res.data;
      } catch (e) {
        console.log(e.message);
      }
    },
  });

  return (
    <div className="flex flex-col justify-center gap-y-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex bg-gray-200 p-3 w-52 justify-between rounded-lg"
        >
          <p>{item.action}</p>
          <div className="flex gap-x-3">
            <button>
              <Icon icon="ion:trash-outline" />
            </button>
            <button>
              <Icon icon="bx:edit" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
