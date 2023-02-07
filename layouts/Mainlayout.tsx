import Head from "next/head";

interface Props{
    title?:string;
    children?:React.ReactNode
}

const Mainlayout=({title,children}:Props)=>{
    return(
        <>
        <Head>
            <title>{title||'demo'}</title>
            <link rel="stylesheet" href="" />
        </Head>
        <main>
          {children}
        </main>
        </>
    )
}


export default Mainlayout