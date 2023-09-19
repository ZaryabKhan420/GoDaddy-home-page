
var tl = gsap.timeline();

tl
    .from(".header1",{
    y:50,
    opacity:0,
    duration:1,
    delay:1,
})

    .from(".header2",{
    y:50,
    opacity:0,
    duration:1
})

    .from(".content > h3",{
    opacity:0,
    scale:0.5,
    duration:1,
    delay:0.5
})

    .from(["#img1","#img3"],{
    x:-100,
    scale:1.6,
    opacity:0,
    duration:1,
})

.from(["#img2","#img4"],{
    x:100,
    scale:1.6,
    opacity:0,
    duration:1,
    delay:"-1"
})