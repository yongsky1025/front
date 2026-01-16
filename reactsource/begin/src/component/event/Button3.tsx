import type { ReactNode } from 'react';

function PlayButton({ moviename }: { moviename: string }) {
  // 영화명 출력 : Playing 악마는 프라다를 입는다
  const handlePlayClick = () => alert(`Playing! `);

  // 영화명
  return <Button3 onClick={handlePlayClick}>Play "{moviename}"</Button3>;
}

function UploadButton() {
  const handleUploadClick = () => alert(`Uploading! `);

  return <Button3 onClick={handleUploadClick}>Upload Image</Button3>;
}

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

// 함수, children
function Button3({ onClick, children }: ButtonProps) {
  return (
    <>
      <button className="bg-red-500 p-4" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <>
      <PlayButton moviename={'악마가 프라다를 입는다'} />
      <UploadButton />
    </>
  );
}

export default Toolbar;
