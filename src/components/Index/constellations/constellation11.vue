<template>
    <div class="constellation_container_11">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f11" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f11)">
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
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path4"
                    :d="datas.svg.x4"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle5"
                    :cx="datas.svg.cx5"
                    :cy="datas.svg.cy5"
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
    components: {},
    props: ["isRun"],
    data() {
        return {
            datas: {
                svg: {
                    x1: "M20 10 L30 25",
                    x2: "M30 25 L45 30",
                    x3: "M45 30 L65 25",
                    x4: "M65 25 L95 50",
                    cx1: 20,
                    cy1: 10,

                    cx2: 30,
                    cy2: 25,

                    cx3: 45,
                    cy3: 30,

                    cx4: 65,
                    cy4: 25,

                    cx5: 95,
                    cy5: 50,
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
                        ".constellation_container_11"
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
                    targets: ".constellation_container_11 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 40,
                    translateY: 20,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M60 30 L10 5",
                })
                .add({
                    d: "M20 10 L30 25",
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_circle2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -20,
                    translateY: -20,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M10 5 L15 30",
                })
                .add({
                    d: "M30 25 L45 30",
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_circle3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -30,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M15 30 L115 15",
                })
                .add({
                    d: "M45 30 L65 25",
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_circle4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 50,
                    translateY: -10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_path4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M115 15 L45 40",
                })
                .add({
                    d: "M65 25 L95 50",
                });

            anime
                .timeline({
                    targets: ".constellation_container_11 #svg_circle5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -50,
                    translateY: -10,
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
.constellation_container_11 {
    width: 130px;
    height: 80px;
    position: absolute;
    top: 497px;
    left: 373px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
