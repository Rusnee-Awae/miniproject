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
        <h1 >Open a tourist attraction in Thailand.</h1>
        </div> 
        <body>
  <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <div className = {styles.center}>
        <h1 >ICONSIAM ไอคอนสยาม</h1>
        </div> 
        <img src="/img/icon.jpg" alt="" layout="fill" objectFit="contain"/>
        ที่เที่ยวกรุงเทพฯ ริมแม่น้ำเจ้าพระยา ไอคอนสยาม อภิมหาโครงการเมือง ที่ตอบโจทย์ทุกไลฟ์สไตล์ที่นำเสนอในรูปแบบของความวิจิตรล้ำสมัย การตกแต่งของไอคอนสยามนั้น เกิดจากทำงานร่วมกับศิลปินแห่งชาติ และศิลปินระดับโลกมากมาย ร่วมกันถ่ายทอดเรื่องราวต่างๆ ของความเป็นไทย ลงในประติมากรรมชิ้นเอกน่าตื่นตาตื่นใจที่จัดแสดงอยู่ทั่วอาคารค่ะ<br></br>
      </div>
      </div>
    
</body>

      
<ul>
  <li className={styles.contai}><a data-email="johndoe@example.com" href="mailto:johndoe@example.com">ติดต่อ</a></li>
</ul>
</Head>
</div>
  )

}


export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
