import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Button = styled.button`
background-color: #232323;
color: #fff;
border-radius: 10px;
font-size: 30px;
padding: 10px;
width: 150px;
cursor:pointer;
&:hover{
  background-color: tomato;
}
`

export default function Home() {
  return (
    <div className={styles.container}>
      <p>
      <Button>submit</Button>
      </p>
     <h1 style = {{color:'red'}}>หน้าแรก IndexPage</h1>
     <p className="pages">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet nostrum incidunt ex veniam, repellendus sed deleniti ipsam assumenda facere aut laborum quos! Autem sit doloremque eveniet. Sunt, molestiae quos.</p>
    
     <img src = "/images/login.png"/>
    </div>
  )
}
