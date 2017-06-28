<template>
  <header>
    <span class="nav-logo"></span>
    <span>
      <input type="search" class="nav-search">
    </span>
    <span class="nav-link">
      <a class="subTitle" v-for="subTitle in subTitles">
        <span :class=subTitle.imageClass></span>
        <span :class=subTitle.textClass>{{ subTitle.text }}</span>
      </a>
      <span class="nav-link-log">
          <a class="login"><span>注册</span></a>
          <a class="logout"><span>登陆</span></a>
      </span>
    </span>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        subTitles: [
          {
            imageClass: 'homeLogo',
            textClass: 'homeLogoText',
            text: '首页'
          },
          {
            imageClass: 'videoLogo',
            textClass: 'videoLogoText',
            text: '视频'
          },
          {
            imageClass: 'discoverLogo',
            textClass: 'discoverLogoText',
            text: '发现'
          },
          {
            imageClass: 'gameLogo',
            textClass: 'gameLogoText',
            text: '游戏'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin subTitle($url){
    background-image: url(#{$url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 27px 27px;
    width: 27px;
    height: 27px;
    display: inline-block;
   }
  header{
        height: 48px;
        display: flex;
        align-items: center;
        border-top: 2px solid #eb7350;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.3), 0 0 6px 2px rgba(0,0,0,0.15);
        .nav{
          &-logo{
            height: 48px;
            width: 190px;
            background:{
              image: url(../assets/LB_logo.png);
              position: 80px 6px;
              repeat: no-repeat;
              size: 80px 27px;
            }
          }
          &-search{
            height: 27px;
            width: 468px;
            border: 1px solid #ccc;
            background:{
              color: #f2f2f5;
              image: url(../assets/search.png);
              position: 432px 0px;
              repeat: no-repeat;
              size: 27px 27px;
            }
          }
          &-link{
            height: 48px;
            line-height: 60px;
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
            padding-right: 50px;
            a.subTitle{
              padding-left: 26px;
            }
            &-log{
              a{
                bottom: 5px;
                position: relative;
                &.login{
                  padding-left: 24px;
                  padding-right: 12px;
                  border-right: 1px solid #d9d9d9;
                }
                &.logout{
                  padding-left: 12px;
                  padding-right: 24px;
                }
              }
            }
          }
        }
      }
      @each $subTitleName in home, video, discover, game{
        .#{$subTitleName}Logo{
          @include subTitle('../assets/#{$subTitleName}.png');
        }
        .#{$subTitleName}LogoText{
          bottom: 5px;
          position: relative;
        }
      }
</style>
