// type or interface

type ChildProps = {
  name: string;
  color: string;
  age?: number;
};

// 구조분해할당
function Child({ name, color, age = 20 }: ChildProps) {
  // name += ' from Parent'; // 수정 가능

  // function Child(props: ChildProps) {
  // Cannot assign to read only property 'name' of object
  // props.name += ' from Parent'; // readonly개념

  return (
    <>
      <h1 className="text-3xl">자식 컴포넌트</h1>
      <h2 className="text-31">{name}</h2>
      <h2 className="text-31">{color}</h2>
      <h2 className="text-31">{age}</h2>
      {/* <h2 className="text-31">{props.name}</h2>
      <h2 className="text-31">{props.color}</h2> */}
    </>
  );
}

export default Child;
