<template>
  <div>
      <div class="w3-container">
  <h2>Slideshow Indicators</h2>
  <p>An example of using buttons to indicate how many slides there are in the slideshow, and which slide the user is currently viewing.</p>
</div>

<div class="w3-content w3-display-container" style="max-width:800px">
  <img class="mySlides" src="../assets/test.png" style="width:100%">
  <img class="mySlides" src="../assets/ps.png" style="width:100%">
  <img class="mySlides" src="../assets/figma.png" style="width:100%">
  <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
    <div class="w3-left w3-hover-text-khaki" @click="plusDivs(-1)">&#10094;</div>
    <div class="w3-right w3-hover-text-khaki" @click="plusDivs(1)">&#10095;</div>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" v-on:click="currentDiv(1)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" v-on:click="currentDiv(2)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" v-on:click="currentDiv(3)"></span>
  </div>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            slideIndex : 1,
        }
    },
methods:{
plusDivs(n) {
  this.showDivs(this.slideIndex += n);
},

currentDiv(n) {
  this.showDivs(this.slideIndex = n);
},

showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[this.slideIndex-1].style.display = "block";  
  dots[this.slideIndex-1].className += " w3-white";
}
}
}
</script>

<style>
.mySlides {display:none}
.w3-left, .w3-right, .w3-badge {cursor:pointer}
.w3-badge {height:13px;width:13px;padding:0}
</style>