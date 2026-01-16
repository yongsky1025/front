function Button() {
  const handleClick = () => {
    window.alert('버튼 클릭.');
  };
  return (
    <>
      {/* <button className="bg-red-500 p-4" onClick={handleClick}>
        버튼
      </button> */}
      <button
        className="bg-red-500 p-4"
        onClick={() => {
          alert('버튼 클릭.');
        }}
      >
        버튼
      </button>
    </>
  );
}

export default Button;
