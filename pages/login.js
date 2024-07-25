import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('로그인 성공!');
      // 로그인 성공 후 원하는 페이지로 리디렉션
      // 예: window.location.href = '/dashboard';
    } else {
      setMessage(`오류: ${data.error}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/assets/images/image1.jpg" alt="이미지1" />
      </div>
      <div className={styles.loginForm}>
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <input type="submit" value="로그인" className={styles.button} />
        </form>
        {message && <p className={styles.message}>{message}</p>}
        <p><a href="/register">회원가입</a></p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/assets/images/image2.jpg" alt="이미지2" />
      </div>
    </div>
  );
};

export default Login;
