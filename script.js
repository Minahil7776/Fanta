var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "30% 50%",
        scrub: true,
        // markers: true,
    }
})

tl1.to(".fanta", {
    top: "130%",
    left: "0%",
}, "orange")
tl1.to(".orange2", {
    top: "160%",
    left: "23%"
}, "orange")
tl1.to(".orange", {
    width: "15%",
    top: "162%",
    left :"70%"
}, "orange")
tl1.to(".leaf1", {
    top: "118%",
    rotate: "130deg",
    left: "80%"
}, "orange")
tl1.to(".leaf3",{
    top : "120%",
    left : "0%",
    rotate : "130deg"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})


tl2.from("#lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from("#lemon2",{
    rotate: "90deg",
    left: "110%",
    top: "100%" 
},'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    left: "110%",
    top: "100%" 
},'ca')
tl2.to(".orange2",{
    width:"20%",
    left:"40%",
    top : "217%"
},'ca')
tl2.to(".fanta",{
    width:"35%",
    top :"223%",
    left :"32.5%"
},'ca')

