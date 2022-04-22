import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const foo = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        fooUser()
    }, [])

    const fooUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/foo`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>Foo</title>
            </Head>
            <div className={styles.container}>
                <Navbar className = {styles.gridContainer} />
                <div className = {styles.maincard}>
                <h1>Foo bar</h1>
                <div>
                    {JSON.stringify(user)}
                </div>
                </div>
               
            </div>
        </Layout>
    )
}

export default withAuth(foo)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}