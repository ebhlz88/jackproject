<template>
  <div class="prowork" style="min-height: 700px">
    <div class="flex-column">
      <h4 class="uppercase">PROFESSIONAL WORK</h4>
      <div class="flex-row smimg">
        <div class="flex-row">
          <div class="relative">
            <img class="proimg" src="../assets/test.png" alt="" />
            <div class="bottom-left">Image Name</div>
            <span class="overlay"></span>
            <span class="overlayr"></span>
          </div>
          <div class="relative">
            <img class="proimg" src="../assets/test.png" alt="" />
            <div class="bottom-left">Image Name</div>
            <span class="overlay"></span>
          </div>
          <div class="relative">
            <img class="proimg" src="../assets/test.png" alt="" />
            <div class="bottom-left">Image Name</div>
            <span class="overlay"></span>
          </div>
        </div>
        <div class="flex-row">
          <div class="relative">
            <img class="proimg" src="../assets/test.png" alt="" />
            <div class="bottom-left">Image Name</div>
            <span class="overlay"></span>
          </div>
          <div class="relative">
            <img class="proimg" src="../assets/test.png" alt="" />
            <div class="bottom-left">Image Name</div>
            <span class="overlay"></span>
            <span class="overlayl"></span>
          </div>
        </div>
      </div>
      <div class="flex-row promain">
        <div>
          <div class="flex-row">
            <img
              class="slider"
              @click="plusDivs(-1)"
              src="../assets/left.png"
              alt=""
            />
            <img class="jj mySlides" src="../assets/test.png" alt="" />
            <img class="jj mySlides" src="../assets/test2.png" alt="" />
            <img
              class="slider"
              @click="plusDivs(1)"
              src="../assets/right.png"
              alt=""
            />
          </div>
          <div class="flex-row">
            <span
              class="w3-badge demo w3-border w3-transparent w3-hover-white"
              v-on:click="currentDiv(1)"
            ></span>
            <span
              class="w3-badge demo w3-border w3-transparent w3-hover-white"
              v-on:click="currentDiv(2)"
            ></span>
            <span
              class="w3-badge demo w3-border w3-transparent w3-hover-white"
              v-on:click="currentDiv(3)"
            ></span>
          </div>
        </div>
        <div class="flex-column prodesc">
          <div class="flex-row">
            <p class="proheader">PROJECT</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="protext">ViralGrowthC.panel</p>
          </div>
          <div class="flex-row">
            <p class="proheader">ROLE</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="protext">ViralGrowthC.panel</p>
          </div>
          <div class="flex-row">
            <p class="proheader">TECH STACK</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="protext">ViralGrowthC.panel</p>
          </div>
          <div class="flex-row">
            <p class="proheader">PLATFORM</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="protext">ViralGrowthC.panel</p>
          </div>
          <div class="flex-row">
            <p class="proheader">DESCRIPTOIN</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="protext desctext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              sequi eveniet molestias reiciendis veniam harum, voluptatum nemo.
              n?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
    };
  },
  mounted() {
    this.showDivs(this.slideIndex);
  },
  methods: {
    plusDivs(n) {
      this.showDivs((this.slideIndex += n));
    },

    currentDiv(n) {
      this.showDivs((this.slideIndex = n));
    },

    showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " w3-white";
    },
  },
};
</script>

<style>
.prowork {
  background-color: #0e0e0e;

  color: white;
}
.proimg {
  height: 106px;
  width: 206px;
  border-radius: 6px;
  margin: 0px 10px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 59%,
    rgba(0, 0, 0, 0.65) 100%
  );
}
.promain {
  margin-top: 75px;
}
.promain .flex-row {
  align-items: center;
}
.promain .jj {
  height: 250px;
  border-radius: 5px;
}
.prodesc {
  width: 490px;
  align-items: start !important;
  padding-left: 14px;
  margin-top: 10px;
}
.prodesc .flex-row {
  border-block-end: solid 1px rgb(97, 97, 97);
}
.prodesc .flex-row:last-child {
  border-block-end: none;
  align-items: start;
}
.prodesc .flex-row p {
  margin: 5px 3px;
}
.proheader {
  width: 107px;
  color: rgb(105, 105, 105);
  font-size: 125%;
}
.protext {
  width: 261px;
  font-size: 16px;
}
.desctext {
  font-size: 13px;
}

@media screen and (max-width: 412px) {
  .proimg {
    height: 50px;
    width: 100px;
  }
  .promain {
    flex-direction: column;
    align-items: center;
  }
  .promain .jj {
    height: 195px;
    width: 81%;
  }
  .protext {
    width: 202px;
  }
  .proheader {
    width: 107px;
  }
  .smimg {
    flex-direction: column;
  }
  .smimg .flex-row {
    margin: 9px 4px;
    justify-content: center;
  }
  .prodesc {
    font-size: 67%;
    padding: 10px;
    width: 367px;
  }
}
/* slider */
.slider {
  height: 30px;
  padding: 7px;
  background-color: #2d2d2d;
  border-radius: 50%;
  margin: 6px;
  width: 28px;
}
.slider:hover {
  cursor: pointer;
}
.mySlides {
  display: none;
}
.w3-left,
.w3-right,
.w3-badge {
  cursor: pointer;
}
.w3-badge {
  height: 9px;
  width: 9px;
  padding: 0;
  margin: 5px 3px;
}
.relative {
  position: relative;
}
.bottom-left {
  position: absolute;
  bottom: 1px;
  right: 17px;
  color: rgb(255, 255, 255);
  z-index: 99;
}
.overlay {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 91%;
  height: 95%;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0));
}
.overlayl {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 91%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.685)
  );
}
.overlayr {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 91%;
  height: 100%;
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.61)
  );
}
</style>
