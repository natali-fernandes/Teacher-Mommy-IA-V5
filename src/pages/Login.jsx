
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Dashboard from './Painel';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const entrar = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => setLogado(true))
      .catch(() => alert('Erro ao entrar'));
  }

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => setLogado(true))
      .catch(() => alert('Erro ao cadastrar'));
  }

  if (logado) return <Dashboard />

  return (
    <>
      <div className="bg" />
      <div className="login-box">
        <h1>TEACHER MOMMY IA</h1>
        <input type="email" placeholder="E-MAIL" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="SENHA" onChange={e => setSenha(e.target.value)} />
        <button onClick={entrar}>ENTRAR</button>
        <button onClick={cadastrar}>CADASTRAR</button>
        <p className="footer">Com amor, Teacher Mommy 💗</p>
      </div>
    </>
  )
}
