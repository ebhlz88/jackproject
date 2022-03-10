<template>
  <div class="about" style="min-height: 650px">
    <div class="flex-column">
      <div><h4 class="uppercase">About</h4></div>
      <p class="abouttext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        eveniet quod assumenda doloremque cumque mollitia, iste vero explicabo
        quas modi incidunt quam dicta odit quos placeat magni beatae rerum nisi
        totam temporibus consectetur facilis a. Numquam et corporis, laboriosam
        perferendis quia possimus quaerat tempore earum expedita, distinctio
        voluptatibus qui voluptatem beatae suscipit facere ipsa, fugit atque
        sapiente aspernatur! Odio ab voluptas, fuga beatae autem ad quas eius
        est et facere id praesentium unde! Sequi blanditiis amet in fugit harum
        ab placeat cum omnis fuga quo maxime, mollitia, dolorem voluptates
        quibusdam necessitatibus rem iure exercitationem cumque accusamus error?
        Laboriosam laudantium ipsam ullam dignissimos omnis non rem, aspernatur
        praesentium dolorum sunt consequatur! Ipsa cupiditate officiis molestiae
        impedit! Impedit, dignissimos? Voluptate magni nobis, recusandae sit
        odio perspiciatis consequuntur aspernatur dolore, mollitia illum eius
        unde quos libero. Distinctio mollitia iste corrupti dolorum sit
        architecto similique nihil beatae, nulla, dolor tempore? Optio
        consequatur ea assumenda fugit vitae dolorem consequuntur, dolor
        nesciunt magnam iusto aliquam ullam, consectetur mollitia maiores
        veritatis quos delectus explicabo quam sint! Autem reiciendis, illum
        repellendus, nemo magnam exercitationem at unde soluta facilis ab fuga
        aut. Unde nisi, debitis tempora, suscipit, ullam non voluptas veniam
        provident repudiandae dolorum obcaecati? Id quas rerum delectus?
      </p>
      <h6>SKILLS</h6>
      <div class="flex-row icon">
        <div class="flex-column">
          <img src="../assets/figma.png" alt="" />
          <p>FIGMA</p>
        </div>
        <div class="flex-column">
          <img src="../assets/ps.png" alt="" />
          <p>PHOTOSHOP</p>
        </div>
        <div class="flex-column">
          <img src="../assets/html.png" alt="" />
          <p>HTML</p>
        </div>
        <div class="flex-column">
          <img src="../assets/css.png" alt="" />
          <p>CSS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* about us */
.about {
  background-color: #131313;
  color: white;
}
.abouttext {
  max-width: 80%;
}
.icon .flex-column {
  margin: 0px 15px;
}
.icon .flex-column img {
  height: 100px;
}

@media screen and (max-width: 412px) {
  /* .about{
    height: ;
} */
  .icon .flex-column {
    margin: 0px 2px;
  }
  .icon .flex-column img {
    height: 83px;
    padding: 10px;
  }
}
</style>
