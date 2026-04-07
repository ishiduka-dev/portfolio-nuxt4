<template>
  <div class="about-page">
    <div class="about-page__content">
      <h1>このサイトについて</h1>
      <section>
        <h2>概要</h2>
        <p>ポートフォリオ用の架空のアーティストのページです</p>
      </section>
      <section>
        <h2>デザイン</h2>
        <p>ChatGPTに架空のアーティストのページって頼み、デザインカンプを出力</p>
        <p>全部はやりませんが、要素を参考にしながら実装していきました</p>
        <p>MVとかは実際には無いので適当なYouTubeを設定しています</p>
        <img class="about-page__img" src="/images/design_comp.png" />
      </section>
      <section>
        <h2>TBD</h2>
        <ul>
          <li>SEO対応</li>
          <li>three.jsを使ってきらびやかに</li>
          <li>テストの仕組みの導入</li>
          <li>nuxt/apiを使って何か</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
}

.about-page__img {
  width: 100%;
  max-width: 786px;
}
</style>
