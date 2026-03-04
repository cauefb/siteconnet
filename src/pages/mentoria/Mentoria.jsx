import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/infoCard"
import mentoria from "../../assets/imagens/mentoria.png";
import experiencia from "../../assets/imagens/experiencia.png";
import acompanhamento from "../../assets/imagens/acompanhamento.png";

const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={mentoria}
            alt="Imagem com as mãos de três pessoas em uma mesa."
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={experiencia}
            alt="Imagem com cinco pessoas compartilhando experiências."
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={acompanhamento}
            alt="Imagem com duas mulheres fazendo acompanhamento."
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  )
}
export default Mentoria