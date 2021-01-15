<template>
  <div class="about">
     <form id="msform">
  
  <!-- fieldsets -->
  <fieldset>
    <h1 class="fs-title">Intră în cont</h1>
    <input type="text" name="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" name="pass" placeholder="Password" />
    <input  type="button" name="next" class="next action-button" value="Conectează-te" />
  </fieldset>
</form>

  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {

	data(){
		return {
			email: "",
			password: ""
		}
	},		
  methods: {
	login() {
		this.$store.dispatch("login", {
			email: this.email,
			password: this.password
	})
		.then((res) => {

			Cookies.set("user-login", "1", { expires: 365});
			Cookies.set("uuid", res.data.userId, { expires: 365 });

		})
		.catch(error => {
			console.log(error)
		});
	}
  }
}
</script>

<style lang="scss">

html,body {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  height: 100%;
}
body {
	font-family: montserrat, arial, verdana;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background:  linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
}
input {
  border-radius: 10px;
}
/*custom font*/
@import url(https://fonts.googleapis.com/css?family=Montserrat);


/*form styles*/
#msform {
	width: 400px;
	margin: 50px auto;
	text-align: center;
	position: relative;
}
#msform fieldset {
	background: white;
	border: 0 none;
	border-radius: 3px;
	box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
	padding: 20px 30px;
	box-sizing: border-box;
	width: 80%;
	margin: 0 10%;
	
	/*stacking fieldsets above each other*/
	position: relative;
}

/*inputs*/
#msform input {
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
}
/*buttons*/
#msform .action-button {
	width: 150px;
	background: #27AE60;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
}
#msform .action-button:hover, #msform .action-button:focus {
	box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
	font-size: 15px;
	text-transform: uppercase;
	color: #2C3E50;
	margin-bottom: 10px;
}
</style>

