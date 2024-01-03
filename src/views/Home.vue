<template>
  <main>
    <NavBar></NavBar>
    <article>
      <div class="about-container">
        <h2 class="secondary-font italic">Creative Developer</h2>
        <p>Hi, my name is <span class="secondary-font italic">Axel</span>, I'm 20 and I come from <span
            class="secondary-font italic">France</span> 🥖. I'm currently studying for a bachelor's degree in "multimedia
          and internet professions". I'm a web developer, more front-end oriented, with an attraction for web design,
          layout
          and graphics. I've been working with html and css for over 6 years now, first out of curiosity, then I developed
          a
          passion for web development, and I'm now developing my js skills.&nbsp;&nbsp;
          <router-link class="not-text-link click-btn" :to="{ name: 'About' }"><span>More</span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13H25" stroke="var(--color-bg)" stroke-width="3" stroke-linecap="round"/><path d="M13 25L13 1" stroke="var(--color-bg)" stroke-width="3" stroke-linecap="round"/></svg></router-link>
        </p>
      </div>
      <div class="social-container">
        <ul>
          <li><a href="mailto:hello@axelmarcial.com" class="not-text-link link-hover link-svg"><span>Email</span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25L26 1M26 1H2M26 1V25" stroke="var(--color-text)" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg></a></li>
          <li><a href="https://www.linkedin.com/in/lepremieraxel/" class="not-text-link link-hover link-svg"><span>LinkedIn</span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25L26 1M26 1H2M26 1V25" stroke="var(--color-text)" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg></a></li>
          <li><a href="https://dribbble.com/lepremieraxel" class="not-text-link link-hover link-svg"><span>Dribbble</span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25L26 1M26 1H2M26 1V25" stroke="var(--color-text)" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg></a></li>
          <li><a href="https://www.instagram.com/lepremieraxel/" class="not-text-link link-hover link-svg"><span>Instagram</span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25L26 1M26 1H2M26 1V25" stroke="var(--color-text)" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg></a></li>
          <li><a href="" class="not-text-link link-hover link-svg"><span>Mentions Légales</span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25L26 1M26 1H2M26 1V25" stroke="var(--color-text)" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg></a></li>
        </ul>
      </div>
      <div class="work-container">
        <span>Latest Work</span>
        <router-link :to="{name: 'SingleWork', params: {uid: document.uid}}" class="img-container">
          <PrismicImage :field="document.data.main_img" :alt="document.data.main_img.alt"/>
        </router-link>
      </div>
    </article>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import { useFirstPrismicDocument } from '@prismicio/vue'
const { data: document } = useFirstPrismicDocument("portfolio_item")
</script>

<style scoped>
main {
  min-height: 100vh;
}

article {
  display: grid;
  grid-template-areas:
    "about latest"
    "social latest";
    gap: 1rem;
  height: calc(100vh - 11.5rem);
  padding: 0 0 var(--pad-nav-top) 0;
}

@media screen and (max-width: 1100px) {
  article{
    grid-template-areas: 
      "about"
      "latest"
      "social";
    gap: 5rem;
  }
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: about;
  padding: 0 0 0 var(--pad-main-x);
}
@media screen and (max-width: 1100px){
  .about-container{
    padding: 0  var(--pad-main-x);
  }
}

.about-container h2 {
  font-size: 2.5rem;
  font-weight: var(--fw-regular);
}

.about-container p {
  max-width: 95%;
  font-size: 1.2rem;
  padding-left: 1rem;
}

.social-container {
  grid-area: social;
  padding: 0 0 0 var(--pad-main-x);
  display: flex;
  align-items: flex-end;
}
@media screen and (max-width: 1100px){
  .social-container{
    padding: 0  var(--pad-main-x) var(--pad-nav-top);
  }
}

.social-container ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
@media screen and (max-width: 1100px){
  .social-container ul{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }
}

.social-container ul li a {
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  font-size: 1rem;
}

.work-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  grid-area: latest;
  padding: 0 var(--pad-main-x) 0 0;
}
@media screen and (max-width: 1100px){
  .work-container{
    padding: 0  var(--pad-main-x);
  }
}

.work-container span {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
}

.img-container {
  aspect-ratio: 16/9;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  display: flex;
  place-items: center;
}

.img-container > * {
  width: 100%;
  filter: grayscale(1);
}</style>
