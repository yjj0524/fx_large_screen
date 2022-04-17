<template>
    <div class="constellation_container_24">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f24" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx="0"
                        dy="0"
                    />
                    <feGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="4"
                    />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <g filter="url(#f24)">
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
                    x1: "M10 65 L30 55",
                    x2: "M30 55 L40 35",
                    x3: "M40 35 L60 40",
                    x4: "M60 40 L70 60",
                    x5: "M70 60 L60 75",

                    cx1: 10,
                    cy1: 65,

                    cx2: 30,
                    cy2: 55,

                    cx3: 40,
                    cy3: 35,

                    cx4: 60,
                    cy4: 40,

                    cx5: 70,
                    cy5: 60,

                    cx6: 60,
                    cy6: 75,
                },
            },
        };
    },
    mounted() {
        let duration = 22000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24"
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
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle1"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 80,
                    translateY: 30,
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
                        ".constellation_container_24 #svg_path1"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M90 95 L90 5",
                    duration: duration,
                })
                .add({
                    d: "M10 65 L30 55",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle2"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 60,
                    translateY: -50,
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
                        ".constellation_container_24 #svg_path2"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M90 5 L60 75",
                    duration: duration,
                })
                .add({
                    d: "M30 55 L40 35",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle3"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 20,
                    translateY: 40,
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
                        ".constellation_container_24 #svg_path3"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M60 75 L20 80",
                    duration: duration,
                })
                .add({
                    d: "M40 35 L60 40",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle4"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: -40,
                    translateY: 40,
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
                        ".constellation_container_24 #svg_path4"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M20 80 L20 30",
                    duration: duration,
                })
                .add({
                    d: "M60 40 L70 60",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle5"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: -50,
                    translateY: -30,
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
                        ".constellation_container_24 #svg_path5"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M20 30 L100 55",
                    duration: duration,
                })
                .add({
                    d: "M70 60 L60 75",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_24 #svg_circle6"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 40,
                    translateY: -20,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                    duration: duration,
                });
        }
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_24 {
    width: 110px;
    height: 110px;
    position: absolute;
    top: 49px;
    left: 72px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
