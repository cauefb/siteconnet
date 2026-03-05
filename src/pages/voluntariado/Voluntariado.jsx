import s from "../Style.module.scss" 
import InfoCard from "../../components/infoCard/InfoCard"
import Reciclagem from "../../assets/imagens/reciclagem.png";
import aulasTech from "../../assets/imagens/aulasTech.png";
import Esporte from "../../assets/imagens/esporte.png";


const Doacao = () => {
  return (
    <main className={s.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
            img={Reciclagem}
            alt="Imagem de três pessoas carregando caixas de reciclagem."
            subtitulo="Mutirão de reciclagem"
            paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={aulasTech}
            alt="Imagem de três pessoas fazendo aula de informática."
            subtitulo="Aulas de Tecnologia"
            paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            textBotao="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={Esporte}
            alt="Imagem de pessoas se exercitando."
            subtitulo="Esporte e Inclusão"
            paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            textBotao="Quero Participar"
          />
        </article>
      </section>
    </main>
  )
}

export default Doacao