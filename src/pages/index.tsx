// Os cookies estão sendo buscados no src/challengesContexts.tsx
// Os cookies estão sendo atualizados constantemente atraves do envio de props para o challengesProvider

import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../components/Profile";
import { GetServerSideProps } from 'next'

import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";

// O componente vai utilizar as informações repassadas do servidor usando o props
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

// As props vão ser retornadas pelo NextJs, e em seguida vou mandar para o challenger para que ele armazene as informações
export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

      <div className={styles.container}>

        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>



            <div>
              <ChallengeBox />


            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// Antes da interface estar na tela, espere essa chamada:
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

// Back-End(Ruby)
// Next.js(node)
// Front-End(React)

// Quando eu acesso a home do meu app:
// Bate na camada Next js( ta rodando o servidor front-end ) > a camada Next.js constroi a camada Front-End buscando os dados da camada Back-End
// Next js > React > back-end

// Dentro da camada do Next.js da para fazer qualquer coisa que um back-end faz. Com o getSrverSideProps, eu posso repassar
// Qualquer coisa que é para o front-end, para que qualquer buscador que esteja carregando o site, espere essas informalções serem respondidas

// Tudo que estiver dentro do componente, requisitando do back-end tradicioinal não vai estar dentro de uma busca do motor do google por exemplo, ou seja, essa chamada vai ser feita pelo browser

