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
        ที่เที่ยวกรุงเทพฯ ริมแม่น้ำเจ้าพระยา ไอคอนสยาม อภิมหาโครงการเมือง ที่ตอบโจทย์ทุกไลฟ์สไตล์ที่นำเสนอในรูปแบบของความวิจิตรล้ำสมัย การตกแต่งของไอคอนสยามนั้น เกิดจากทำงานร่วมกับศิลปินแห่งชาติ และศิลปินระดับโลกมากมาย ร่วมกันถ่ายทอดเรื่องราวต่างๆ ของความเป็นไทย ลงในประติมากรรมชิ้นเอกน่าตื่นตาตื่นใจที่จัดแสดงอยู่ทั่วอาคารค่ะ
        ที่อยู่ : 299 ซอยเจริญนคร 5 ถนนเจริญนคร เขตคลองสาน กรุงเทพฯ พิกัด : https://goo.gl/maps/MCtUYcJRU3qSW9vY7 เปิดให้เข้าชม : 10.00-22.00 น.
        โทร : 0-2495-7000 เว็บไซต์ : https://www.facebook.com/ICONSIAM
        <br></br>
      </div>
    </div>
    <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <div className = {styles.center}>
        <h1 >มหานคร สกายวอล์ค King Power Mahanakhon</h1>
        </div> 
        <img src="/img/king.jpg" alt="" layout="fill" objectFit="contain"/>
        มหานคร สกายวอล์ค (Mahanakhon Skywalk) บนชั้น 78 ของตึก คิง เพาเวอร์ มหานคร (King Power Mahanakhon)       เราสามารถมองเห็นวิวพาโรนามา ของเมืองกรุงเทพมหานคร ได้รอบ 360 องศา เราแนะนำว่าให้เดินทางมาที่นี่ในช่วงเวลา 17.00 น. เพราะทุกคนจะสามารถมองเห็นวิว และท้องฟ้าจากด้านบน ทั้งก่อนพระอาทิตย์ตกดิน ไปจนถึงช่วงเวลาพระอาทิตย์ตกดินไปแล้ว นั่นเอง<br></br>
      </div>
      </div>
     
      <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <div className = {styles.center}>
        <h1 >ฮาราจูกุ ไทยแลนด์ Harajuku Thailand</h1>
        </div> 
        <img src="/img/hara.jpg" alt="" layout="fill" objectFit="contain"/>
        ใครที่โหยหาการไป เที่ยวญี่ปุ่น ตามมาเช็คอินกันได้ที่ ฮาราจูกุ ไทยแลนด์ Harajuku Thailand 
        ที่เที่ยวกรุงเทพฯ ย่านสุวินทวงศ์ เหมือนวาร์ปไปเดินอยู่ใจกลางญี่ปุ่นกันเลยทีเดียว โดยถูกเนรมิตให้เป็น หมู่บ้านญี่ปุ่นสุดคลาสสิค ที่เหมือนกับยุคเอโดะซึ่งเต็มไปด้วยบรรยากาศ และกลิ่นอายแบบญี่ปุ่นแท้ๆ อีกทั้งยังมีกิมมิกน่ารักๆ คือ ร้านบริการเช่าชุดยูกาตะ และกิโมโน ครบเซ็ต ให้ใส่เดินเล่นถ่ายรูปกันแบบจัดเต็มไปเลยค่ะ!
        ที่อยู่ : สุวินทวงศ์ 110 แขวงกระทุ่มราย เขตหนองจอก กรุงเทพฯ พิกัด : https://goo.gl/maps/FmZ56iZKjnkDFANp7
        เปิดให้เข้าชม : วันจันทร์ - พฤหัสบดี 10.30-21.00 น. โทร : 08-8928-6154 เว็บไซต์ :  http://www.facebook.com/harajukuth
        <br></br>
      </div>
      </div>
      
      <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <div className = {styles.center}>
        <h1 >ICONSIAM ไอคอนสยาม</h1>
        </div> 
        <img src="/img/icon.jpg" alt="" layout="fill" objectFit="contain"/>
        ที่เที่ยวกรุงเทพฯ ริมแม่น้ำเจ้าพระยา ไอคอนสยาม อภิมหาโครงการเมือง ที่ตอบโจทย์ทุกไลฟ์สไตล์ที่นำเสนอในรูปแบบของความวิจิตรล้ำสมัย การตกแต่งของไอคอนสยามนั้น เกิดจากทำงานร่วมกับศิลปินแห่งชาติ และศิลปินระดับโลกมากมาย ร่วมกันถ่ายทอดเรื่องราวต่างๆ ของความเป็นไทย ลงในประติมากรรมชิ้นเอกน่าตื่นตาตื่นใจที่จัดแสดงอยู่ทั่วอาคารค่ะ
        ที่อยู่ : 299 ซอยเจริญนคร 5 ถนนเจริญนคร เขตคลองสาน กรุงเทพฯ พิกัด : https://goo.gl/maps/MCtUYcJRU3qSW9vY7 เปิดให้เข้าชม : 10.00-22.00 น.
        โทร : 0-2495-7000 เว็บไซต์ : https://www.facebook.com/ICONSIAM
        <br></br>
      </div>
      </div>


      <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <div className = {styles.center}>
        <h1 >The Commons ศาลาแดง</h1>
        </div> 
        <img src="/img/Commons.jpg" alt="" layout="fill" objectFit="contain"/>
         จากทองหล่อ ก็ต้องไม่พลาดพูดถึงที่นี่กันต่อเลยค่ะกับ คอมมูนิตี้แห่งใหม่ The Commons ศาลาแดง 
         ที่เที่ยวใหม่กรุงเทพฯ แหล่งรวมนัดพบปะของคนชิคๆ เต็มไปด้วยร้านอาหาร คาเฟ่ เจ้าดังกันทั้งนั้นเลยค่ะ แถมเดินทางไปก็ไม่ยากด้วย BTS ลงสถานีศาลาแดง หรือ MRT สีลม เท่านั้นเอง
         ที่อยู่ : ศาลาแดงซอย 1 ถนนสีลม เขตบางรัก กรุงเทพฯ พิกัด : https://goo.gl/maps/5gcgksYcRkZZyBqi7
        เปิดให้เข้าชม : 11.00-22.00 น. โทร : -  เว็บไซต์ : https://www.facebook.com/thecommonssaladaeng
        <br></br>
      </div>
      </div>

      <div className={styles.center}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   ติดต่อสอบถามเพิ่มเติม  กดลิงค์ด้านล่าง
  </button>
    <li><a class={styles.contai} href="https://www.facebook.com/">facebook : Bot noi</a></li>
    <li><a class={styles.contai} href="https://www.instagram.com/pimtha/?hl=th"> Instagram : bill_kill</a></li>
      </div>
      </div>
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
