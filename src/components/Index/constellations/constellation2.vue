<template>
    <div class="constellation_container_2">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
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
                    stroke-width="3"
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
                <circle
                    id="svg_circle12"
                    :cx="datas.svg.cx12"
                    :cy="datas.svg.cy12"
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
    name: "LineComponent",
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M10 40 L20 70",
                    x2: "M20 70 L22 100",
                    x3: "M22 100 L20 130",
                    x4: "M20 130 L40 110",
                    x5: "M40 110 L70 80",
                    x6: "M70 80 L110 65",
                    x7: "M110 65 L130 55",
                    x8: "M130 55 L140 35",
                    x9: "M140 35 L160 40",
                    x10: "M160 40 L170 60",
                    x11: "M170 60 L160 75",
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

                    cx7: 110,
                    cy7: 65,

                    cx8: 130,
                    cy8: 55,

                    cx9: 140,
                    cy9: 35,

                    cx10: 160,
                    cy10: 40,

                    cx11: 170,
                    cy11: 60,
                    
                    cx12: 160,
                    cy12: 75,
                },
            },
        };
    },
    mounted() {
        let duration = 18000;

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                // rotate: 360,
                // duration: 120000,
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
                d: "M40 20 L12 150",
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
                translateY: 50,
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
                d: "M12 150 L50 160",
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

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_path6"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M60 40 L80 115",
                duration: duration,
            })
            .add({
                d: "M70 80 L110 65",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle7"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -30,
                translateY: 50,
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
                    ".constellation_container_2 #svg_path7"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M80 115 L130 105",
                duration: duration,
            })
            .add({
                d: "M110 65 L130 55",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle8"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: 0,
                translateY: 50,
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
                    ".constellation_container_2 #svg_path8"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M130 105 L120 55",
                duration: duration,
            })
            .add({
                d: "M130 55 L140 35",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle9"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -20,
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
                    ".constellation_container_2 #svg_path9"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M120 55 L140 20",
                duration: duration,
            })
            .add({
                d: "M140 35 L160 40",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle10"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -20,
                translateY: -20,
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
                    ".constellation_container_2 #svg_path10"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M140 20 L160 30",
                duration: duration,
            })
            .add({
                d: "M160 40 L170 60",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle11"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: -10,
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
                    ".constellation_container_2 #svg_path11"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                d: "M160 30 L170 45",
                duration: duration,
            })
            .add({
                d: "M170 60 L160 75",
                duration: duration,
            });

        anime
            .timeline({
                targets: document.querySelector(
                    ".constellation_container_2 #svg_circle12"
                ),
                easing: "linear",
                loop: true,
            })
            .add({
                translateX: 10,
                translateY: -30,
                duration: duration,
            })
            .add({
                translateX: 0,
                translateY: 0,
                duration: duration,
            });
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_2 {
    width: 180px;
    height: 180px;
    position: absolute;
    top: 28px;
    left: -74px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
}
</style>
