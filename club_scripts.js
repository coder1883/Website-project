gsap.from("#CCIT img",{
    opacity: 0,
    x: -100,
    duration: 1.5,

})
gsap.from("#CCIT #Total_content_club",{
    opacity: 0,
    duration: 1,
    delay: 1.25,
    scrollTrigger: {
        trigger: "#CCIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})

//ANIMATIONS FOR CMIT
gsap.from("#CMIT img",{
    opacity: 0,
    rotation: 90,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#CMIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})
gsap.from("#CMIT #Total_content_club",{
    opacity: 0,
    duration: 1,
    x: 100,
    delay: 1.25,
    scrollTrigger: {
        trigger: "#CMIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})

//ANIMATIONS FOR CSIT
gsap.from("#CSIT img",{
    opacity: 0,
    x: -100,
    rotaiton: -90,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#CSIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})
gsap.from("#CSIT #Total_content_club",{
    opacity: 0,
    y:100,
    duration: 1,
    delay: 1.25,
    scrollTrigger: {
        trigger: "#CSIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})

//ANIMATIONS FOR ESI
gsap.from("#ESI img",{
    opacity: 0,
    y:200,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#ESI",
        toggleActions: "restart restart none none",
        start: "top 30%",
    }
})
gsap.from("#ESI #Total_content_club",{
    opacity: 0,
    y: -200,
    duration: 1,
    scrollTrigger: {
        trigger: "#ESI",
        toggleActions: "restart restart none none",
        start: "top 30%",
    }
})

//ANIMATIONS FOR PARSEC
gsap.from("#Parsec img",{
    opacity: 0,
    x: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#Parsec",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})
gsap.from("#Parsec .Total_content_club",{
    opacity: 0,
    duration: 1,
    delay: 1.25,
    scrollTrigger: {
        trigger: "#Parsec",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})

//ANIMATIONS FOR PROTEUS
gsap.from("#Proteus img",{
    opacity: 0,
    x: 100,
    rotation: 90,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#Proteus",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})
gsap.from("#Proteus #Total_content_club",{
    opacity: 0,
    duration: 1,
    delay: 1.25,
    scrollTrigger: {
        trigger: "#Proteus",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})

//ANIMATIONS FOR PSIT
gsap.from("#PSIT img",{
    opacity: 0,
    x: -200,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#PSIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})
gsap.from("#PSIT #Total_content_club",{
    opacity: 0,
    x: 200,
    duration: 1,
    scrollTrigger: {
        trigger: "#PSIT",
        toggleActions: "restart restart none none",
        start: "top 80%",
    }
})