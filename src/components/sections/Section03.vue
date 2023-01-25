<template>
  <section class="section-03">
    <div class="guide-content">
      <p class="guide-title">
        건물이 기술 그 자체
      </p>
      <div class="guide-description">
        <p class="guide-description__item">
          기술은 혼자 존재할 때 보다 서로 연결되고 합쳐질 때
          더 큰 의미를 갖습니다.
        </p>
        <p class="guide-description__item">
          공간-기술-사람-로봇이 촘촘히 연결되고 융합되는
          도전 속에 일상을 변화시킬 새로움을 만드는 것,
          이것이 우리가 테크 컨버전스에 집중하는 이유입니다.
        </p>
      </div>
    </div>
    <div class="guide-video">
      <div class="threed__video">
        <span class="blind">네이버 1784 주요 기술 소개 영상</span>
      </div>
      <div class="sequence-holder">
        <img v-for="index in 251"
             :key="index"
             :src="`https://static-homepage.pstatic.net/cdn-static/1784/2022/09/sequence/PC/NAVER_1784_PC_Half_${index.toString().padStart(5, '0')}.jpg`"
             :class="[`index-${index}`, { active: index === videoFrame }]">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section-03',

  created () {

  },

  methods: {

  },

  computed: {
    sectionBackground () {
      return `rgba(0, 0, 0, ${Math.min(100, this.scrollTop - 100) * 0.01})`
    },
    titleBottom () {
      if (this.scrollTop < 250)
        return `${Math.min(50, Math.max(0, (this.scrollTop - 200)))}%`
      return `${50 + Math.min(10, Math.max(0, (this.scrollTop - 300)))}%`
    },
    titleTransform () {
      return `translate(-50%,
                        ${100 - Math.min(50, Math.max(0, (this.scrollTop - 200))) * 2}%)`
    },
    titleOpacity () {
      return 1 - Math.min(10, Math.max(0, (this.scrollTop - 300))) * 0.1
    },
    descriptionOpacity () {
      return Math.min(20, Math.max(0, (this.scrollTop - 310))) * 0.05
    },
    descriptionBottom () {
      return `${50 + Math.min(100, Math.max(0, (this.scrollTop - 350)))}%`
    },
    descriptionTransform () {
      return `translate(-50%,
                        calc(50% - ${Math.min(25, Math.max(0, (this.scrollTop - 350))) * 0.5}vh))`
    },
    videoTransform () {
      return `translate(-50%,
                        calc(-50% + ${(25 - Math.min(25, Math.max(0, (this.scrollTop - 350)))) * 0.5}vh))`
    },
    videoWidth () {
      return `${50 + Math.min(25, Math.max(0, (this.scrollTop - 375))) * 2}vw`
    },
    videoHeight () {
      return `${Math.min(50, Math.max(0, (this.scrollTop - 350))) * 2}vh`
    },
    videoFrame () {
      return Math.floor(Math.min(251, Math.max(1, (this.scrollTop - 400))))
    }
  },

  props: ['scrollTop'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.section-03 {
  position: relative;
  width: 100vw;
  height: 700vh;
  margin-top: -200vh;
  color: #FFFFFF;
  background-color: v-bind('sectionBackground');

  .guide-content {
    position: relative;
    z-index: 5;

    .guide-title {
      position: fixed;
      bottom: v-bind('titleBottom');
      left: 50%;
      transform: v-bind('titleTransform');
      opacity: v-bind('titleOpacity');
      font-size: 6.25em;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
    }

    .guide-description {
      position: fixed;
      bottom: v-bind('descriptionBottom');
      left: 50%;
      transform: v-bind('descriptionTransform');
      opacity: v-bind('descriptionOpacity');
      font-size: 1.7em;
      line-height: 1.67;
      font-weight: bold;

      .guide-description__item {
        margin: 1em auto;
        max-width: 490px;
      }
    }
  }

  .guide-video {
    position: fixed;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: v-bind('videoTransform');
    width: v-bind('videoWidth');
    height: v-bind('videoHeight');

    .sequence-holder {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100vw;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        max-width: none;
        object-fit: cover;
        opacity: 0;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
