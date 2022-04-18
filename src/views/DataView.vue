<template>
    <div class="data_view_container">
        <div class="content_box">
            <!-- 背景图-地图 -->
            <img class="map_bg_img" src="@/static/images/map_bg.png" alt="" />
        </div>
        <!-- 画卷 -->
        <div class="scroll_container">
            <div class="scroll_1">
                <div class="scroll_1_1"></div>
                <div class="scroll_1_2">
                    <div class="scroll_img_1"></div>
                </div>
            </div>
            <div class="scroll_2">
                <div class="scroll_2_1"></div>
                <div class="scroll_2_2">
                    <div class="scroll_img_2"></div>
                </div>
            </div>
        </div>
        <!-- 左边遮布 -->
        <div class="cover_cloth_left"></div>
        <!-- 右边遮布 -->
        <div class="cover_cloth_right"></div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    name: "DataView",
    data() {
        return {};
    },
    mounted() {
        this.MoveScroll();
    },
    methods: {
        MoveScroll() {
            // 左卷轴向左移动
            anime({
                targets: ".scroll_container .scroll_1",
                translateX: -1690,
                loop: 1,
                easing: "linear",
                duration: 1500,
            });

            // 左卷轴里的图片向左移动
            anime({
                targets: ".scroll_1 .scroll_img_1",
                translateX: -1050,
                loop: 1,
                easing: "linear",
                duration: 1500,
            });

            // 右卷轴向右移动
            anime({
                targets: ".scroll_container .scroll_2",
                translateX: 1692,
                loop: 1,
                easing: "linear",
                duration: 1500,
            });

            // 右卷轴里的图片向右移动
            anime({
                targets: ".scroll_2 .scroll_img_2",
                loop: 1,
                easing: "linear",
                translateX: 1200,
                duration: 1500,
            });

            // 移动左边遮布
            anime({
                targets: ".data_view_container .cover_cloth_left",
                translateX: -1690,
                loop: 1,
                easing: "linear",
                duration: 1500,
            });

            // 移动右边遮布
            anime({
                targets: ".data_view_container .cover_cloth_right",
                translateX: 1690,
                loop: 1,
                easing: "linear",
                duration: 1500,
            });
        },
    },
};
</script>
<style lang="less" scoped>
.data_view_container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeeee;
    overflow: hidden;
    .content_box {
        width: 3390px;
        height: 1080px;
        position: relative;
        top: 0;
        left: 0;
        background-image: url("@/static/images/scenery_container_bg_img.png");
        background-size: 120% 120%;
        background-position: center center;
        overflow: hidden;
        .map_bg_img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: -287px;
        }
    }
    .scroll_container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .scroll_1 {
            width: 230px;
            height: 1260px;
            position: absolute;
            top: -93px;
            left: 1688px;
            .scroll_1_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
            }
            .scroll_1_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_1 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -217px;
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
        .scroll_2 {
            width: 230px;
            height: 1260px;
            position: absolute;
            top: -93px;
            left: 1918px;
            .scroll_2_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
                overflow: hidden;
            }
            .scroll_2_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_2 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -1286px;
                    transform: rotateY(180deg);
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
    }
    .cover_cloth_left {
        position: absolute;
        background: #eeeeee;
        width: 1690px;
        height: 100%;
        top: 0;
        left: 0;
    }
    .cover_cloth_right {
        position: absolute;
        background: #eeeeee;
        width: 1690px;
        height: 100%;
        top: 0;
        right: 0;
    }
}
</style>
