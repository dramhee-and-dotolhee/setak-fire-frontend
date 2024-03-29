import styled from "styled-components";
import SplashLogo from "../../assets/fire.svg"

const SplashWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  opacity: 0;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 90;
    }
  }
  -webkit-animation: fadeIn 3s 1s infinite linear;
`

const H1 = styled.h1`
  margin-bottom: 40px;
`

const Img = styled.img`
  width: 100vw;
`

const Strong = styled.strong`
  font-size: 70px;
  color: red;
`

export default function Splash() {
  return (
    <SplashWrap className='fadeIn'>
      <H1>
        <Img src={SplashLogo} alt='logo'/>
        <Strong>Setak-Fire</Strong>
      </H1>
    </SplashWrap>
  )
}
