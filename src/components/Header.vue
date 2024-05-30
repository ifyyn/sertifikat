<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isActive = ref(false);
const toggleMenu = () => {
  isActive.value = !isActive.value;
};

</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">H'I.</div>
    <div class="navbar-togle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <ul :class="['navbar-links',{active:isActive}]">
        <li>
            <RouterLink to="/" active-class="active">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="" active-class="active">About</RouterLink>
        </li>
        <li>
            <RouterLink to="/sertifikat" active-class="active">Sertifikat</RouterLink>
        </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: #e6e6e6;
}
.navbar-brand{
    font-size: 1.5rem;
    font-weight: bold;
    color: #4ed492;
}
.navbar-links{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}
.navbar-links li{
    margin: 0 1rem;
}
.navbar-links .active{
    color: #e6e6e6;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}
:hover.active{
    color: #4ed492;
}
.active{
  color: #4ed492;
}
.navbar-togle{
    display: none;
    flex-direction: column;
    cursor: pointer;
}
.navbar-togle .bar{
    width: 25px;
    height: 3px;
    background-color: #4ed492;
    margin: 4px 0;
}
.navbar-togle:hover .bar{
  background-color: #e6e6e6;
}
@media (max-width: 768px) {
  .navbar-brand{
    position: absolute;
    left: 15px;
    top: 15px;

  }  
  .navbar-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  .navbar-links li {
    text-align: center;
    margin: 1rem 0;
  }
  .navbar-togle {
    display: flex;
    position: absolute;
    right: 15px;
    top: 15px;
  }
}

.navbar-links.active {
  display: flex;
  /* position: absolute; */
  /* right: 0; */
}
</style>