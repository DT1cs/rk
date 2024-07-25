// pages/register.js
import { useState } from 'react';
import styles from '../styles/Register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('회원가입이 성공적으로 완료되었습니다! 이메일을 확인하여 계정을 인증하세요.');
    } else {
      setMessage(`오류: ${data.error}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>회원가입</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Register;
