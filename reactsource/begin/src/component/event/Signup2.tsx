import { useState } from 'react';

const Signup2 = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    message: '',
    username: '',
  });

  // 분해
  const { message, username } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="username"
          id=""
          className="boarder p-2"
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          id=""
          className="boarder p-2"
          onChange={onChange}
        />
        {/* <button type="submit" className="m-2 bg-orange-500 p-2">
          send
        </button> */}
      </form>
      <h3 className="text-2xl">
        {username} : {message}
      </h3>
    </>
  );
};

export default Signup2;
