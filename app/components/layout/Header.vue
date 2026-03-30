<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <NuxtLink to="/">NEON LUCID</NuxtLink>
      </div>
      <div class="menu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
    <div class="soft-border" />
  </header>
</template>

<style lang="css" scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg);
  padding: 16px;
}

.soft-border {
  width: 100%;
  height: 1px;
  box-shadow: 0 0 2px var(--color-text);
}

.menu {
  display: flex;
}

.logo > a {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

.logo > a,
.menu > a {
  color: var(--color-text);
  text-decoration: none;
}

.menu > a {
  font-size: 1rem;
  margin: auto 12px;
}
</style>
