const animate = () => {
    window.addEventListener(() => {
        const ball = document.getElementById("ball");
        console.log(ball);
        const animate = document.getElementById("animate");
        console.log(animate);
        const element = document.querySelector(".col");
        console.log(element);
    })
}
export default animate();