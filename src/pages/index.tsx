import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect';
import Admin from './admin'
import Public from './public';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
  
    useEffect(() => {
      if (router.asPath === '/admin') {
        router.replace('/admin');
      } 


    }, []);
  
    if (router.asPath === '/admin') {
      return <Admin />;
    }

    return (<>
        <main>
            <div>
                <Public />
            </div>
        </main>
    </>);



//   return (<>
//         <Head>
//             <title>Home</title>
//         </Head>
//         <main>
//             {router.asPath === '/' && (
//             <div>
//                 <Public />
//             </div>
//             )}
//         </main>
//     </>);
}