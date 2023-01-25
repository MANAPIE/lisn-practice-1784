<template>
  <section class="section-02">
    <div class="showcase-gallery">
      <picture>
        <source srcset="https://1784.navercorp.com/assets/img/showcase__01--pc.jpg" media="(min-width: 640px)">
        <img srcset="https://1784.navercorp.com/assets/img/showcase__01--mo.jpg" alt="네이버 1784 건물 외관">
      </picture>
    </div>
    <p class="showcase-title">혁신을 현실로.</p>
  </section>
</template>

<script>
export default {
  name: 'Section-02',

  created () {

  },

  methods: {

  },

  computed: {
    titleFontSize () {
      return (7 + Math.min(100, Math.max(0, this.scrollTop - 200))) + 'em'
    },

    titleOpacity () {
      if (this.scrollTop < 250)
        return Math.min(20, this.scrollTop - 150) * 0.05
      return 1 - Math.min(50, this.scrollTop - 250) * 0.02
    },

  },

  props: ['scrollTop'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.section-02 {
  position: relative;
  width: 100vw;
  height: 400vh;
  color: #FFFFFF;
  background-color: #000000;

  .showcase-gallery {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;

    picture {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        max-width: none;
        object-fit: cover;
        z-index: 10;
      }
    }
  }

  .showcase-title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: v-bind('titleFontSize');
    white-space: nowrap;
    opacity: v-bind('titleOpacity');
  }
}
</style>
