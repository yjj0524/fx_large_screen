<template>
    <div class="container">
        <SVGComponent />
        <BGComponent />
    </div>
</template>

<script>
import SVGComponent from "@/components/Index/SVGComponent.vue";
import BGComponent from "@/components/Index/BGComponent.vue";

export default {
    name: "IndexView",
    components: {
        SVGComponent,
        BGComponent,
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
.container {
    width: 3840px;
    height: 100%;
    position: relative;
    background: #131c3e;
    background-image: url("@/static/images/bg.png");
    background-size: 130% 100%;
    background-repeat: no-repeat;
    // animation: animatedBackground 60s linear infinite reverse;

    @keyframes animatedBackground {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 100% 0;
        }
    }

    // background-position: center center;
    // -webkit-animation: scrollToUp 50s linear infinite; /* 引入 scrollToUp动画 */
    // animation: scrollToUp 50s linear infinite;
    // @-webkit-keyframes scrollToUp {
    //     0% {
    //         background-position: 0 0;
    //     }
    //     100% {
    //         background-position: -3840px 0; // 向上滚动则就是图片的高度的负值，否则为图片的宽度，也可以百分比
    //     }
    // }
    // @keyframes scrollToUp {
    //     0% {
    //         background-position: 0 0;
    //     }
    //     100% {
    //         background-position: -3840px 0;
    //     }
    // }
    
}
</style>
