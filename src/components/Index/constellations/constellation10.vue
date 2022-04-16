<template>
    <div class="constellation_container_10">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f10" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f10)">
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
            </g>
        </svg>
    </div>
</template>

<script>
// import anime from "animejs/lib/anime.js";

export default {
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M10 40 L30 25",
                    x2: "M30 25 L45 40",
                    cx1: 10,
                    cy1: 40,

                    cx2: 30,
                    cy2: 25,

                    cx3: 45,
                    cy3: 40,
                },
            },
        };
    },
    mounted() {
        let duration = 15000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_10"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                rotate: 360,
                duration: 20000,
            });

        anime
            .timeline({
                targets: ".constellation_container_10 #svg_circle1",
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
                targets: ".constellation_container_10 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M50 60 L5 65",
            })
            .add({
                d: "M10 40 L30 25",
            });

        anime
            .timeline({
                targets: ".constellation_container_10 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -25,
                translateY: 40,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_10 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M5 65 L15 10",
            })
            .add({
                d: "M30 25 L45 40",
            });

        anime
            .timeline({
                targets: ".constellation_container_10 #svg_circle3",
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
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_10 {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 389px;
    left: 392px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
