<template>
    <header class="header">
       <nav class="menu">
            <ul>
        <li><router-link to="/news">News</router-link></li>
           <li><router-link to="/news">News</router-link></li>
              <li><router-link to="/news">News</router-link></li>
                 <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
    </ul>
    </nav>
     <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
               <nav class="menu">
            <ul>
        <li><router-link to="/news">News</router-link></li>
           <li><router-link to="/news">News</router-link></li>
              <li><router-link to="/news">News</router-link></li>
                 <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
    </ul>
    </nav>


    </header>

</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/montserrat-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/montserrat-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}

body{
    padding: 0;
    margin: 0;
}

.header{
    display: flex;
    justify-content: center;
    background-color:orange;
    align-items: center;
    margin-top: 40px;
    height: 60px;
    position: relative;
}

.menu ul{
    padding: 0px;
    margin: 0;
}

.logo img{
    width: 150px;
}

ul{
    list-style: none
}
li{
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
}
a{
    text-decoration: none;
     font-family: 'Montserrat';
     color: white;
}

    

</style>