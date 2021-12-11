import {useAuth} from 'libs/hooks/useAuth'
import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
  const user = useAuth()
  if (!user) {
    return (
    <>
      <AppBar />
      <Title>You are not welcome, go away.</Title>
    </>
    )
  }
  
  return (
    <>
    <Title>Render the user's to do list</Title>
    </>
  )

}

export default ToDoPage;
