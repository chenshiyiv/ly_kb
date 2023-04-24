<template>
  <div class="notfound">
    <div id="clouds">
      <div class="cloud c1"></div>
      <div class="cloud c3"></div>
      <div class="cloud c2"></div>
      <div class="cloud c4"></div>
    </div>
    <div class="content">
      <div class="title">该功能暂未开放！敬请期待！</div>
      <el-divider></el-divider>
      <div>
        <el-button round @click="go(1)">回到首页</el-button>
        <el-button type="primary" round @click="go(-1)">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    let methods = {
      go(type) {
        if (type == 1) {
          router.push("/");
        } else {
          router.go(-1);
        }
      },
    };
    return {
      ...methods,
    };
  },
};
</script>

<style lang="scss" scoped>
.notfound {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0476f8;
  color: #fff;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Orbitron, Orbitron-Bold;
    text-align: center;
    height: 100%;
    .title {
      font-size: 2rem;
    }
    .el-divider--horizontal {
      width: 33%;
    }
    .el-button {
      margin: 0 2rem;
    }
  }
}

.cloud {
  width: 350px;
  height: 120px;
  background: #fff;
  background: linear-gradient(top, #fff 100%);
  background: -webkit-linear-gradient(top, #fff 100%);
  background: -moz-linear-gradient(top, #fff 100%);
  background: -ms-linear-gradient(top, #fff 100%);
  background: -o-linear-gradient(top, #fff 100%);
  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  position: absolute;
  margin: 120px auto 20px;
  z-index: 0;
  transition: ease 1s;
}

.cloud:after,
.cloud:before {
  content: "";
  position: absolute;
  background: #fff;
  z-index: -1;
}

.cloud:after {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50px;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
}

.cloud:before {
  width: 180px;
  height: 180px;
  top: -90px;
  right: 50px;
  border-radius: 200px;
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
}

.c1 {
  top: -50px;
  left: 100px;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
  opacity: 0.9;
  -webkit-animation: moveclouds 15s linear infinite;
  -moz-animation: moveclouds 15s linear infinite;
  -o-animation: moveclouds 15s linear infinite;
}

.c3 {
  top: -80px;
  left: 250px;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
  -webkit-animation: moveclouds 17s linear infinite;
  -moz-animation: moveclouds 17s linear infinite;
  -o-animation: moveclouds 17s linear infinite;
}

.c2 {
  left: 250px;
  top: 30px;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
  //   opacity: 0.6;
  -webkit-animation: moveclouds 25s linear infinite;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;
}

.c4 {
  left: 470px;
  botttom: 20px;
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.75;
  -webkit-animation: moveclouds 18s linear infinite;
  -moz-animation: moveclouds 18s linear infinite;
  -o-animation: moveclouds 18s linear infinite;
}

@-webkit-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}

@-moz-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}

@-o-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
</style>
