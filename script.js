
// gsap

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:.5,
    duration:0
})

tl.to(".page1",{
    y:"-5vh",
    duration:1.5,
    delay:1
})

tl.to(".page1",{
    y:"-0vh",
    rotate:-720,
    scale:1,
    duration:1.7,

})