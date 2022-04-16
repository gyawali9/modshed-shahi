// fetching data for blog section
function fetchData(){
    fetch("sample-file.json").then(response=>{
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json();
    }).then(data=>{
        const html = data.map(user=>{
            return `
            <div class="user">
                    <div class="user-image"><img src=${user.imageSource} alt=${user.name}></div>
                    <p class="blog-name">${user.name}</p>
                    <p class="blog-date"><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;<span>${user.date}</span></p>
                    <hr/>
                    <p class="user-description">${user.description}                
            </div>         
            `
        }).join("")
        document.querySelector('.blog-body').insertAdjacentHTML("afterbegin", html);
    }).catch(error=>{
        console.log(error)
    })
}
fetchData() 

// function for toggle side menu
var toggleBtn = document.querySelector(".hamburger-icon")
toggleBtn.addEventListener("click", function(){
    if(document.querySelector(".hamburger-menu").style.visibility =="visible"){
        document.querySelector(".hamburger-menu").style.visibility ="hidden"   
    }else{
        document.querySelector(".hamburger-menu").style.visibility ="visible"
    }
})

// Code for generating stars for reviews
document.getElementById("stars").innerHTML = getStars(3.6);

function getStars() {
  let rating = Math.random()*5;

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa-solid fa-star-sharp" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa-solid fa-star-sharp-half-stroke" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa-regular fa-star"> style="color: gold;"></i>&nbsp;');
  return output.join('');
}
getStars()

// tooltip
tippy('#stars', {
    content: `Refresh page for new rating!`,
  });
tippy('.testimonial-video video', {
    content: `Click here for video to play in pop-up option!`,
});  

//   blog loadmore 
let loadMoreBtn = document.querySelector('.blog-btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.user')];
    for (var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none'
    }
}

// video popup
var vid = document.querySelector('.testimonial-video video');
vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src');
}
document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none'
}

// slider section
var check1 = document.getElementById('manual-btn1');
var check2 = document.getElementById('manual-btn2');
var check3 = document.getElementById('manual-btn3');
var check4 = document.getElementById('manual-btn4');
check1.addEventListener('click', function(){
    document.querySelector(".navigation-manual label:nth-child(1)").classList.add('active-btn');
    document.querySelector(".navigation-manual label:nth-child(2)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(3)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(4)").classList.remove('active-btn')
})
check2.addEventListener('click', function(){
    document.querySelector(".navigation-manual label:nth-child(3)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(4)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(1)").classList.remove('active-btn')
    document.querySelector(".navigation-manual label:nth-child(2)").classList.add('active-btn');
})
check3.addEventListener('click', function(){
    document.querySelector(".navigation-manual label:nth-child(4)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(1)").classList.remove('active-btn')
    document.querySelector(".navigation-manual label:nth-child(2)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(3)").classList.add('active-btn');
})
check4.addEventListener('click', function(){
    document.querySelector(".navigation-manual label:nth-child(1)").classList.remove('active-btn')
    document.querySelector(".navigation-manual label:nth-child(2)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(3)").classList.remove('active-btn');
    document.querySelector(".navigation-manual label:nth-child(4)").classList.add('active-btn');
})
