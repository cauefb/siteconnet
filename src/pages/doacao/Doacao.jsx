import s from "../Style.module.scss" 
import InfoCard from "../../components/infoCard/infoCard"
import igFamilia from "../../assets/imagens/igFamilia.png"
import pfEscola from "../../assets/imagens/pfEscola.png"
import instituto from "../../assets/imagens/instituto.png"


const Doacao = () => {
  return (
    <main className= {s.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard 
          img = {igFamilia}
          alt='Imagem representando uma família recebendo doações'    
          subtitulo='Instituto grande familia'
          paragrafo='Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.'
          textBotao='Quero Doar'      
          />
        </article>
        <article>
          <InfoCard 
          img = {pfEscola}
          alt='Imagem de livros representando o futuro da educação'    
          subtitulo='Projeto Futuro na Escola'
          paragrafo='Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.'
          textBotao='Quero Doar'      
          />
        </article>
        <article>
          <InfoCard 
          img = {instituto}
          alt='Imagem representando jovens estudando e se desenvolvendo'    
          subtitulo='Instituto Conecta Jovem'
          paragrafo='Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.'
          textBotao='Quero Doar'
          />
        </article>
      </section>
    </main>
  )
}

export default Doacao