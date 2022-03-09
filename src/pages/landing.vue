<template>
  <div id="landing" class="q-pa-md">
      <img src="../assets/back.png" alt="back image" class="backimg">
    <q-layout view="lHh lpr lFf" container style="height: 650px">
      <q-header>
        <q-toolbar>
          <div class="flex-container">
            <div class="row">
              <div style="font-size: 20px">torsig.dev</div>
              <img class="bar" @click="barshow" src="../assets/bar.png" alt="">
            </div>
            
            <div>
                <div id="bar" class="flex">
                    <a href="/">HOME    </a>
                    <a href="/">WORK</a>
                    <a href="/">PROJECTS</a>
                    <a href="/">CONTACT</a>
                </div>
            </div>
            <div>
                <div id="barr" class="flex">
                    <img src="../assets/Subtract1.png" alt="">
                     <img src="../assets/vector.png" alt="">
                    <img src="../assets/Subtract.png" alt="insta">
                   
                </div>
                </div>
            </div>
            
        </q-toolbar>
      </q-header>

      <q-page-container>
       <div class="flex-column let">
           <div><h3>torsig.dev</h3></div>
           <div><button class="letsbuildbtn">LET'S BUILD</button></div>
       </div>

      </q-page-container>
    </q-layout>

  </div>
</template>

<script>
export default {
  data(){
    return{
      x:true,
      y:screen.width
    }
  },
methods: { 
  barshow(){
    if(this.y>420){}
    else{
    if(this.x==true){
    document.getElementById("bar").style.display = "none";
    document.getElementById("barr").style.display = "none";
    this.x=false}
    else{
      document.getElementById("bar").style.display = "flex";
    document.getElementById("barr").style.display = "flex";
    this.x=true
    }
    }
  }
}
}
</script>

<style lang="scss">
.q-pa-md{
    padding: 0;
    color: white;
}
.backimg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 650px;
    background-color: rgba(0, 0, 0, 0.877);
}

/* preferences */
h4{
  margin: 60px;
}
.colorwhite{
    color: white;
}
.bigfontsize{
    font-size: 300%;
}
@font-face {
    font-family: SFpro;
    src: url('../assets/sfpro.ttf');
}
#landing{
    font-family: SFpro;
}
.flex-row{
    display: flex;
  flex-direction: row;
  justify-content: center;
}

/* navbar */
.flex-container {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 10px auto;
  padding: 10px;
}
.flex{
    display: flex;
}
.flex a{
    color: white;
    text-decoration: none;
    margin: 0px 7px;
    font-family: SFpro;
    font-size: 14px;
    font-weight: 0;
}

/* lets start  */
.col{
    margin-top: 150px;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.letsbuildbtn{
    background-color: white;
    border-radius: 25px;
    padding: 10px 27px;
    border: none;
}
.letsbuildbtn:hover{
    cursor: pointer;
}
.let div{
    margin: 70px 0px;
}
#landing .flex img{
  margin: 0 8px;
}
.bar{
  height: 20px;
  display: none;
}
@media screen and (max-width: 412px) {
  #landing .flex-container{
    margin: 0 3px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .bar{display: flex;
  margin-left: auto;
  cursor: pointer;}
  #landing .flex{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #landing .flex img,a{
    margin: 8px 0px;
  }
  .row{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
}

</style>