<template>
    <div class="constellation_container_15">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f15" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f15)">
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
                <path
                    id="svg_path6"
                    :d="datas.svg.x6"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle7"
                    :cx="datas.svg.cx7"
                    :cy="datas.svg.cy7"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path7"
                    :d="datas.svg.x7"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle8"
                    :cx="datas.svg.cx8"
                    :cy="datas.svg.cy8"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path8"
                    :d="datas.svg.x8"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle9"
                    :cx="datas.svg.cx9"
                    :cy="datas.svg.cy9"
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
    props: ["isRun"],
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M20 40 L60 30",
                    x2: "M60 30 L120 65",
                    x3: "M120 65 L130 50",
                    x4: "M130 50 L155 45",
                    x5: "M155 45 L160 60",

                    x6: "M120 65 L125 90", // 接2
                    x7: "M125 90 L105 105",

                    x8: "M60 30 L50 55", // 接1
                    cx1: 20,
                    cy1: 40,

                    cx2: 60,
                    cy2: 30,

                    cx3: 120,
                    cy3: 65,

                    cx4: 130,
                    cy4: 50,

                    cx5: 155,
                    cy5: 45,

                    cx6: 160,
                    cy6: 60,

                    cx7: 125,
                    cy7: 90,

                    cx8: 105,
                    cy8: 105,

                    cx9: 50,
                    cy9: 55,
                },
            },
        };
    },
    mounted() {
        let duration = 19000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_15"
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
                    targets: ".constellation_container_15 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 50,
                    translateY: 60,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M70 100 L70 70",
                })
                .add({
                    d: "M20 40 L60 30",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle2",
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
                    targets: ".constellation_container_15 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M70 70 L140 65",
                })
                .add({
                    d: "M60 30 L120 65",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 20,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M140 65 L120 40",
                })
                .add({
                    d: "M120 65 L130 50",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -10,
                    translateY: -10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M120 40 L145 25",
                })
                .add({
                    d: "M130 50 L155 45",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -10,
                    translateY: -20,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M145 25 L160 40",
                })
                .add({
                    d: "M155 45 L160 60",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle6",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: -20,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path6",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M140 65 L155 80",
                })
                .add({
                    d: "M120 65 L125 90",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle7",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 30,
                    translateY: -10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path7",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M155 80 L165 95",
                })
                .add({
                    d: "M125 90 L105 105",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle8",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 60,
                    translateY: -10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_path8",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M70 70 L30 85",
                })
                .add({
                    d: "M60 30 L50 55",
                });

            anime
                .timeline({
                    targets: ".constellation_container_15 #svg_circle9",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -20,
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
.constellation_container_15 {
    width: 200px;
    height: 120px;
    position: absolute;
    top: 529px;
    left: -282px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
