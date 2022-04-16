<template>
    <div class="constellation_container_3">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f3" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f3)">
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
                <circle
                    id="svg_circle11"
                    :cx="datas.svg.cx11"
                    :cy="datas.svg.cy11"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path11"
                    :d="datas.svg.x11"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
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
                    x1: "M4 100 L40 50",
                    x2: "M40 50 L55 50",
                    x3: "M55 50 L60 60",
                    x4: "M60 60 L75 57",
                    x5: "M75 57 L95 77",
                    x6: "M95 77 L145 127",

                    x7: "M60 60 L35 85", // 接3

                    x8: "M32 88 L45 108",
                    x9: "M45 108 L30 130",

                    x10: "M75 57 L65 85", // 接4
                    x11: "M65 85 L80 115",
                    cx1: 4,
                    cy1: 100,

                    cx2: 40,
                    cy2: 50,

                    cx3: 55,
                    cy3: 50,

                    cx4: 60,
                    cy4: 60,

                    cx5: 75,
                    cy5: 57,

                    cx6: 95,
                    cy6: 77,

                    cx7: 145,
                    cy7: 127,

                    cx8: 45,
                    cy8: 108,

                    cx9: 30,
                    cy9: 130,

                    cx10: 65,
                    cy10: 85,

                    cx11: 80,
                    cy11: 115,
                },
            },
        };
    },
    mounted() {
        let duration = 17000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_3"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                rotate: 360,
                duration: 80000,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle1",
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
                targets: ".constellation_container_3 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M4 50 L40 70",
            })
            .add({
                d: "M4 100 L40 50",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 20,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M40 70 L45 10",
            })
            .add({
                d: "M40 50 L55 50",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -10,
                translateY: -40,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M45 10 L100 40",
            })
            .add({
                d: "M55 50 L60 60",
            });

         anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 40,
                translateY: -20,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M100 40 L115 37",
            })
            .add({
                d: "M60 60 L75 57",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle5",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 40,
                translateY: -20,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path5",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M115 37 L135 117",
            })
            .add({
                d: "M75 57 L95 77",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle6",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 40,
                translateY: 40,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path6",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M135 117 L145 87",
            })
            .add({
                d: "M95 77 L145 127",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle7",
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
                targets: ".constellation_container_3 #svg_path7",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M100 40 L35 85",
            })
            .add({
                d: "M60 60 L35 85",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path8",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M72 108 L65 138",
            })
            .add({
                d: "M32 88 L45 108",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle8",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 20,
                translateY: 30,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path9",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M65 138 L30 100",
            })
            .add({
                d: "M45 108 L30 130",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle9",
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
                targets: ".constellation_container_3 #svg_path10",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M115 37 L95 85",
            })
            .add({
                d: "M75 57 L65 85",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle10",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 30,
                translateY: 0,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_path11",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M95 85 L65 85",
            })
            .add({
                d: "M65 85 L80 115",
            });

        anime
            .timeline({
                targets: ".constellation_container_3 #svg_circle11",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -15,
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
.constellation_container_3 {
    width: 183px;
    height: 147px;
    position: absolute;
    top: 64px;
    left: 235px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
