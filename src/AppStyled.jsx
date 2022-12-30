import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body{
    background-color: #ccc;
  }
`;

const AppContainer = styled.div`
  
`;
const HeaderContainer = styled.div`
  background-color: white;
  padding: 10px 0;
  display: flex;
`;
const HeaderLeft = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
`;
const HeaderRight = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  margin: 0 20px;
`;
const LogoFb = styled.div`
  svg{
    color: #4287f5;
    font-size: 40px;
    margin: 0 10px;
  }
`;
const SearchFb = styled.div`
  background-color: rgb(230, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 45px;

  svg{
    color: gray;
    font-size: 15px;
  }
`;
const MenuFb = styled.div`
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  padding: 8px 10px;

  svg{
    color: gray;
    font-size: 24px;
  }

  :hover{
    background-color: rgb(200, 200, 200);
    border-radius: 5px;
  }
`;
const PlusBtn = styled.div`
  background-color: rgb(230, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 45px;
  margin-right: 5px;

  svg{
    color: black;
    font-size: 15px;
  }
  cursor: pointer;
`;

const StoriesContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
const StoriesCard = styled.div`
  width: 19%;
  margin-right: 1%;
  padding: 0;
  padding-top: 25%;
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  p{
    color: white;
    font-size: 14px;
    padding: 10px;
  }
`;

const FeedContainer = styled.div`
  background-color: white;
  padding: 10px;
`;
const FeedForm = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  img{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  input{
    position: relative;
    top: -15px;
    margin-left: 2%;
    width: calc(98% - 40px);
    height: 50px;
    background-color: rgb(240, 240, 240);
    border-radius: 20px;
    padding-left: 20px;
    font-size: 16px;
    border: 0;
  }

  input:focus{
    outline: 0;
  }
`;
const FeedIcons = styled.div`
  padding: 20px 4px;
  display: flex;
`;
const IconSingleVideo = styled.div`
width: 32%;
text-align: center;
  svg{
    vertical-align: middle;
    font-size: 18px;
    color: #f02849;
  }

  span{
    font-weight: bold;
    font-size: 12px;
    color: gray;
    margin: 0 4px;
  }
`;
const IconSingleImage = styled.div`
width: 28%;
text-align: center;
  svg{
    vertical-align: middle;
    font-size: 18px;
    color: #45bd62;
  }

  span{
    font-weight: bold;
    font-size: 12px;
    color: gray;
    margin: 0 4px;
  }
`;
const IconSingleSmile = styled.div`
width: 40%;
text-align: center;
  svg{
    vertical-align: middle;
    font-size: 18px;
    color: #feb928;
  }

  span{
    font-weight: bold;
    font-size: 12px;
    color: gray;
    margin: 0 4px;
  }
`;

const FeedPostContainer = styled.div`

`;
const FeedPostSingle = styled.div`
  margin: 20px 0;
  background-color: white;
`;
const FeedPostProfile = styled.div`
  padding: 10px;
  img{
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
  }
  h3{
    display: inline-block;
    vertical-align: middle;
    padding: 8px 10px;
  }
  h3 > span{
    font-weight: normal;
    font-size: 14px;
  }
`;
const FeedPostContent = styled.div`
  img{
    width: 100%;
    display: block;
  }

  p{
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

export {
  GlobalStyle,
  AppContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  LogoFb,
  SearchFb,
  MenuFb,
  PlusBtn,
  StoriesContainer,
  StoriesCard,
  FeedContainer,
  FeedForm,
  FeedIcons,
  IconSingleVideo,
  IconSingleImage,
  IconSingleSmile,
  FeedPostContainer,
  FeedPostSingle,
  FeedPostProfile,
  FeedPostContent
}