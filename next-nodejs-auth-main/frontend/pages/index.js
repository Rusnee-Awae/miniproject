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
        <h1 >เปิดโลกพิซซ่า! สิ่งที่คุณอาจจะไม่รู้ เกี่ยวกับ 9 หน้า พิซซ่ายอดฮิต</h1>
        </div>
<body>
<div className={styles.container}>
      <div className={styles.container} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <img src="/img/make.jpg" alt="" layout="fill" objectFit="contain"/>
        พิซซ่าหน้ามาเกอริต้า : ณ ประเทศอิตาลี ในปี คศ.1890 ชายที่ชื่อ ราฟาเอล แอสโปสิโต้ ได้ทำพิซซ่านี้ไปถวายพระราชินีมาเกอริต้า โดยหน้าบนพิซซ่านั้นเป็นสัญลักษณ์สีของธงประเทศอิตาลี โดยใช้ใบเบซิลแทนสีเขียว มอสซาเรลล่าชีสแทนสีขาว และมะเขือเทศแทนสีแดง ถือว่าพิซซ่าหน้านี้เป็นพิซซ่าที่เก่าแก่และเป็นพิซซ่าหน้าแรกของโลกเลยแหละ <br></br>
      </div>
      <div className={styles.container} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <img src="/img/hawa.jpg" layout="fill" alt="" objectFit="contain"/>
        พิซซ่าหน้าฮาวายเอี้ยน : พิซซ่าหน้านี้ถูกคิดขึ้นจากประเทศแคนาดา ในปี คศ.1962 โดย แซม พาโนพาโอลัส ในร้านที่มีชื่อว่า Satellite Restaurant จากความสำเร็จในร้านอาหารเล็กๆ กลายเป็นความสำเร็จที่ยิ่งใหญ่ เพราะตอนนี้เวลาสั่งพิซซ่าทีไร ใครๆ ก็สั่งแต่หน้าฮาวายเอี้ยนๆ <br></br>
      </div>
    </div>
    <div className={styles.container} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <img src="/img/waja.jpg" layout="fill" alt="" objectFit="contain"/>
        พิซซ่าหน้าวาเจเทเรียน : นี่เป็นพิซซ่าที่ถูกคิดค้นมาเพื่อคนทานมังสวิรัติโดยเฉพาะ เป็นหน้าที่มีผักหลากหลายชนิด ไม่ใช่แค่เหมาะกับคนทานมังสวิรัติอย่างเดียวแต่เหมาะกับคนรักสุขภาพด้วย <br></br>
      </div>

      <div className={styles.container} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <img src="/img/fi.jpg" layout="fill" alt="" objectFit="contain"/>
        พิซซ่าหน้าปลาแอนโชวี่และมะกอกดำ : พิซซ่าสไตล์อิตาเลียนแท้เหมาะกับคนที่ชอบทานปลาเค็ม เพราะ ปลาแอนโชวี่จะให้รสเค็ม ทานคู่กับมะกอกดำที่มีให้รสเฝื่อน บวกกับซอสมะเขือเทสเข้มข้นยิ่งทำให้รสชาติเข้ากันอย่างลงตัว<br></br>
      </div>
  

<ul>
  <li className={styles.contai}><a data-email="johndoe@example.com" href="mailto:johndoe@example.com">ติดต่อ</a></li>
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
