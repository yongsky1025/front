import type { FormEvent } from 'react';

const Signup = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" method="post" onSubmit={onSubmit}>
        <input type="text" name="name" id="" className="boarder p-2" />
        <button type="submit" className="m-2 bg-orange-500 p-2">
          send
        </button>
      </form>
    </>
  );
};

export default Signup;
