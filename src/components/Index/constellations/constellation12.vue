<template>
    <div class="constellation_container_12">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f12" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f12)">
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
                    x1: "M30 40 L50 40",
                    x2: "M50 40 L65 38",
                    x3: "M65 38 L85 18",
                    cx1: 30,
                    cy1: 40,

                    cx2: 50,
                    cy2: 40,

                    cx3: 65,
                    cy3: 38,

                    cx4: 85,
                    cy4: 18,
                },
            },
        };
    },
    mounted() {
        let duration = 20000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_12"
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
                targets: ".constellation_container_12 #svg_circle1",
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
                targets: ".constellation_container_12 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M70 60 L10 60",
            })
            .add({
                d: "M30 40 L50 40",
            });

        anime
            .timeline({
                targets: ".constellation_container_12 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -40,
                translateY: 20,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_12 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M10 60 L35 73",
            })
            .add({
                d: "M50 40 L65 38",
            });

        anime
            .timeline({
                targets: ".constellation_container_12 #svg_circle3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -30,
                translateY: 35,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_12 #svg_path3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M35 73 L55 33",
            })
            .add({
                d: "M65 38 L85 18",
            });

        anime
            .timeline({
                targets: ".constellation_container_12 #svg_circle4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -30,
                translateY: 15,
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
.constellation_container_12 {
    width: 120px;
    height: 80px;
    position: absolute;
    top: 489px;
    left: 492px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
