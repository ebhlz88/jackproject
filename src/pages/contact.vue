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
          <div class="flex-column subcol">
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
    margin-top: 10px;
    margin-right: auto;
    margin-left: 15px;
    color: #bdbdbd;

}
.contact input,textarea{
    width: 241px;
    background-color: transparent;
    border: solid 1px rgb(83, 83, 83);
    height: 39px;
    border-radius: 4px;
    color: rgb(88, 88, 88);
    padding-left: 13px;
    font-size: 11px;
}
.contact textarea{
    height: 116px !important
}
.contact .flex-row .flex-column{
    margin: 0px 10px;
}
.subcol{
    margin-left: 26px !important;
}
.subcol input,textarea{
    width: 454px;
}
@media screen and (max-width: 412px) {
    .contact .flex-row{
        flex-direction: column;
    }
    .contact p{
    margin-right: 0;

}
.subcol input, textarea {
  width: 330px;
}
}
</style>