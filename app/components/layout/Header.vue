<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <NuxtLink to="/">NEON LUCID</NuxtLink>
      </div>

      <!-- PCナビ -->
      <div class="header__menu-pc">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>

      <button class="header__hamburger" @click="toggle">☰</button>
    </div>

    <div class="header__soft-border" />

    <!-- SPナビ -->
    <transition name="header__slide">
      <nav v-show="isOpen" class="header__nav-sp">
        <NuxtLink to="/" @click="close">Home</NuxtLink>
        <NuxtLink to="/about" @click="close">About</NuxtLink>
      </nav>
    </transition>

    <div v-show="isOpen" class="overlay" @click="close" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 100;
}

.header__content {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg);
  padding: 16px;
}

.header__logo {
  display: grid;
  place-content: center;
}

.header__logo > a {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
}

.header__logo > a,
.header__menu-pc > a,
.header__nav-sp > a {
  color: var(--color-text);
  text-decoration: none;
}

.header__menu-pc {
  display: flex;
}

.header__menu-pc > a {
  font-size: 1rem;
  margin: auto 12px;
}

.header__soft-border {
  width: 100%;
  height: 1px;
  box-shadow: 0 0 2px var(--color-text);
}

.header__hamburger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: var(--color-text);
}

.header__nav-sp {
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  z-index: 10;
}

.overlay {
  z-index: 5;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.header__slide-enter-active,
.header__slide-leave-active {
  transition: transform 0.3s;
}
.header__slide-enter-from,
.header__slide-leave-to {
  transform: translateX(100%);
}

@include sp {
  .header__menu-pc {
    display: none;
  }

  .header__hamburger {
    display: block;
  }
}
</style>
