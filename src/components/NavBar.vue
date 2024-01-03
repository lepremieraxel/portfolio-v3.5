<template>
  <header>
    <h1 class="nav-logo"><router-link class="not-text-link" :to="{ name: 'Home' }">Axel Marcial</router-link></h1>
    <nav :class="{ active: isActive }">
      <router-link class="not-text-link link-hover" :to="{ name: 'About' } " @click="isActive = !isActive">About</router-link>
      <router-link class="not-text-link link-hover" :to="{ name: 'Work' }" @click="isActive = !isActive">Work</router-link>
      <router-link class="not-text-link link-hover" :to="{ name: 'Contact' }" @click="isActive = !isActive">Contact</router-link>
    </nav>
    <div class="burger" :class="{ active: isActive }" @click="[isActive = !isActive, isScrolling(!isActive)]">
      <span></span><span></span><span></span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

let isActive = ref(false)

function isScrolling(state){
  console.log(state)
  if(!state){
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }
}
</script>

<style scoped>
  header{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--pad-nav-top) var(--pad-nav-x);
  }
  h1{
    margin-right: 3rem;
  }
  h1 a{
    display: flex;
    gap: 1rem;
    font-size: var(--fs-nav-logo);
    text-transform: uppercase;
    font-weight: var(--fw-extrabold);
  }
  nav{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  nav a{
    font-size: var(--fs-nav-link);
    font-weight: var(--fw-medium);
    text-transform: uppercase;
  }
  .burger{
    position: absolute;
    right: var(--pad-nav-x);
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: .8rem;
    width: 3rem;
    z-index: 100;
  }
  .burger span{
    height: .2rem;
    width: 100%;
    background-color: var(--color-text);transition: var(--trans-classic);
  }
  .burger:hover span:nth-child(2){
    width: 80%;
  }
  @media screen and (max-width: 1000px){
    .burger{
      display: flex;
    }
    .burger.active{
      position: fixed;
    }
    .burger.active span:first-child{
      rotate: 45deg;
      translate: 0 1rem;
    }
    .burger.active span:last-child{
      rotate: -45deg;
      translate: 0 -1rem;
    }
    .burger.active span:nth-child(2){
      opacity: 0;
    }
    nav{
      translate: 100% 0;
      z-index: 100;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: var(--color-bg);
      padding: var(--pad-nav-top);
      transition: var(--trans-classic);
    }
    nav.active{
      translate: 0 0;
    }
    nav a{
      font-weight: var(--fw-extrabold);
    }
  }
</style>
