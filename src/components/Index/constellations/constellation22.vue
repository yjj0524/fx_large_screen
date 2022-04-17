<template>
    <div class="constellation_container_22">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f22" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f22)">
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
                    x1: "M30 55 L50 30",
                    x2: "M50 30 L65 35",
                    x3: "M65 35 L55 55",
                    x4: "M55 55 L80 70",
                    cx1: 30,
                    cy1: 55,

                    cx2: 50,
                    cy2: 30,

                    cx3: 65,
                    cy3: 35,

                    cx4: 55,
                    cy4: 55,

                    cx5: 80,
                    cy5: 70,
                },
            },
        };
    },
    mounted() {
        let duration = 16000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_22"
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
                    targets: ".constellation_container_22 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: -40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M30 15 L30 70",
                })
                .add({
                    d: "M30 55 L50 30",
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_circle2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -20,
                    translateY: 40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M30 70 L35 35",
                })
                .add({
                    d: "M50 30 L65 35",
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_circle3",
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
                    targets: ".constellation_container_22 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M35 35 L65 15",
                })
                .add({
                    d: "M65 35 L55 55",
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_circle4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 10,
                    translateY: -40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_path4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M65 15 L60 40",
                })
                .add({
                    d: "M55 55 L80 70",
                });

            anime
                .timeline({
                    targets: ".constellation_container_22 #svg_circle5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -20,
                    translateY: -30,
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
.constellation_container_22 {
    width: 130px;
    height: 120px;
    position: absolute;
    top: 50px;
    left: 230px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
