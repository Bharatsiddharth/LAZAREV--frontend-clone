// var nav = document.querySelector("nav");

// nav.addEventListener("mouseenter", function(){
 

//     tl.to(".nav-bottom h5 span",{
//         opacity:1,
//         delay:1,
//         y:-30,
        // stagger:{
        //     amount:0.7
        // }
//     })

//     tl.from(".nav-bottom h5 span",{
        
        
//         stagger:{
//             amount:0.7
//         }
//     })

// })

// nav.addEventListener("mouseleave", function(){
//     var tl = gsap.timeline()

//     tl.to(".nav-bottom",{
//         bottom: "0%",
//     })

//     tl.to(".nav-bottom h5 span",{
//         opacity:0,
        
       
//     })

//     tl.from(".nav-bottom h5 span",{
        
//         y:-30,
//         stagger:{
//             amount:0.7
//         }
//     })

// })


function navAnimation(){
        let nav = document.querySelector("nav")
    
    nav.addEventListener("mouseenter" , function(){
        var tl = gsap.timeline()
    
        tl.to("nav,.nav-bottom",{
            bottom: "-180%",
        })
        tl.to(".nav-2 h5",{
            opacity:1,
            delay:1
        })
        tl.to(".nav-2 h5 span",{
            y:0,
            // duration:0.5,
            stagger:{
                amount:0.7
            }
        })
    })
    
    
    
    nav.addEventListener("mouseleave" , function(){
        var tl = gsap.timeline()
        tl.to(".nav-2 h5 span",{
            y:25,
            // duration:0.5,
            stagger:{
                amount:0.2
            }
        })
    
        // tl.to(".nav-2 h5",{
        //     opacity:0
        // })
    
        tl.to(".nav-bottom",{
            bottom: "0%",
        })
    
    })
    }


// navAnimation();

function page2Animation(){
    let rightelem = document.querySelectorAll(".right-elem");

rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        console.log(elem.childNodes);
        elem.childNodes[3].style.opacity = 1;
    })

    elem.addEventListener("mouseleave", function(){
        console.log("why hello");
        elem.childNodes[3].style.opacity = 0;
    })

    elem.addEventListener("mousemove", function(dets){
       gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x-50,
        y:dets.y - elem.getBoundingClientRect().y-10
       })
    })

    

})
}

page2Animation();



function page3Animation(){
    
var page3Center = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video");

page3Center.addEventListener("click", function(){
    video.play();
    gsap.to(video, {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0,
    })
})

video.addEventListener("click", function(){
    video.pause();
    gsap.to(video, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: '30px',
    })
})
}

page3Animation();


var cards = [
    {stats:"$400M", heading:"In funding secured to our Designs", Number:"/001"},
    {stats:"+1 million", heading:"Increase In customer Base", Number:"/002"},
    {stats:"1000000+", heading:"Of active marketplace users", Number:"/003"},
    {stats:"25 million", heading:"Monthly e-commerce visits", Number:"/004"},
    {stats:"+300%", heading:"Increase in sign-up conversation rate", Number:"/005"},
    {stats:"+42%", heading:"Increase in app' retention data", Number:"/006"},

];


function blogs(){
    var clutter = '';

    cards.forEach(function(product,idx){
    clutter += `<div class="card h-[38vh] w-[29vw] bg-[#d5d3d3] text-black p-5">
    <h1 class="text-7xl">${product.stats}</h1>
    <p class="text-s py-5">${product.heading}</p>
    <h6 class="py-10">${product.Number}</h6>
</div>`;

})

document.querySelector(".page5").innerHTML = clutter;
}

blogs();



var page6video = document.querySelectorAll(".right-side");

page6video.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load()
    })
})




var cards_page8 = [
    {heading:"Web3", para:"We help long-standing companies reshape and amplify their positions by implementing Web3 technologies. As well as we collaborate with emerging startups to launch innovative web3 products that make a splash in the market"},
    {heading:"E-commerce", para:"Partnering with with $10M+ revenue brands, we expertly scale and solve their business challenges, offering E-commerce website design &amp; development."},
    {heading:"Real Estate", para:"We holistically advocate for a convenient user experience and design digital real estate websites to convey the physical world. By creating user-friendly digital design, we refine the way people perceive your property business"},
    {heading:"FinTech ", para:"We design smart, in-demand financial solutions, delighting your audience with innovations in the finance sector. By putting end-users at the forefront and creating a high-end experience, we improve your business metrics"},
    
    {heading:"AI & ML", para:"Designing digital experience for an AI and ML product, we focus on creating unique differentiators to set your product apart. Our expertise lies in developing intuitive UX while also ensuring that the AI models perform optimally with minimal iterations"}

];


function page8card(){
    var clutter = '';

    cards_page8.forEach(function(product,idx){
    clutter += `<div class="card h-[38vh] flex justify-between flex-col w-[25vw] bg-[#d5d3d3] text-black p-5">
    <div class="flex justify-between text-2xl">
        <h2>${product.heading}</h2>
        <i class="text-3xl ri-arrow-right-up-line"></i>
    </div>
    <p class="flex flex-start text-[0.9vw]">
       ${product.para}

    </p>
</div>`;

})

document.querySelector(".page8-card").innerHTML = clutter;
}

page8card();