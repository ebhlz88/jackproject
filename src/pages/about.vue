<template>
  <div class="about" style="min-height: 650px">
        <div class="flex-column">
           <div><h4>About</h4></div>
           <p class="abouttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus debitis labore molestiae assumenda culpa. Distinctio, unde. Nemo tempora doloremque, rem enim perspiciatis, dolore possimus necessitatibus unde esse magni voluptatibus sapiente quidem facere et deserunt, reprehenderit cum maiores corrupti omnis magnam beatae. Sit, mollitia nulla. Tempore ratione beatae impedit quas. Est, id debitis? Ex dignissimos explicabo enim nulla rerum eveniet assumenda praesentium, est mollitia ad optio neque quae obcaecati modi voluptatibus expedita vero labore id. Quis iusto velit a quos magnam illo? At consectetur expedita asperiores ipsa. In, cupiditate! Maxime repellat facere quia illum, vero repellendus alias vitae fuga nulla.</p>
            <h6>SKILLS</h6>
            <div class="flex-row icon">
                <div class="flex-column ">
                    <img src="../assets/figma.png" alt="">
                    <p>FIGMA</p>
                </div>
                <div class="flex-column">
                    <img src="../assets/ps.png" alt="">
                    <p>PHOTOSHOP</p>
                </div>
                <div class="flex-column">
                    <img src="../assets/html.png" alt="">
                    <p>HTML</p>
                </div>
                <div class="flex-column">
                    <img src="../assets/css.png" alt="">
                    <p>CSS</p>
                </div>
                </div>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* about us */
.about{
    background-color: #252525;
    color: white;
}
.abouttext{
    max-width: 80%;
}       
.icon .flex-column{
    margin: 0px 10px;
}

@media screen and (max-width: 412px) {
 /* .about{
    height: ;
} */
.icon .flex-column{
    margin: 0px 2px;
}
.icon .flex-column img{
    height: 80px;
}
}

</style>