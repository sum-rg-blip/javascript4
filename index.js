let photos=document.querySelector("#slider")
let nextbutton = document.querySelector("#nextbtn")
let pervbutton = document.querySelector("#perbtn")
let endbtn = document.querySelector("#end")
let images=[
  "https://img.freepik.com/free-photo/closeup-shot-cheetah-walking-savanna-plane-nambia_181624-10595.jpg?t=st=1721128771~exp=1721132371~hmac=934c8edfae62919d8033b177e9bbe2656ea0ee0b7472595eb26458642d49923e&w=740",
  "https://img.freepik.com/free-psd/bald-american-eagle-isolated_23-2151190901.jpg?t=st=1721128882~exp=1721132482~hmac=14f46b74937406f8f6ac0f16eb48fa6c472c45d360b55fc62c86bf54920d8559&w=740",
  "https://img.freepik.com/free-photo/monkey-lifestyle-natural-view_23-2150789968.jpg?t=st=1721128895~exp=1721132495~hmac=f6d28255f383ac6bd809b12d08a5f197fd40c69c1997aae782042db8149aed39&w=740",
  "https://img.freepik.com/premium-photo/kangaroo-meadow-with-orange-flowers-3d-render_872754-5230.jpg?w=740",
  "https://img.freepik.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg?t=st=1721129715~exp=1721133315~hmac=c67c9ee8fda12bc9cd8f64d94c12b9c7feb1be48bd1f5055f7671cd5d95fc49c&w=360"
  ]
let indexnumber=0
slider.src = images[indexnumber]
nextbutton.addEventListener("click",function(){
  if(indexnumber<images.length -1){
  indexnumber++
  slider.src=images[indexnumber]
  }

  if(indexnumber==images.length -1){
    endbtn.innerhtml="reached end"
    endbtn.stlye.backgroundColor="white"
    
   }
})

 pervbutton.addEventListener("click",function(){
  if(indexnumber>0){
  indexnumber--
  slider.src=images[indexnumber]
  }
})