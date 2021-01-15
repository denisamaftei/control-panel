<template>
		<div v-for="ad in ads" :key="ad.key" class="card">
  		<img class="animal-pic" :src='ad.image' alt="Avatar">
  		<div class="container">
			
    		<h4><b>{{ad.title}}</b></h4> 
    		<p>{{ad.petAge}}</p> 
  		</div>
		  <button class="btn">Editare</button>
		  <button class="btn btn-delete">Ștergere</button>
		</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
	  return {
		  ads: []
	  }
  },
    created() {
    this.$store.dispatch("findAll").then((response) => {
      this.ads = response.data;
     
    });
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/*
*  Basic Reset
*/
 
*,
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	height: 100%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
width: 90%;
height: 20vh;
justify-content: center;
align-items: center;
display: inline;
margin-top: 15vh;
margin-right: 5vw;
margin-left: 5vw;
border-radius: 20px;
display: flex;
flex-direction: column;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;

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
.btn:hover {
  background-color: RoyalBlue;
}
.btn-delete {
	background-color: rgb(185, 38, 38);
}
.btn-delete:hover {
	background-color: rgb(122, 38, 38);
}
.animal-pic {
	width: 40%;
	border-radius: 20px;
}
</style>
