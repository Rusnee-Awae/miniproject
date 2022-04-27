import Head from 'next/head' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import 'next/image'
export default function Home({ token }) {
  
  return (
    
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Navbar />
        <div className = {styles.center}>
        <h1 >สถานที่ยอดนิยมที่สุดในแต่ละจังหวัด</h1>
        </div>
<body >
<div class={styles.gallery}>
    <img src="/img/prom.jpg" alt="Cinque Terre" width="600" height="400"/>
  <div class={styles.desc}>แหลมพรมเทพ จังหวัดภูเก็ต</div>
</div>

<div class={styles.gallery}>
    <img src="/img/sa.jpg" alt="Forest" width="600" height="400"/>
  <div class={styles.desc}>หาดสมิหลา จังหวัด สงขลา </div>
</div>

<div class={styles.gallery}>
    <img src="/img/sy.jpg" alt="Forest" width="600" height="400"/>
  <div class={styles.desc}>Skywalk อัยเยอร์เวง จังหวัด ยะลา </div>
</div>

<div class={styles.gallery}>
    <img src="/img/s.jpg" alt="Forest" width="600" height="400"/>
  <div class={styles.desc}>ศาลเจ้าแม่ลิ้มกอเหนี่ยว จังหวัด ปัตตานี  </div>
</div>

<div class={styles.gallery}>
    <img src="/img/a.jpg" alt="Forest" width="600" height="400"/>
  <div class={styles.desc}>อ่าวนาง จังหวัด กระบี่ </div>
</div>

<div class={styles.gallery}>
    <img src="/img/t.jpg" alt="Forest" width="600" height="400"/>
  <div class={styles.desc}>ล่องแก่งวังสายทอง จังหวัด สตูล  </div>
</div>

<body>

<div class={styles.header}>
</div>

<div class={styles.container}>

  <div class={styles.divv}>
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
    <video class={styles.container}  width="200" controls>
      <source src="/img/phuket.mp4" type="video/mp4"/>
    </video>
  </div>
  </div>


</body>
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
