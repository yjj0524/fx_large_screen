<template>
    <div class="constellation_container_6">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f6" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f6)">
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
                    x1: "M10 30 L30 30",
                    x2: "M30 30 L55 15",
                    x3: "M55 15 L65 30",

                    x4: "M30 30 L40 50", // 接1
                    x5: "M40 50 L70 60",
                    cx1: 10,
                    cy1: 30,

                    cx2: 30,
                    cy2: 30,

                    cx3: 55,
                    cy3: 15,

                    cx4: 65,
                    cy4: 30,

                    cx5: 40,
                    cy5: 50,

                    cx6: 70,
                    cy6: 60,
                },
            },
        };
    },
    mounted() {
        let duration = 20000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_6"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                rotate: -360,
                duration: 70000,
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: -25,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M10 5 L10 55",
            })
            .add({
                d: "M10 30 L30 30",
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -20,
                translateY: 25,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M10 55 L35 55",
            })
            .add({
                d: "M30 30 L55 15",
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -20,
                translateY: 40,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_path3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M35 55 L25 25",
            })
            .add({
                d: "M55 15 L65 30",
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -40,
                translateY: -5,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_path4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M10 55 L80 90",
            })
            .add({
                d: "M30 30 L40 50",
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle5",
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
                targets: ".constellation_container_6 #svg_path5",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M80 90 L30 80",
            })
            .add({
                d: "M40 50 L70 60",
            });

        anime
            .timeline({
                targets: ".constellation_container_6 #svg_circle6",
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
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_6 {
    width: 130px;
    height: 120px;
    position: absolute;
    top: 250px;
    left: 618px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
