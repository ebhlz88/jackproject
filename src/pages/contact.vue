<template>
  <div class="flex-column contact">
      <h4>Contact Us</h4>
      <div class="flex-row">
          <div class="flex-column">
              <p>NAME</p>
              <input placeholder="ENTER NAME" type="text">
              <p>EMAIL</p>
              <input placeholder="ENTER EMAIL" type="text">
              <p>COMPANY(OPTOINAL)</p>
              <input placeholder="ENTER COMPANY NAME (OPTIONAL)" type="text">
          </div>
          <div class="flex-column">
              <p>SUBJECT</p>
              <input placeholder="ENTER SUBJECT" type="text">
              <p>MESSAGE</p>
              <textarea placeholder="ENTER MESSAGE" name="" id="" cols="30" rows="4"></textarea>
          </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.contact{
    background-color: #0e0e0e;
    color: rgb(201, 201, 201);
    min-height: 650px;
    
}
.contact .flex-row{
    margin-top: 50px;
}
.contact p{
    margin-bottom: 6px;
    margin-top: 15px;
    margin-right: auto;
    margin-left: 15px;

}
.contact input,textarea{
    width: 300px;
    background-color: transparent;
    border: none;
    border: solid 1px rgb(51, 51, 51);
    height: 36px;
    border-radius: 4px;
    color: rgb(201, 201, 201);
    padding-left: 13px;
}
.contact textarea{
    height: 108px !important
}
.contact .flex-row .flex-column{
    margin: 0px 10px;
}
@media screen and (max-width: 412px) {
    .contact .flex-row{
        flex-direction: column;
    }
}
</style>