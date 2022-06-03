let nex_btn = document.querySelector(".span_right_slider");
let previous_btn = document.querySelector(".span_left_slider");

let img_ulrs = ["img/slider/2.jpg", "img/slider/3.jpg", "img/slider/4.jpg", "img/slider/5.jpg", "img/slider/6.jpg", "img/slider/1.jpg"];
let clicked_ramdom_arr = [];

let img_link = document.querySelector(".slider_image");



nex_btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*img_ulrs.length);
    clicked_ramdom_arr.push(random);
    img_link.setAttribute("src", img_ulrs[random])
    img_link.classList.add("animate__bounceInRight");

    console.log(clicked_ramdom_arr)

    setTimeout(()=>{
        img_link.classList.remove("animate__bounceInRight")
    },1000)

})



let last_clicked_arr=[];
let fix_slice = -1;

previous_btn.addEventListener("click", ()=>{

    let last_clicked = clicked_ramdom_arr.slice(0, fix_slice--);
    last_clicked_arr.push(last_clicked);
    
    last_clicked_arr_length = last_clicked_arr.length;
    previous_slide_arr = last_clicked_arr[last_clicked_arr_length-1];

    img_link.setAttribute("src", img_ulrs[previous_slide_arr[previous_slide_arr.length-1]]);

    img_link.classList.remove("animate__bounceInRight");
    img_link.classList.add("animate__bounceInLeft");

    setTimeout(()=>{
        img_link.classList.remove("animate__bounceInLeft");
    },1000)


    if(previous_slide_arr.length < 1) {
        img_link.remove();
        let no_img_text = document.querySelector(".no_img");

        no_img_text.innerHTML = "No img <br> reload the page";
    }


})