<template>
  <div id="MANAPIE">
    <component class="layout" :key="layoutName" :is="layoutName"/>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  name: 'App',
  components: {
    EmptyLayout
  },
  computed: {
    layoutName () {
      if (!this.$route.matched.length) {
        return null
      }
      const route = Array.from(this.$route.matched).reverse()
          /* eslint-disable no-prototype-builtins */
          .find(item => item.meta.hasOwnProperty('layout'))
      const layout = route ? route.meta.layout : 'empty'
      return `${layout}-layout`
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>

<style lang="scss" scoped>
.layout {
}
</style>