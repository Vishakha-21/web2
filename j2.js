var t1=gsap.timeline()
t1.from("#nav img,#nav h3 ,#nav h4,#nav button",{
    y:-100,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.5,
})
t1.from("#main h1",{
    y:200,
    opacity:0,
    stagger:0.3,
}

)
t1.from("#main>img",{
    opacity:0,
    scale:0,
    stagger:0.5,
})
t1.from("h5",{
    opacity:0,
    scale:0,
})
t1.to("h5",{
    y:40,
    repeat:-1,
    yoyo:true,
})