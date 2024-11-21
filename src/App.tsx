import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import mainImg from "./assets/images/Rectangle 1@2x.png";

function App() {
  return (
    <div className="App">
      <Card>
        <Picture src={mainImg} />
        <Description>
          <Header>Headline</Header>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button primary>See more</Button>
          <Button secondary>Save</Button>
        </ButtonWrapper>
      </Card>

      <Card>
        <Picture src={mainImg} />
        <Description>
          <Header>Headline</Header>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button primary>See more</Button>
          <Button secondary>Save</Button>
        </ButtonWrapper>
      </Card>

      <Card>
        <Picture src={mainImg} />
        <Description>
          <Header>Headline</Header>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button primary>See more</Button>
          <Button secondary>Save</Button>
        </ButtonWrapper>
      </Card>

      <Card>
        <Picture src={mainImg} />
        <Description>
          <Header>Headline</Header>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button primary>See more</Button>
          <Button secondary>Save</Button>
        </ButtonWrapper>
      </Card>

      <Card>
        <Picture src={mainImg} />
        <Description>
          <Header>Headline</Header>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button primary>See more</Button>
          <Button secondary>Save</Button>
        </ButtonWrapper>
      </Card>

    </div>
  );
}

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px;
`;

const Picture = styled.img`
  /* border: 2px, solid, red; */
  border-radius: 10px;
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Description = styled.div`
  padding: 0px 10px;
  margin-bottom: 20px;
`;

const Header = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.66667;
  color: #abb3ba;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 0px 10px;
`;

const Button = styled.button<ButtonPropsType>`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  border: 2px solid #4e71fe;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.primary &&
    css<ButtonPropsType>`
      background-color: #4e71fe;
      color: white;
      &:hover {
        background-color: white;
        color: #4e71fe;
      }
    `}

  ${(props) =>
    props.secondary &&
    css<ButtonPropsType>`
      background-color: white;
      color: #4e71fe;
      &:hover {
        background-color: #4e71fe;
        color: white;
      }
    `}
`;

type ButtonPropsType = {
  primary?: boolean;
  secondary?: boolean;
};

export default App;
