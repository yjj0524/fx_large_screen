<template>
    <div class="constellation_container_18">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f18" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f18)">
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
                    r="4"
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
                    r="6"
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
    props: ["isRun"],
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M25 110 L50 75",
                    x2: "M50 75 L55 50",
                    x3: "M55 50 L30 40",

                    cx1: 25,
                    cy1: 110,

                    cx2: 50,
                    cy2: 75,

                    cx3: 55,
                    cy3: 50,

                    cx4: 30,
                    cy4: 40,
                },
            },
        };
    },
    mounted() {
        let duration = 18000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_18"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    rotate: 360,
                    duration: 120000,
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_circle1",
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
                    targets: ".constellation_container_18 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M85 110 L60 115",
                })
                .add({
                    d: "M25 110 L50 75",
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_circle2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 10,
                    translateY: 40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M60 115 L25 20",
                })
                .add({
                    d: "M50 75 L55 50",
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_circle3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -30,
                    translateY: -30,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M25 20 L70 100",
                })
                .add({
                    d: "M55 50 L30 40",
                });

            anime
                .timeline({
                    targets: ".constellation_container_18 #svg_circle4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 40,
                    translateY: 60,
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
.constellation_container_18 {
    width: 100px;
    height: 120px;
    position: absolute;
    top: 269px;
    left: -429px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
