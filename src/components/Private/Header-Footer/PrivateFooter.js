import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function PrivateFooter() {
    return (
        <Footer>
            <h1>Habitos</h1>
            <div>
                <CircularProgressbar
                    value={55}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </div>
            <h1>Histórico</h1>
        </Footer>
    )
}

const Footer = styled.footer`
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;

font-family: 'Lexend Deca';
font-size: 18px;
line-height: 22px;
color: #52B6FF;

position: fixed;
bottom: 0;
z-index: 1;

div{
    width: 90px;
    height: 90px;
    margin-bottom: 40px;
}

`

