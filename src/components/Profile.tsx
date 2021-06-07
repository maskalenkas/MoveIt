import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.6435-9/118669137_1752061564931936_4558939990037588710_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGp6MNsupNXXJzWQbfsajMSDcKaUAa_PCwNwppQBr88LAlLUFHclzHr_SMw-V-AYK-88eY5apO4yx6FlCTLeNcB&_nc_ohc=-HDW6a5yyJAAX9AHFO5&_nc_ht=scontent.fcgh7-1.fna&oh=55df4ddffc5623ad1744bb5a6fb10927&oe=60E279E2" alt="Imagem de perfil" />
      <div>
        <strong>Arthur Maskalenkas</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}