<template>
    <div class="constellation_container_2">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="svg_color" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop class="color1" offset="0" :stop-color="color1" />
                    <stop class="color2" offset="0.5" :stop-color="color2" />
                    <stop class="color3" offset="1" :stop-color="color3" />
                </linearGradient>
                <filter id="f2" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f2)">
                <circle
                    id="svg_circle1"
                    :cx="datas.svg.cx1"
                    :cy="datas.svg.cy1"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="1"
                    fill="url(#svg_color)"
                />
                <path
                    id="svg_path1"
                    :d="datas.svg.x1"
                    stroke-width="2"
                    style="fill: transparent; stroke: url(#svg_color)"
                />
                <circle
                    id="svg_circle2"
                    :cx="datas.svg.cx2"
                    :cy="datas.svg.cy2"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="1"
                    fill="url(#svg_color)"
                />
                <path
                    id="svg_path2"
                    :d="datas.svg.x2"
                    stroke-width="2"
                    fill="red"
                    style="fill: transparent; stroke: url(#svg_color)"
                />
                <circle
                    id="svg_circle3"
                    :cx="datas.svg.cx3"
                    :cy="datas.svg.cy3"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="3"
                    fill="url(#svg_color)"
                />
                <path
                    id="svg_path3"
                    :d="datas.svg.x3"
                    stroke-width="2"
                    style="fill: transparent; stroke: url(#svg_color)"
                />
                <circle
                    id="svg_circle4"
                    :cx="datas.svg.cx4"
                    :cy="datas.svg.cy4"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="1"
                    fill="url(#svg_color)"
                />
                <path
                    id="svg_path4"
                    :d="datas.svg.x4"
                    stroke-width="2"
                    style="fill: transparent; stroke: url(#svg_color)"
                />
                <circle
                    id="svg_circle5"
                    :cx="datas.svg.cx5"
                    :cy="datas.svg.cy5"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="1"
                    fill="url(#svg_color)"
                />
                <path
                    id="svg_path5"
                    :d="datas.svg.x5"
                    stroke-width="2"
                    style="fill: transparent; stroke: url(#svg_color)"
                />
                <circle
                    id="svg_circle6"
                    :cx="datas.svg.cx6"
                    :cy="datas.svg.cy6"
                    r="4"
                    stroke="url(#svg_color)"
                    stroke-width="1"
                    fill="url(#svg_color)"
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
            color1: "#008080",
            color2: "#D8BFD8",
            color3: "#40E0D0",
            datas: {
                svg: {
                    x1: "M10 40 L20 70",
                    x2: "M20 70 L22 100",
                    x3: "M22 100 L20 130",
                    x4: "M20 130 L40 110",
                    x5: "M40 110 L70 80",
                    x6: "M70 80 L110 65",

                    cx1: 10,
                    cy1: 40,

                    cx2: 20,
                    cy2: 70,

                    cx3: 22,
                    cy3: 100,

                    cx4: 20,
                    cy4: 130,

                    cx5: 40,
                    cy5: 110,

                    cx6: 70,
                    cy6: 80,
                },
            },
        };
    },
    mounted() {
        let duration = 15000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: "#svg_color .color1",
                    easing: "linear",
                    loop: true,
                })
                .add({
                    stopColor: [
                        {
                            value: "#00BFFF",
                        },
                        {
                            value: "#FF00FF",
                        },
                        {
                            value: "#DAA520",
                        },
                        {
                            value: "#008000",
                        },
                        {
                            value: "#ADFF2F",
                        },
                        {
                            value: "#00BFFF",
                        },
                    ],
                    duration: 23000,
                });

            anime
                .timeline({
                    targets: "#svg_color .color2",
                    easing: "linear",
                    loop: true,
                })
                .add({
                    stopColor: [
                        {
                            value: "#ADD8E6",
                        },
                        {
                            value: "#FAFAD2",
                        },
                        {
                            value: "#FFB6C1",
                        },
                        {
                            value: "#66CDAA",
                        },
                        {
                            value: "#9370DB",
                        },
                        {
                            value: "#ADD8E6",
                        },
                    ],
                    duration: 23000,
                });

            anime
                .timeline({
                    targets: "#svg_color .color3",
                    easing: "linear",
                    loop: true,
                })
                .add({
                    stopColor: [
                        {
                            value: "#808000",
                        },
                        {
                            value: "#FF4500",
                        },
                        {
                            value: "#AFEEEE",
                        },
                        {
                            value: "#FDAB9",
                        },
                        {
                            value: "#B0E0E6",
                        },
                        {
                            value: "#808000",
                        },
                    ],
                    duration: 23000,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2"
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
                        ".constellation_container_2 #svg_circle1"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 0,
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
                        ".constellation_container_2 #svg_path1"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M10 80 L40 20",
                    duration: duration,
                })
                .add({
                    d: "M10 40 L20 70",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2 #svg_circle2"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 20,
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
                        ".constellation_container_2 #svg_path2"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M40 20 L12 120",
                    duration: duration,
                })
                .add({
                    d: "M20 70 L22 100",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2 #svg_circle3"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: -10,
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
                        ".constellation_container_2 #svg_path3"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M12 120 L50 160",
                    duration: duration,
                })
                .add({
                    d: "M22 100 L20 130",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2 #svg_circle4"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 30,
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
                        ".constellation_container_2 #svg_path4"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M50 160 L50 110",
                    duration: duration,
                })
                .add({
                    d: "M20 130 L40 110",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2 #svg_circle5"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: 10,
                    translateY: 0,
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
                        ".constellation_container_2 #svg_path5"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    d: "M50 110 L60 40",
                    duration: duration,
                })
                .add({
                    d: "M40 110 L70 80",
                    duration: duration,
                });

            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_2 #svg_circle6"
                    ),
                    easing: "linear",
                    loop: true,
                })
                .add({
                    translateX: -10,
                    translateY: -40,
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
.constellation_container_2 {
    width: 82px;
    height: 168px;
    position: absolute;
    top: 50px;
    left: -69px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
