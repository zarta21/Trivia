import styled from 'styled-components';

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ReloadBtn = styled.button`
    display: flex;
    align-items: center;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-weight: 700;
    font-size: 1em;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #ad5389;
    background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover{
        box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
        opacity: 0.8;
    }
`

const ScoreCard = ({ data, category, score, scoreCard }) => {

    const result = data.filter(el => el.category === category).length
    const reload = () => {
        window.location.reload();
    }

    const emoji = () => {
        if (score < result * 0.2) {
            return <h2><span>🫤</span></h2>
        } else if (score > result * 0.2 && score < result * 0.6) {
            return <h2><span>🙂</span></h2>
        } else if (score > result * 0.6 && score < result * 0.9) {
            return <h2><span>😎</span></h2>
        } else {
            return <h2><span>🥳</span></h2>
        }
    }
  return (
    <>
        {scoreCard && <ScoreContainer>
            <h1>Score: {score}/{result}</h1>
            {emoji()}
            <ReloadBtn onClick={reload}>Tray Again</ReloadBtn>
            </ScoreContainer>
        }
    </>    
  )
}

export default ScoreCard
