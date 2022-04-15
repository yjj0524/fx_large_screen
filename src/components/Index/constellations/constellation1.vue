<template>
    <div class="constellation_container_1">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f1)">
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
                    r="3"
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
                    r="6"
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
    name: "LineComponent",
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M10 145 L25 140",
                    x2: "M25 140 L30 120",
                    x3: "M30 120 L45 65",
                    cx1: 10,
                    cy1: 145,
                    cx2: 25,
                    cy2: 140,
                    cx3: 30,
                    cy3: 120,
                    cx4: 45,
                    cy4: 65,
                },
            },
        };
    },
    mounted() {
        let duration = 25000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_circle1"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -5,
                translateY: -120,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 0,
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_path1"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M5 25 L5 130",
                duration: duration,
            })
            .add({
                d: "M10 145 L25 140",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_circle2"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -20,
                translateY: -10,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 0,
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_path2"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M5 130 L70 140",
                duration: duration,
            })
            .add({
                d: "M25 140 L30 120",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_circle3"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: 40,
                translateY: 20,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 0,
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_path3"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M70 140 L25 115",
                duration: duration,
            })
            .add({
                d: "M30 120 L45 65",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_1 #svg_circle4"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -20,
                translateY: 50,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 0,
                duration: duration,
            });
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_1 {
    width: 80px;
    height: 150px;
    position: absolute;
    top: 28px;
    left: -291px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    border: 1px solid red;
    #svg_item {
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
