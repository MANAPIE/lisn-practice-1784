<template>
  <div class="index">
    <section-01 class="index-section-01"
                :scrollTop="scrollTop" />
    <section-02 class="index-section-02"
                :scrollTop="scrollTop - 400" />
    <section-03 class="index-section-03"
                :scrollTop="scrollTop - 650" />
    <section-04 class="index-section-04"
                :scrollTop="scrollTop - 1250"
                :scrollY="scrollY - outerHeight * 13" />
    <section-05 class="index-section-05" />
  </div>
</template>

<script>
import Section01 from '@/components/sections/Section01'
import Section02 from '@/components/sections/Section02'
import Section03 from '@/components/sections/Section03'
import Section04 from '@/components/sections/Section04'
import Section05 from '@/components/sections/Section05'

export default {
  name: 'IndexPage',

  components: {
    Section01,
    Section02,
    Section03,
    Section04,
    Section05
  },

  created () {

  },

  mounted () {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.onScroll);
  },

  beforeUnmount () {
    document.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll () {
      this.outerHeight = window.outerHeight
      this.scrollY = window.scrollY
      this.scrollTop = window.scrollY / window.outerHeight * 100
    }
  },

  data () {
    return {
      scrollTop: 0,
      scrollY: 0,
      outerHeight: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  .index-section-01 { // height: 600vh;
    z-index: 1;
  }

  .index-section-02 { // height: 400vh (- 200vh);
    z-index: 2;
  }

  .index-section-03 { // height: 700vh (- 100vh);
    z-index: 3;
  }

  .index-section-04 { // height: 100vh + 12580px;
    z-index: 4;
  }

  .index-section-05 {
    z-index: 5;
  }
}
</style>
