import { useRouter } from "next/router"
import styled from "styled-components";


/* POINT 生成する要素を指定し、スタイルをテンプレートリテラルで記述します */
// React要素扱いなので変数名は大文字で記述！
const StyledButton = styled.button`
  margin-inline: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  transition: all 0.3s ease-out;

  /* POINT 疑似クラスの追加 */
  :hover,
  :active {
    opacity: 0.7;
    transform: scale(1.1);
  }
  span {
    color: purple;
  }
  /* POINT メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }

  :global {
    background-color: black;
  }
`;
const StyledSubButton = styled(StyledButton)`
  color: ${(props: React.ButtonHTMLAttributes<HTMLButtonElement>) => props.disabled ? 'red' : 'blue'};
  background-color: ${(props: React.ButtonHTMLAttributes<HTMLButtonElement>) => props.value};
`;

export default function Home() {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/')
  }
  return (
    <>
      <h1>Home</h1>
      <StyledButton onClick={onClickHandler}>
        ボタン
      </StyledButton>
      <StyledSubButton value="pink">
        ボタン2
      </StyledSubButton>
    </>
  )
}