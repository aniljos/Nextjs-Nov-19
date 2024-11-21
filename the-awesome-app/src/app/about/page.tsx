async function AboutPage(){

     //delay
    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h4>About</h4>
            <p>This a Next.js application demostating the features of version 14</p>
        </div>
    )
}

export default AboutPage;