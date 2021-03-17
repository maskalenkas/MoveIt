import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/118669137_1752061564931936_4558939990037588710_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGp6MNsupNXXJzWQbfsajMSDcKaUAa_PCwNwppQBr88LAlLUFHclzHr_SMw-V-AYK-88eY5apO4yx6FlCTLeNcB&_nc_ohc=goEEQQNV2y4AX_7-8-3&_nc_ht=scontent.fcgh9-1.fna&oh=dfb70bb20cf3df221684826ca4d36531&oe=605F7133" alt="" />
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