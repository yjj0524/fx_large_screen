<template>
    <div class="constellation_container_8">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f8" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f8)">
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
// import anime from "animejs/lib/anime.js";

export default {
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M40 70 L90 60",
                    x2: "M90 60 L110 70",

                    x3: "M90 60 L95 75", // 接1
                    x4: "M95 75 L80 95",
                    x5: "M80 95 L95 100",
                    cx1: 40,
                    cy1: 70,

                    cx2: 90,
                    cy2: 60,

                    cx3: 110,
                    cy3: 70,

                    cx4: 95,
                    cy4: 75,

                    cx5: 80,
                    cy5: 95,

                    cx6: 95,
                    cy6: 100,
                },
            },
        };
    },
    mounted() {
        let duration = 20000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_8"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                rotate: 360,
                duration: 70000,
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 10,
                translateY: -50,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M50 20 L70 40",
            })
            .add({
                d: "M40 70 L90 60",
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -20,
                translateY: -20,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M70 40 L90 20",
            })
            .add({
                d: "M90 60 L110 70",
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -20,
                translateY: -50,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_path3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M70 40 L45 75",
            })
            .add({
                d: "M90 60 L95 75",
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -50,
                translateY: 0,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_path4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M45 75 L80 55",
            })
            .add({
                d: "M95 75 L80 95",
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle5",
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
                targets: ".constellation_container_8 #svg_path5",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M80 55 L75 80",
            })
            .add({
                d: "M80 95 L95 100",
            });

        anime
            .timeline({
                targets: ".constellation_container_8 #svg_circle6",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -20,
                translateY: -20,
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
.constellation_container_8 {
    width: 130px;
    height: 120px;
    position: absolute;
    top: 321px;
    left: 592px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
