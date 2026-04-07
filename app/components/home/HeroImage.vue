<template>
  <div class="hero-content">
    <p class="title">NEON LUCID</p>
    <p class="sub-title">
      Dreams Recorded
      <span class="nowrap">From The City</span>
    </p>
    <div class="content-button">
      <a href="#latest-release">LISTEN NOW</a>
      <a href="#music-video">WATCH VIDEO</a>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url('@/assets/images/hero_bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  aspect-ratio: 16 / 9;
}

.title,
.sub-title {
  font-family: 'Orbitron', sans-serif;
}

.title {
  margin: 0;
  text-align: center;

  font-size: 4rem;
  font-weight: 900;

  color: var(--color-text);
  text-shadow:
    0 0 1px var(--color-neon-blue),
    0 0 4px var(--color-neon-blue),
    0 0 10px var(--color-neon-blue);
}

.sub-title {
  margin-bottom: 24px;
  text-align: center;

  word-break: keep-all;
  overflow-wrap: break-word;

  font-size: 1rem;
  font-weight: 500;

  color: var(--color-text);
  text-shadow:
    0 0 1px var(--color-neon-pink),
    0 0 4px var(--color-neon-pink),
    0 0 10px var(--color-neon-pink);
}

.nowrap {
  white-space: nowrap;
}

.content-button {
  text-align: center;
}

.content-button > a {
  margin: 12px;
  text-decoration: none;

  border: 1px solid white;

  color: var(--color-text);
  text-shadow:
    0 0 1px var(--color-neon-pink),
    0 0 4px var(--color-neon-pink),
    0 0 10px var(--color-neon-pink);

  padding: 8px 24px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    var(--color-neon-blue) -80%,
    var(--color-bg) 50%,
    var(--color-neon-pink) 180%
  );
}
</style>
