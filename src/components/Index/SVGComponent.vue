<template>
    <div class="overall">
        <div class="box">
            <svg
                id="svg_container"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <!-- 左中线 -->
                    <path
                        id="svg_left_1"
                        d="M55 540 L620 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 左上线 -->
                    <path
                        id="svg_left_2"
                        d="M55 0 L55 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 左下线 -->
                    <path
                        id="svg_left_3"
                        d="M55 1080 L55 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 左上折线 -->
                    <path
                        id="svg_left_4"
                        d="M0 70 L290 70 L290 340"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 左下折线 -->
                    <path
                        id="svg_left_5"
                        d="M0 1010 L290 1010 L290 740"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 右中线 -->
                    <path
                        id="svg_right_1"
                        d="M3785 540 L3235 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 右上线 -->
                    <path
                        id="svg_right_2"
                        d="M3785 0 L3785 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 右下线 -->
                    <path
                        id="svg_right_3"
                        d="M3785 1080 L3785 540"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 右上折线 -->
                    <path
                        id="svg_right_4"
                        d="M3840 70 L3550 70 L3550 340"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 右下折线 -->
                    <path
                        id="svg_left_5"
                        d="M3840 1010 L3550 1010 L3550 740"
                        style="fill: transparent; stroke: #3d5789"
                    />
                    <!-- 左上圆 -->
                    <circle
                        id="svg_left_top"
                        cx="0"
                        cy="70"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                    <!-- 左中圆 -->
                    <circle
                        id="svg_left_middle"
                        cx="55"
                        cy="540"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                    <!-- 左下圆 -->
                    <circle
                        id="svg_left_bottom"
                        cx="0"
                        cy="1010"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                    <!-- 右上圆 -->
                    <circle
                        id="svg_right_top"
                        cx="3840"
                        cy="70"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                    <!-- 右中圆 -->
                    <circle
                        id="svg_right_middle"
                        cx="3785"
                        cy="540"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                    <!-- 右下圆 -->
                    <circle
                        id="svg_right_bottom"
                        cx="3840"
                        cy="1010"
                        r="3"
                        stroke="#658ecb"
                        stroke-width="1"
                        fill="#658ecb"
                    />
                </g>
            </svg>
            
        </div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    mounted() {
        //#region 执行SVG动画
        let path_array = document.querySelectorAll("#svg_container path");
        let loop = 1;
        for (let i = 0; i < path_array.length; i++) {
            anime({
                targets: path_array[i],
                delay: 0, // 延迟
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "linear",
                duration: 8000, // 持续时间
                loop: loop, // 循环次数（无限则设置为true）
                complete: function () {},
            });
        }
        // 左上圆动画
        anime
            .timeline({
                targets: document.querySelector("#svg_left_top"),
                easing: "linear",
                loop: loop,
            })
            .add({
                translateX: 290,
                duration: 4100,
            })
            .add({
                translateY: 270,
                duration: 3900,
            });
        // 左中圆动画
        anime({
            targets: document.querySelector("#svg_left_middle"),
            translateX: 570,
            duration: 8000,
            easing: "linear",
            loop: loop,
        });
        // 左下圆动画
        anime
            .timeline({
                targets: document.querySelector("#svg_left_bottom"),
                easing: "linear",
                loop: loop,
            })
            .add({
                translateX: 290,
                duration: 4200,
            })
            .add({
                translateY: -270,
                duration: 3800,
            });
        // 右上圆动画
        anime
            .timeline({
                targets: document.querySelector("#svg_right_top"),
                easing: "linear",
                loop: loop,
            })
            .add({
                translateX: -290,
                duration: 4100,
                complete: function () {},
            })
            .add({
                translateY: 270,
                duration: 3900,
            });
        // 右中圆动画
        anime({
            targets: document.querySelector("#svg_right_middle"),
            translateX: -550,
            duration: 8000,
            easing: "linear",
            loop: loop,
        });
        // 右下圆动画
        anime
            .timeline({
                targets: document.querySelector("#svg_right_bottom"),
                easing: "linear",
                loop: loop,
            })
            .add({
                translateX: -290,
                duration: 4100,
            })
            .add({
                translateY: -270,
                duration: 3900,
            });
        //#endregion
    },
};
</script>

<style lang="less" scoped>
.overall {
    width: 100%;
    height: 100%;
    .box {
        width: 100%;
        height: 100%;
        position: relative;
        .testimg {
            width: 150px;
            height: 100px;
        }
        .svg_container {
        }
        path {
            stroke-width: 0.15rem;
        }
    }
}
</style>