<template>
    <div class="constellation_container_4">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f4" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f4)">
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
                <path
                    id="svg_path9"
                    :d="datas.svg.x9"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle10"
                    :cx="datas.svg.cx10"
                    :cy="datas.svg.cy10"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path10"
                    :d="datas.svg.x10"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
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
                    x1: "M25 80 L35 95",
                    x2: "M35 95 L45 105",
                    x3: "M45 105 L65 125",
                    x4: "M65 125 L75 115",
                    x5: "M75 115 L130 90",
                    x6: "M130 90 L145 85",
                    x7: "M145 85 L75 85",
                    x8: "M75 85 L60 80",
                    x9: "M60 80 L45 75",
                    x10: "M45 75 L25 80",
                    cx1: 25,
                    cy1: 80,

                    cx2: 35,
                    cy2: 95,

                    cx3: 45,
                    cy3: 105,

                    cx4: 65,
                    cy4: 125,

                    cx5: 75,
                    cy5: 115,

                    cx6: 130,
                    cy6: 90,

                    cx7: 145,
                    cy7: 85,

                    cx8: 75,
                    cy8: 85,

                    cx9: 60,
                    cy9: 80,

                    cx10: 45,
                    cy10: 75,
                },
            },
        };
    },
    mounted() {
        let duration = 15000;

        if (this.isRun) {
            anime
                .timeline({
                    targets: document.querySelector(
                        ".constellation_container_4"
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
                    targets: ".constellation_container_4 #svg_circle1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: -50,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path1",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M25 30 L15 95",
                })
                .add({
                    d: "M25 80 L35 95",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -20,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path2",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M15 95 L55 75",
                })
                .add({
                    d: "M35 95 L45 105",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 10,
                    translateY: -30,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path3",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M55 75 L45 95",
                })
                .add({
                    d: "M45 105 L65 125",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle4",
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

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path4",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M45 95 L35 125",
                })
                .add({
                    d: "M65 125 L75 115",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: -40,
                    translateY: 10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path5",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M35 125 L90 110",
                })
                .add({
                    d: "M75 115 L130 90",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle6",
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
                    targets: ".constellation_container_4 #svg_path6",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M90 110 L145 125",
                })
                .add({
                    d: "M130 90 L145 85",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle7",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: 40,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path7",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M145 125 L115 85",
                })
                .add({
                    d: "M145 85 L75 85",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle8",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 40,
                    translateY: 0,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path8",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M115 85 L100 70",
                })
                .add({
                    d: "M75 85 L60 80",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle9",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 40,
                    translateY: -10,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path9",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M100 70 L45 45",
                })
                .add({
                    d: "M60 80 L45 75",
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_circle10",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    translateX: 0,
                    translateY: -30,
                })
                .add({
                    translateX: 0,
                    translateY: 0,
                });

            anime
                .timeline({
                    targets: ".constellation_container_4 #svg_path10",
                    easing: "linear",
                    loop: true,
                    duration: duration,
                })
                .add({
                    d: "M45 45 L25 30",
                })
                .add({
                    d: "M45 75 L25 80",
                });
        }
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_4 {
    width: 180px;
    height: 150px;
    position: absolute;
    top: 167px;
    left: 510px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
