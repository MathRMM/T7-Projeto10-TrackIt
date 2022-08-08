import styled from 'styled-components'

export default function PrivateHeader({ image }) {

    return (
        <Header>
            <h1>TrackIt</h1>
            <img src={image} />
        </Header>
    )
}

const Header = styled.header`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
z-index: 1;

font-family: 'Playball', cursive;
color: white;
padding: 0 16px;
font-size: 40px;
line-height: 49px;


img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: white;
}
`

