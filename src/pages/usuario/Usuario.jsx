import s from "./usuario.module.scss"
import { MdOutlinePlace,  MdOutlineMail,
  MdOutlineCalendarToday} from "react-icons/md"

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/61958005?v=4" alt="Imagem do perfil do usuário" />
        <div className={s.div}>
          <h1>Cauê Ferreira</h1>
          <h2>Voluntário Ativo</h2>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
          <ul>
            <li><MdOutlinePlace />São Paulo - SP</li>
            <li><MdOutlineMail />caue@gmail.com</li>
            <li>< MdOutlineMail/>Membro desde Janeiro de 2022</li>
          </ul>
          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assietência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Usuario