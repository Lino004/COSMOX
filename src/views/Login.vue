<template>
<div id="login">
   <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h1 class="ui teal  header">
      <div class="content">
       INSCRIPTION
      </div>
    </h1>
    <form class="ui large form">
      <div class="ui stacked ">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon " ></i>
            <input v-model="mail" type="text" name="email" placeholder="E-mail address" style="background-color: rgba(255,255,255,.2);">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon" ></i>
            <input v-model="password" type="password" name="password" placeholder="Password" style="background-color: rgba(255,255,255,.2);">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon" ></i>
            <input v-model="cpassword" type="password" name="password" placeholder="Repeat Password" style="background-color: rgba(255,255,255,.2);">
          </div>
        </div>
        <div  class="ui fluid large teal submit button " style="background-color: grey;" >ENTER
          <div class="ui basic modal">
  <div class="ui icon header">
    <i class="archive icon"></i>
    Archive Old Messages
  </div>
  <div class="content">
    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
  </div>
  <div class="actions">
    <div class="ui red basic cancel inverted button">
      <i class="remove icon"></i>
      No
    </div>
    <div class="ui green ok inverted button">
      <i class="checkmark icon"></i>
      Yes
    </div>
  </div>
</div>
        </div>
      </div>

      <div class="ui error message"></div>

    </form>

    
  </div>
</div>
</div>
  
</template>

<script>
export default {
  name : 'login',
  data () {
    return {
      mail: '',
      password: '',
      cpassword: '',
    }
  }
  
}
 
</script>

<style>

   #login{
     position: absolute;
     height: 100%;
     width: 100%;
     background: url('https://livewallpaper.info/wp-content/uploads/2017/08/Space-1920x1080-wallpaper-wp38010337.jpg');
    } 
    .column {
      max-width: 450px;
    }
    #login > .grid {
      height: 100%;
    }
    .icon{
      color: lightgrey;
    }
    .content{
      color:white;
      letter-spacing: 6px;
      font-family: "lato", sans-serif;
    }
</style>
