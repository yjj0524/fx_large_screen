<template>
    <div class="constellation_container_17">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f17" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx="0"
                        dy="0"
                    />
                    <feGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="3"
                    />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <g filter="url(#f17)">
                <circle
                    id="svg_circle1"
                    :cx="datas.svg.cx1"
                    :cy="datas.svg.cy1"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path1"
                    :d="datas.svg.x1"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle2"
                    :cx="datas.svg.cx2"
                    :cy="datas.svg.cy2"
                    r="6"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path2"
                    :d="datas.svg.x2"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle3"
                    :cx="datas.svg.cx3"
                    :cy="datas.svg.cy3"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path3"
                    :d="datas.svg.x3"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle4"
                    :cx="datas.svg.cx4"
                    :cy="datas.svg.cy4"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
            </g>
        </svg>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    components: {},
    props: ["isRun"],
    data() {
        return {
            datas: {
                svg: {
                    x1: "M30 70 L50 75",
                    x2: "M50 75 L70 80",

                    x3: "M50 75 L60 35", // 接1

                    cx1: 30,
                    cy1: 70,

                    cx2: 50,
                    cy2: 75,

                    cx3: 70,
                    cy3: 80,

                    cx4: 60,
                    cy4: 35,
                },
            },
        };
    },
    mounted() {
        let duration = 21000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_17"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    rotate: -360,
                    duration: 120000,
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 60,
                    translateY: 40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M90 110 L110 75",
                })
                .add({
                    d: "M30 70 L50 75",
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_circle2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 60,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M110 75 L10 20",
                })
                .add({
                    d: "M50 75 L70 80",
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_circle3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -60,
                    translateY: -60,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M110 75 L30 65",
                })
                .add({
                    d: "M50 75 L60 35",
                });

            anime
                .timeline({
                    targets: ".constellation_container_17 #svg_circle4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -30,
                    translateY: 30,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });
        }
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_17 {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 477px;
    left: -451px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
