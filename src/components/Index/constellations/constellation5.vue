<template>
    <div class="constellation_container_5">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f5" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f5)">
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
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path5"
                    :d="datas.svg.x5"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle6"
                    :cx="datas.svg.cx6"
                    :cy="datas.svg.cy6"
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
                    x1: "M25 90 L35 60",
                    x2: "M35 60 L50 55",
                    x3: "M50 55 L75 30",
                    x4: "M75 30 L90 45",

                    x5: "M35 60 L45 85", // 接1
                    cx1: 25,
                    cy1: 90,

                    cx2: 35,
                    cy2: 60,

                    cx3: 50,
                    cy3: 55,

                    cx4: 75,
                    cy4: 30,

                    cx5: 90,
                    cy5: 45,

                    cx6: 45,
                    cy6: 85,
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
                        ".constellation_container_5"
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
                    targets: ".constellation_container_5 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 50,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M75 90 L45 100",
                })
                .add({
                    d: "M25 90 L35 60",
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_circle2",
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
                    targets: ".constellation_container_5 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M45 100 L20 55",
                })
                .add({
                    d: "M35 60 L50 55",
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_circle3",
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
                    targets: ".constellation_container_5 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M20 55 L45 60",
                })
                .add({
                    d: "M50 55 L75 30",
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_circle4",
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

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_path4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M45 60 L40 35",
                })
                .add({
                    d: "M75 30 L90 45",
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_circle5",
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

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_path5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M45 100 L5 85",
                })
                .add({
                    d: "M35 60 L45 85",
                });

            anime
                .timeline({
                    targets: ".constellation_container_5 #svg_circle6",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -40,
                    translateY: 0,
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
.constellation_container_5 {
    width: 130px;
    height: 120px;
    position: absolute;
    top: 275px;
    left: 465px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
