import GithubCorner from '../src/components/GithubCorner'
import HeaderP from '../src/components/HeaderP'
import InputDados from '../src/components/Input'
import ButtonLose from '../src/components/ButtonLose'
import ButtonWin from '../src/components/ButtonWin'

function MyApp() {
  return (
    <div>
      <HeaderP />
      <InputDados />
      <ButtonLose />
      <ButtonWin />
      <InputDados />

      <GithubCorner projectUrl="https://github.com/AlanPoveda" />
    </div>
  )
}

export default MyApp
