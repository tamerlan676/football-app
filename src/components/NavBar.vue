<template>
    <ul>
        <li><router-link to="/news">News</router-link></li>
           <li><router-link to="/news">News</router-link></li>
              <li><router-link to="/news">News</router-link></li>
                 <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
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
}

    

</style>