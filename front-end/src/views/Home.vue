<template>

  <div class="home">
    <div class="form__field">
      <input type="search" placeholder="Search">
    </div>
    <HelloWorld 
        :key="index" msg="Welcome to Your Vue.js App" />
        
  </div>
  <button class="btn btn-add">+</button>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {}
};
</script>
<style> 
html, body {
	height: 100%;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
flex-direction: column;
padding-top: 5vh;
}

.align {
  align-items: center;
  display: flex;
  justify-content: center;
}


/* modules/form.css */

::placeholder {
  color: #fff;
  padding: 2%;
}

input {
  background: none;
  border: 0;
  color: #fff;
  font: inherit;
  margin: 0;
  padding: 0;
  height: 3vh;
}

.form__field {
  align-items: center;
  background-color: royalblue;
  border-radius: 0.525em;
  box-shadow: inset 1px 1px 1px royalblue, inset -1px -1px 1px royalblue;
  color: royalblue;
  display: flex;
}

.form--search input[type='search'] {
  flex-grow: 1;
  padding-bottom: 0.75em;
  padding-right: 0.75em;
  padding-top: 0.75em;
}

.form--search input[type='submit'] {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 1.5em;
  order: -1;
  padding: 0.75em;
  text-indent: -999px;
  width: 3em;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;

}
.btn-add {
  position: absolute;
  top: 0;
  right: 0;
}
.btn:hover {
  background-color: RoyalBlue;
}

</style>
