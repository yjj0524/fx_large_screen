<template>
    <div class="constellation_container_9">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f9" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f9)">
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
                    r="6"
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
                    x1: "M30 10 L70 30",
                    x2: "M70 30 L90 60",
                    x3: "M90 60 L120 85",
                    x4: "M120 85 L140 70",

                    x5: "M90 60 L60 55", // 接2
                    cx1: 30,
                    cy1: 10,

                    cx2: 70,
                    cy2: 30,

                    cx3: 90,
                    cy3: 60,

                    cx4: 120,
                    cy4: 85,

                    cx5: 140,
                    cy5: 70,

                    cx6: 60,
                    cy6: 55,
                },
            },
        };
    },
    mounted() {
        let duration = 20000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_9"
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
                targets: ".constellation_container_9 #svg_circle1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: 60,
                translateY: 0,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_path1",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M90 10 L10 20",
            })
            .add({
                d: "M30 10 L70 30",
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_circle2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -60,
                translateY: -10,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_path2",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M10 20 L40 30",
            })
            .add({
                d: "M70 30 L90 60",
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_circle3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -50,
                translateY: -30,
            })
            .add({
                translateX: 0,
                translateY: 0,
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_path3",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M40 30 L100 35",
            })
            .add({
                d: "M90 60 L120 85",
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_circle4",
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
                targets: ".constellation_container_9 #svg_path4",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M100 35 L90 70",
            })
            .add({
                d: "M120 85 L140 70",
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_circle5",
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
                targets: ".constellation_container_9 #svg_path5",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                d: "M40 30 L50 95",
            })
            .add({
                d: "M90 60 L60 55",
            });

        anime
            .timeline({
                targets: ".constellation_container_9 #svg_circle6",
                easing: "linear",
                loop: true,
                duration: duration,
            })
            .add({
                translateX: -10,
                translateY: 40,
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
.constellation_container_9 {
    width: 152px;
    height: 120px;
    position: absolute;
    top: 406px;
    left: 514px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
