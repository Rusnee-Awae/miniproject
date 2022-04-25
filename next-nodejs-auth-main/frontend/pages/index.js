import Head from 'next/head' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import 'next/image'
export default function Home({ token }) {
 
  return (
    <div className={styles.container}>
      <Head>
      <Navbar />
        <div className = {styles.center}>
        <h1 >Pizza Restaurant in Newyork</h1>
        </div>
<body>

  

<div class= {styles.center}>
<p><img src="img/pizza.png" alt='img'></img></p>
Title of image <br></br>
</div>

<div class= "Box">
<p><img src="img/pizza.png" alt='img'></img></p>
Title of image <br></br>

</div>

<div class= "Box">
<p><img src="img/pizza.png" alt='img'></img></p>
Title of image <br></br>

</div>

<div class= "Box">
<p><img src="img/pizza.png" alt='img'></img></p>
Title of image <br></br>

</div>

<ul>
  <li><a data-email="johndoe@example.com" href="mailto:johndoe@example.com">ติดต่อ</a></li>
</ul>

</body>
      </Head>
        </div>
  )
  
  
}


export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
