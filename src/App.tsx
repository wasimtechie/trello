import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div  className="
    m-auto
    min-h-screen
    w-full
    items-center
    overflow-x-auto
    overflow-y-hidden
    px-[40px]
">
      <h1 className="text-center text-4xl p-5">Trello</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
