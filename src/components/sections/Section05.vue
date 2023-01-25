<template>
  <section class="section-05">
    <div class="contents__title--text">
      <div class="contents__title--text-title">
        우리의 도전은<br />
        진행형
      </div>
      <p class="contents__title--text-description">
        수많은 시행착오 속에서 던져진 도전과 질문은 새로운 정답을 찾아가는 과정이라 믿습니다.<br />
        오늘도 우리는 그 과정 속에서 성장하고 있고,<br />
        새로운 미래를 향한 실험과 도전은 계속되고 있습니다.
      </p>
    </div>
    <div class="challenge__wrap">
      <ul class="challenge__list">
        <li class="challenge__item">
          <a href="https://www.youtube.com/watch?v=3YVvmEl-yyM&amp;t=8s" class="challenge__link" target="_blank" onclick="nclk(this, 'challenge.smartlife', '', '', 1)">
            <div class="challenge__img-wrap">
              <picture class="challenge__img">
                <source srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-1.jpg" media="(min-width: 640px)">
                <img srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-1-m.jpg" alt="">
              </picture>
            </div>
            <div class="challenge__text-wrap">
              <strong class="challenge__title">듣다보면 똑똑해지는 라이프</strong>
              <span class="challenge__text">SF 영화 속 미래기술</span>
            </div>
          </a>
        </li>
        <li class="challenge__item">
          <a href="https://www.youtube.com/watch?v=EoeqxTray1E" class="challenge__link" target="_blank" onclick="nclk(this, 'challenge.quest', '', '', 1)">
            <div class="challenge__img-wrap">
              <picture class="challenge__img">
                <source srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-2.jpg" media="(min-width: 640px)">
                <img srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-2-m.jpg" alt="">
              </picture>
            </div>
            <div class="challenge__text-wrap">
              <strong class="challenge__title">조승연의 탐구생활</strong>
              <span class="challenge__text">창의적인 공간의 조건</span>
            </div>
          </a>
        </li>
        <li class="challenge__item">
          <a href="https://www.youtube.com/watch?v=tnqjXUozMA0&amp;t=149s" class="challenge__link" target="_blank" onclick="nclk(this, 'challenge.knowledgeplay', '', '', 1)">
            <div class="challenge__img-wrap">
              <picture class="challenge__img">
                <source srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-3.jpg" media="(min-width: 640px)">
                <img srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-3-m.jpg" alt="">
              </picture>
            </div>
            <div class="challenge__text-wrap">
              <strong class="challenge__title">김지윤의 지식 PLAY</strong>
              <span class="challenge__text">로봇 석학이 말하는 1784</span>
            </div>
          </a>
        </li>
        <li class="challenge__item">
          <a href="https://tv.naver.com/v/27493759" class="challenge__link" target="_blank" onclick="nclk(this, 'challenge.story1', '', '', 1)">
            <div class="challenge__img-wrap">
              <picture class="challenge__img">
                <source srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-4.png" media="(min-width: 640px)">
                <img srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-4-m.png" alt="">
              </picture>
            </div>
            <div class="challenge__text-wrap">
              <strong class="challenge__title">1784 STORY</strong>
              <span class="challenge__text">FaceSign의 독보적 기술력</span>
            </div>
          </a>
        </li>
        <li class="challenge__item">
          <a href="https://tv.naver.com/v/28615963" class="challenge__link" target="_blank" onclick="nclk(this, 'challenge.story2', '', '', 1)">
            <div class="challenge__img-wrap">
              <picture class="challenge__img">
                <source srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-5.jpg" media="(min-width: 640px)">
                <img srcset="https://1784.navercorp.com/assets/img/challenge/challenge-thumb-5-m.jpg" alt="">
              </picture>
            </div>
            <div class="challenge__text-wrap">
              <strong class="challenge__title">1784 STORY</strong>
              <span class="challenge__text">1784에 5G를 설치한 이유</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section-05',

  created () {

  },

  methods: {

  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.section-05 {
  position: relative;
  width: 100vw;
  color: #000000;
  background-color: #FFFFFF;
  font-weight: bold;
  padding: 30vh 0;
  
  .contents__title--text {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;

    .contents__title--text-title {
      font-size: 4em;
      line-height: 1.21;
      width: 400px;
    }
    
    .contents__title--text-description {
      line-height: 1.67;
      font-size: 1.85em;
    }
  }

  .challenge__wrap {
    .challenge__list {
      display: flex;
      flex-wrap: wrap;
      max-width: 1140px;
      margin: 2em auto;

      .challenge__item {
        display: inline-block;
        width: 33.3333%;
        margin-top: 2.5em;
        padding: 0 1.125em;
        box-sizing: border-box;

        .challenge__link {
          overflow: hidden;
          display: block;
          position: relative;
          border-radius: 1rem;
          box-shadow: 4px 8px 40px rgba(0, 0, 0, 0.15);
          text-decoration: none;

          .challenge__img-wrap {
            position: relative;
            overflow: hidden;
            height: 56.1538461538%;

            .challenge__img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .challenge__text-wrap {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: center;
          text-align: center;
          min-height: 106px;
          padding: 0 1em;
          background-color: #fff;
          color: #000;
          box-sizing: border-box;

          .challenge__title {
            font-size: 1.5em;
            line-height: 2em;
          }

          .challenge__text {
            display: block;
            width: 100%;
            margin-bottom: 0.8em;
            font-weight: normal;
            font-size: 1.3em;
          }
        }
      }
    }
  }
}
</style>
