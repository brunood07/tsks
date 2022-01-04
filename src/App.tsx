import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoProvider } from "./hooks/useTodo";

import "./styles/global.scss";
import { TodosModalProvider } from "./hooks/useTodoModal";

function App() {
  return (
    <TodoProvider>
      <TodosModalProvider>
        <Header />
        <Dashboard />
        
        <Footer />
      </TodosModalProvider>
    </TodoProvider>
  );
}

export default App;
