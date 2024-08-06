import { Icon } from "@iconify/react/dist/iconify.js";

export default function TodoList() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex bg-gray-200 p-3 w-52 justify-between rounded-lg">
        <p>Study</p>
        <div className="flex gap-x-3">
          <button>
            <Icon icon="ion:trash-outline" />
          </button>
          <button>
            <Icon icon="bx:edit" />
          </button>
        </div>
      </div>
    </div>
  );
}
