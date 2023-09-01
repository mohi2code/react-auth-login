import { useState } from 'react';

/* eslint-disable jsx-a11y/label-has-associated-control */
const pageStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.75rem',
};

function Login() {
  return (
    <main style={pageStyle}>
      <h1>Login component</h1>
      <LoginForm />
    </main>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Processing!!!');
  }

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <EmailField email={email} setEmail={setEmail} />
      <PasswordField password={password} setPassword={setPassword} />
      <SubmitButton />
    </form>
  );
}

// eslint-disable-next-line react/prop-types
function EmailField({ email, setEmail }) {
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <label htmlFor="email">Email: </label>
      <input value={email} onChange={handleChange} id="email" type="text" />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function PasswordField({ password, setPassword }) {
  function handleChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <label htmlFor="password">Password: </label>
      <input
        value={password}
        onChange={handleChange}
        id="password"
        type="password"
      />
    </>
  );
}

function SubmitButton() {
  return <button type="submit">Submit</button>;
}

export default Login;
