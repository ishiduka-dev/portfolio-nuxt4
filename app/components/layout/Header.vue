<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <NuxtLink to="/">NEON LUCID</NuxtLink>
      </div>
      <div class="header__menu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
    <div class="header__soft-border" />
  </header>
</template>

<style lang="css" scoped>
.header__content {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg);
  padding: 16px;
}

.header__logo > a {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

.header__logo > a,
.header__menu > a {
  color: var(--color-text);
  text-decoration: none;
}

.header__menu {
  display: flex;
}

.header__menu > a {
  font-size: 1rem;
  margin: auto 12px;
}

.header__soft-border {
  width: 100%;
  height: 1px;
  box-shadow: 0 0 2px var(--color-text);
}
</style>
