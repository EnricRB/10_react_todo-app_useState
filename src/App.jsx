import "./App.css";
import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { ListHeader } from "./ListHeader";
import { ItemsList } from "./ItemsList";
import { ListContainer } from "./ListContainer";
const App = () => {
  const itemsList = [
    {
      id: 1,
      title: "Completar el proyecto",
      description: "Terminar la aplicación de React",
      status: "in progress"
    },
    {
      id: 2,
      title: "Revisar código",
      description: "Hacer code review del proyecto",
      status: "pending"
    },
    {
      id: 3,
      title: "Actualizar documentación",
      description: "Documentar los cambios realizados",
      status: "done"
    },
    {
      id: 4,
      title: "Completar el proyecto",
      description: "Terminar la aplicación de React",
      status: "in progress"
    },
    {
      id: 5,
      title: "Revisar código",
      description: "Hacer code review del proyecto",
      status: "pending"
    },
    {
      id: 6,
      title: "Actualizar documentación",
      description: "Documentar los cambios realizados",
      status: "done"
    }
  ]

  return (
    <div className="app">
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={itemsList} />
      </ListContainer>
    </div>
  )
}

export default App