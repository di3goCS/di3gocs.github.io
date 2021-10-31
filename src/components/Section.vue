<template>
  <div class="main-section">
      <img alt="Foto circular de Diego em primeiro plano. Diego é um homem negro e está usando uma camisa de gola U branca, está com cabelo raspado e sorrindo. Ao fundo há uma parede azul." src="./../assets/profile.jpg" class="profile"/>
      <div>
        <p class="main-text"> Olá, meu nome é </p>
        <p id="main-word"> Diego </p>
        <p id="sub-text"> estudante de computação, desenvolvedor de software e apaixonado por projetos de educação em computação.</p>
        <div class="info-box">
          <p> 💻 Estudante de Engenharia de Computação na Universidade Estadual de Feira de Santana</p>
          <p> 👨🏾‍💻 Técnico em Desenvolvimento de Sistemas pelo Serviço Nacional de Aprendizagem Industrial</p>
          <p> 👨🏾‍🏫 Bolsista do <a rel="noopener noreferrer" href="http://petengsuefs.net" target="_blank">PET Engenharias UEFS</a></p>
          <p> 💼 Diretor Presidente e Desenvolvedor Fullstack na <a rel="noopener noreferrer" href="https://www.ecompjr.com.br" target="_blank">EcompJr</a></p>
          <p> 📚 Extensionista Voluntário do <a rel="noopener noreferrer" href="https://www.researchgate.net/lab/LESS-Laboratory-for-Education-Software-and-Systems-Roberto-Bittencourt" target="_blank">Laboratório de Educação, Software e Sistemas</a></p>
          <p> 🔎 Acessa meu <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1_QT2XwAeEz_vTSC0VFuZhIyrWLeJte8V/view?usp=sharing" target="_blank">Curriculum Vitae</a> ou meu <a rel="noopener noreferrer" href="http://lattes.cnpq.br/7691484795936785" target="_blank">Curriculum Lattes</a> pra ver tudo direitinho! </p>
        </div>
      </div>
      <h2 class="section-title"> Projetos </h2>
      <div class="deck">
        <Project 
          :projectName="'Meu site'" 
          :projectDescription="'O site foi criado com o propósito de servir como um portfólio para mim. Sendo assim, nada mais justo do que ser o primeiro projeto adicionado aqui.'"
          :projectUrl="'https://github.com/di3goCS/di3goCS.github.io'"
          :technologies="['HTML', 'CSS', 'Vue2']"
        />
        <Project 
          :projectName="'Covid Municipal'" 
          :projectDescription="'O dashboard de monitoramento dos dados sobre o Covid em âmbito municipal foi um projeto sugerido e cocriado com meu amigo Erick. Através desse projeto, começamos a fazer um tracking com uma apresentação mais amigável acerca da situação dessa doença em nosso município.'"
          :projectUrl="'https://github.com/covidmunicipal/covid19-dashboard-irara'"
          :technologies="['HTML', 'Google Sheets', 'Firebase']"
        />
      </div>
      <h2 class="section-title"> Reconhecimentos e Competições </h2>
      <div class="deck">
        <Card 
          :cardName="'1º Lugar - CTF University BTG Pactual (2021)'"
          :cardDescription="'Desafio de Capture the Flag no estilo Jeopardy, agregando desafios nas áreas de Programação, Mobile, Web, Forense, Engenharia Reversa e OSINT.'"
        />
        <Card 
          :cardName="'1º Lugar - Hackathon Mundo SENAI (2019)'"
          :cardDescription="'Hackathon com temática de redução de desperdícios em cadeias de produção. O protótipo desenvolvido foi de uma plataforma de venda de sobras de madeira de marcenarias para artesãos e outras pessoas interessadas.'"
        />
        <Card 
          :cardName="'2º Lugar - Hackathon Mundo SENAI (2018)'"
          :cardDescription="'Hackathon com temática de diminuição de perdas na cadeia de suprimentos. O protótipo desenvolvido foi de uma plataforma de comercialização que intermedia a transação entre pequenos agricultores e clientes finais.'"
        />
      </div>
      <h2 class="section-title"> Tecnologias </h2>
      <div class="tech-deck">
        <Tech :name="'PHP'" :techClass="'devicon-php-plain'" :techTitle="'Ícone do PHP'"/>
        <Tech :name="'Laravel'" :techClass="'devicon-laravel-plain'" :techTitle="'Ícone do Laravel'"/>
        <Tech :name="'Python'" :techClass="'devicon-python-plain'" :techTitle="'Ícone do Python'" />
        <Tech :name="'C'" :techClass="'devicon-c-line-wordmark'" :techTitle="'Ícone do C'"/>
        <Tech :name="'Java'" :techClass="'devicon-java-plain'" :techTitle="'Ícone do Java'"/>
        <Tech :name="'MySQL'" :techClass="'devicon-mysql-plain'" :techTitle="'Ícone do MySQL'"/>
        <Tech :name="'HTML5'" :techClass="'devicon-html5-plain'" :techTitle="'Ícone do HTML5'"/>
        <Tech :name="'CSS3'" :techClass="'devicon-css3-plain'" :techTitle="'Ícone do CSS3'"/>
        <Tech :name="'Javascript'" :techClass="'devicon-javascript-plain'" :techTitle="'Ícone do Javascript'"/>
        <Tech :name="'Vue2'" :techClass="'devicon-vuejs-plain'" :techTitle="'Ícone do VueJS'"/>
      </div>
      <h2 class="section-title"> Publicações </h2>
      <div class="deck">
        <Card 
          :cardName="'A Remote CS0 Workshop Based on Peer Learning: Motivation, Engagement and Self-Regulation of Novice Programmers - IEEE EDUCON (2021)'"
          :workUrl="'https://www.researchgate.net/publication/351274140_A_Remote_CS0_Workshop_Based_on_Peer_Learning_Motivation_Engagement_and_Self-Regulation_of_Novice_Programmers'"
        />
        <Card 
          :cardName="'Estudantes Ensinando Computação para a Comunidade: Uma Experiência através do TISP - EDUCOMP (2021)'"
          :workUrl="'https://sol.sbc.org.br/index.php/educomp/article/view/14482'"
        />
        <Card 
          :cardName="'Da sala à tela: Para o afastamento social, virtualização do Curso de Inclusão Digital - COBENGE (2020)'"
          :workUrl="'http://www.abenge.org.br/sis_submetidos.php?acao=abrir&evento=COBENGE20&codigo=COBENGE20_00164_00003181.pdf'"
        />
        <Card 
          :cardName="'E se nossa oficina não der certo? - V Congresso sobre Tecnologias na Educação (2020)'"
          :workUrl="'https://sol.sbc.org.br/index.php/ctrle/article/view/11392'"
        />
      </div>
      
  </div>
</template>

<script>
import Card from './Card.vue'
import Project from './Project.vue'
import Tech from './Tech.vue'

export default {
  name: 'Section',
  components: {
    Card,
    Project,
    Tech,
  },
}
</script>

<style>

    a {
      color: var(--black-tone);
    }

    .main-section {
      height: 100%;
      padding: 0 12%;
    }

    .profile {
      border-radius: 50%;
      width: 25%;
    }

    .info-box {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      margin: 2% 0;
      padding-left: 3%;
      text-align: left;
    }

    .info-box a {
      text-decoration: none;
      background-color: var(--thirdy-color);
      color: var(--black-tone);
      font-weight: bold;
    }

    .info-box p {
      margin-bottom: 8px;
    }

    .section-title {
      display: flex;
      flex-direction: row;
      border-left: 10px solid var(--thirdy-color);
      margin: 2% 0 1% 2%;
      text-align: left;
    }

    .deck {
      display: flex;
      flex-direction: row;
      width: auto;
    }

    .tech-deck {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      color: var(--secondary-color);
      margin-left: 5px;
    }

    .main-text {
      font-weight: 300;
    }

    #main-word {
      font-size: 4em;
    }

    #sub-text {
      margin: 16px 240px 32px;
    }

    @media (max-width: 768px) {
      .profile {
        width: 50%;
      }

      .main-section {
        padding: 0 2%;
      }

      #sub-text {
        margin: 16px 12px 32px;
      }

      .section-title {
        font-size: 1.2em;
      }

      .deck {
        flex-wrap: wrap;
      }
    }
</style>
