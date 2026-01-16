import type { ReactNode } from 'react';

type BtnProps = {
  message: string;
  children: ReactNode;
};

function AlertButton({ message, children }: BtnProps) {
  return (
    <button className="bg-red-500 p-4" onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Button2() {
  // 버튼이 클릭되면 alert('버튼클릭')

  return (
    <>
      <AlertButton message={'playing'}>Play Movie</AlertButton>
      <AlertButton message={'uploading'}>Upload Image</AlertButton>
    </>
  );
}

export default Button2;
