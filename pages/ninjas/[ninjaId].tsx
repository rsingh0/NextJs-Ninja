import React from 'react'

// NextJs Generates pages for each path (NinjaId) using SSG(Also learn about getServerSideProps, getInitialProps), 
// Hence all the pages will be readily available before requesting them. 
export const getStaticPaths = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {ninjaId: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}

// I know you have questions, Learn about getServerSideProps, getInitialProps.
// This technique is just about/using Static Site Generation.

// Also, getStaticPaths and getStaticProps executes together at buld time, id's in for of params from getStaticPaths
// will be available to context in getStaticProps, but both will run 10 times or no of ninjas available in the api
export const getStaticProps = async (context) => {
    const id = context.params.ninjaId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {ninja: data}
    }

}

const NinjaDetails = ({ ninja }) => {
  return (
    <div>
        <h1>{ninja.name}</h1>
        <h3>{ninja.email}</h3>
        <h3>{ninja.website}</h3>
        <h3>{ninja.address.city}</h3>
    </div>
  )
}

export default NinjaDetails