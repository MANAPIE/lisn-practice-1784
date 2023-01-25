<template>
  <section class="section-01">
    <div class="cover-video">
      <picture class="poster">
        <source srcset="https://1784.navercorp.com/assets/img/cover-poster--pc.jpg" media="(min-width: 640px)">
        <img srcset="https://1784.navercorp.com/assets/img/cover-poster--mo.jpg" alt="네이버 1784 Brand flim">
      </picture>
      <video loop
             playsinline
             muted
             autoplay>
        <source src="https://vod-homepage.pstatic.net/cdn-vod/1784/siteBG_PC_0408.mp4" type="video/mp4" media="(min-width: 640px)">
        <source src="https://vod-homepage.pstatic.net/cdn-vod/1784/siteBG_mobile_750_0408.mp4" type="video/mp4">
        <span class="blind">네이버 1784 Brand flim</span>
      </video>
    </div>
    <div class="cover-title">
      <p class="cover-title__item">1784</p>
      <p class="cover-title__item">THE</p>
      <p class="cover-title__item">TEST</p>
      <p class="cover-title__item">BED</p>
      <div class="cover-title__scroll-down">
        <img src="https://1784.navercorp.com/assets/img/coach-scroll.svg"
             alt="Scroll down">
      </div>
    </div>
    <div class="cover-content">
      <div class="cover-logo">
        <img src="https://1784.navercorp.com/assets/img/naver.svg"
             alt="네이버" />
      </div>
      <div class="cover-description">
        <p class="cover-description__item">
          1784는 네이버의 새로운 사옥이 가진 이름이자 지번이며, 최초의 산업혁명이 시작된 해입니다.
        </p>
        <p class="cover-description__item">
          산업혁명이 인류의 삶을 바꿔 놓았던 것처럼, 1784를 거대한 TESTBED 삼아 끊임없이 실험하고 도전하며 새로운 내일을 만들어 갑니다.
        </p>
        <p class="cover-description__item">
          <a href="https://tv.naver.com/v/26204650"
             target="_blank"
             class="cover-description__button">
            <span>브랜드 필름 보기</span>
          </a>
          <a href="javascript:;"
             class="cover-description__button"
             role="button">
            <span>스토리 바로 보기</span>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section-01',

  created () {

  },

  methods: {

  },

  computed: {
    titleFontSize () {
      return ((120 - Math.min(100, this.scrollTop)) * 0.7) + 'em'
    },

    titleOpacity () {
      if (this.scrollTop < 250)
        return Math.min(50, this.scrollTop - 180) * 0.02
      return 1 - Math.min(70, this.scrollTop - 250) * (7 / 100)
    },

    title1Opacity () {
      return 1 - Math.min(70, this.scrollTop - 250) * (7 / 100)
    },

    title1Transform () {
      // 시작값 + Math.min(최대값(작동길이), Math.max(0, (this.scrollTop - 작동시작점) * 속도)) * 배율(최대값 고려) -> 작동시작점에서부터 시작값+최대값만큼 움직임
      return `translate(${-50 - Math.min(100, Math.max(0, (this.scrollTop - 100) * 2)) * 0.25}%,
                        ${-50 - Math.min(100, Math.max(0, (this.scrollTop - 150) * 2)) * 1.5}%)`
    },

    title1Left () {
      return `${50 - Math.min(50, Math.max(0, (this.scrollTop - 250)))}%`
    },

    title2Left () {
      if (this.scrollTop < 250)
        return `${Math.min(50, Math.max(0, (this.scrollTop - 180)))}%`
      return `${50 + Math.min(70, Math.max(0, (this.scrollTop - 250))) * (5 / 7)}%`
    },

    title3Left () {
      if (this.scrollTop < 250)
        return `${100 - Math.min(50, Math.max(0, (this.scrollTop - 180)))}%`
      return `${50 - Math.min(70, Math.max(0, (this.scrollTop - 250))) * (5 / 7)}%`
    },

    title4Left () {
      if (this.scrollTop < 250)
        return `${Math.min(50, Math.max(0, (this.scrollTop - 180)) * 1.1)}%`
      return `${50 + Math.min(70, Math.max(0, (this.scrollTop - 250))) * (5 / 7)}%`
    },

    titleScrollOpacity () {
      return 1 - Math.min(50, this.scrollTop - 250) * 0.02
    },

    contentLogoOpacity () {
      if (this.scrollTop < 320)
        return Math.min(20, this.scrollTop - 300) * 0.05
      return 1 - Math.min(20, this.scrollTop - 320) * 0.05
    },

    contentLogoTransform () {
      return `translate(-50%,
                        ${-50 - Math.min(20, Math.max(0, (this.scrollTop - 300))) * (5 / 2)}%)`
    },

    contentDescription1Opacity () {
      return Math.min(30, this.scrollTop - 340) * (3 / 100)
    },

    contentDescription2Opacity () {
      return Math.min(30, this.scrollTop - 370) * (3 / 100)
    },

    contentDescription3Opacity () {
      return Math.min(30, this.scrollTop - 400) * (3 / 100)
    },

    contentDescriptionTop () {
      return `${50 - Math.max(0, Math.min(100, this.scrollTop - 450))}%`
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
.section-01 {
  position: relative;
  width: 100vw;
  height: 600vh;
  color: #FFFFFF;
  background-color: #000000;
  overflow: hidden;

  .cover-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .poster {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    video {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cover-title {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: v-bind('titleFontSize');
    line-height: 0.9;
    background-color: rgba(0, 0, 0, 0.4);

    .cover-title__item {
      &:nth-child(1) {
        position: absolute;
        top: 50%;
        left: v-bind('title1Left');
        transform: v-bind('title1Transform');
        opacity: v-bind('title1Opacity');
      }

      &:nth-child(2) {
        position: absolute;
        top: 50%;
        left: v-bind('title2Left');
        transform: translate(-20%, -100%);
        opacity: v-bind('titleOpacity');
      }

      &:nth-child(3) {
        position: absolute;
        top: 50%;
        left: v-bind('title3Left');
        transform: translate(-70%, 0);
        opacity: v-bind('titleOpacity');
      }

      &:nth-child(4) {
        position: absolute;
        top: 50%;
        left: v-bind('title4Left');
        transform: translate(-20%, 100%);
        opacity: v-bind('titleOpacity');
      }
    }

    .cover-title__scroll-down {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -75%);
      font-size: 1px;
      opacity: v-bind('titleScrollOpacity');
    }
  }

  .cover-content {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .cover-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 67px;
      opacity: v-bind('contentLogoOpacity');
      transform: v-bind('contentLogoTransform');
    }

    .cover-description {
      position: absolute;
      top: v-bind('contentDescriptionTop');
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      line-height: 1.67;
      font-weight: bold;
      max-width: 500px;

      .cover-description__item {
        margin-bottom: 2.5rem;

        &:nth-child(1) {
          opacity: v-bind('contentDescription1Opacity');
        }

        &:nth-child(2) {
          opacity: v-bind('contentDescription2Opacity');
        }

        &:nth-child(3) {
          margin-bottom: 0;
          opacity: v-bind('contentDescription3Opacity');
        }

        .cover-description__button {
          position: relative;
          display: block;
          max-width: 440px;
          padding: 0 1.3em;
          margin-top: 3.5em;
          font-size: 1em;
          line-height: 2.6em;
          color: #FFFFFF;
          border: 3px solid #FFFFFF;
          border-radius: 3.25em;
          background-color: rgba(0,0,0,.2);
          text-decoration: none;
          text-align: left;
          box-sizing: border-box;

          &::after {
            content: "";
            position: absolute;
            right: 1em;
            top: 50%;
            width: 1.5em;
            height: 1.5em;
            background-image: url(https://1784.navercorp.com/assets/img/btn-more.svg);
            transform: translate(0, -50%);
            background-size: contain;
            background-repeat: no-repeat;
          }

          &:nth-child(2) {
            margin-top: 1em;
            background-color: #FFFFFF;
            color: #000000;

            &::after {
              background-image: url(https://1784.navercorp.com/assets/img/btn-anchor.svg);
            }
          }
        }
      }
    }
  }
}
</style>
