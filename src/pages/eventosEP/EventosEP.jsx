import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard"
import jovens from "../../assets/imagens/jovens.png";
import tecnologia from "../../assets/imagens/tecnologia.png";
import carreira from "../../assets/imagens/carreira.png";

const EventosEP = () => {
  return (
        <main className={s.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard
            img={jovens}
            alt="Imagem com as mãos de três pessoas em uma mesa."
            subtitulo="Empoderando Jovens para o Futuro"
            paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            segParagrafo="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={tecnologia}
            alt="Imagem com cinco pessoas compartilhando experiências."
            subtitulo="Tecnologia que Transforma"
            paragrafo="Atividade: Workshop de introdução à programação e inovação digital."
            segParagrafo="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={carreira}
            alt="Imagem com duas mulheres fazendo acompanhamento."
            subtitulo="Carreira e Primeiro Emprego"
            paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
            segParagrafo="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  )
}

export default EventosEP