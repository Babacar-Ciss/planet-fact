import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from "styled-components";


const HOME = styled.div`
  height: 100vh;


`



export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/planets/Earth');
  })



  return (
    <HOME>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap" rel="stylesheet" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <h1> Redirecting......    </h1>
    </HOME>
  )
}



// const Planet = ({planet}) => {
//   return (
//       <div>
//           <h1> {planet.name} </h1>
//       </div>
//   );
// }

// // export default Planet;


// export async function getStaticProps () {
//   const result = require("../../data.json");
  
//   console.log(result)

//   return {
//       props : {
//           planet : result[0],
//       }
//   }
// }