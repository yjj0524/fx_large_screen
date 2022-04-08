<template>
    <div class="overall">
        <div class="box">
            <svg
                id="one"
                width="500"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        id="svg_3"
                        d="m81.25019,99.72662l-0.25028,100.27314l19.99998,0l0,-60.49993l39.99995,60.49993l19.99998,0l0,-100.49988l-19.99998,0l0,60.49993l-39.99995,-60.49993l-19.74969,0.22674z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#224464"
                        fill="#f0f0f0"
                    />
                    <path
                        id="svg_4"
                        d="m181.75007,100.72663l59.24964,-0.22674l0,20.49998l-38.99995,0l0,19.99998l39.99995,0l0,19.99998l-41.49995,0l0,39.49995l-18.99998,0l0.25029,-99.77314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#0A6856"
                        fill="#f0f0f0"
                    />
                    <path
                        id="svg_5"
                        d="m261.74998,101.22662l59.74964,-0.22674l0,19.49998l-39.99995,0l0,19.49998l39.99995,0l0,20.49998l-40.49995,0l0,20.49998l40.49995,0l0,19.49998l-59.99993,0l0.25029,-99.27314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#209680"
                        fill="#f0f0f0"
                    />
                    <path
                        id="svg_13"
                        d="m340.7499,100.72663l19.74968,-0.22674l59.99993,99.49988l-19.99998,0l-59.74963,-99.27314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#0A6856"
                        fill="#f0f0f0"
                    />
                    <path
                        id="svg_14"
                        d="m340.7499,200.22651l19.74968,-0.22675l60.49993,-99.49988l-20.49998,0l-59.74963,99.72663z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#209680"
                        fill="#f0f0f0"
                    />
                </g>
            </svg>
            <svg
                id="two"
                width="500"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        id="svg_3"
                        d="m81.25019,99.72662l-0.25028,100.27314l19.99998,0l0,-60.49993l39.99995,60.49993l19.99998,0l0,-100.49988l-19.99998,0l0,60.49993l-39.99995,-60.49993l-19.74969,0.22674z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#224464"
                        fill="#224464"
                    />
                    <path
                        id="svg_4"
                        d="m181.75007,100.72663l59.24964,-0.22674l0,20.49998l-38.99995,0l0,19.99998l39.99995,0l0,19.99998l-41.49995,0l0,39.49995l-18.99998,0l0.25029,-99.77314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#0A6856"
                        fill="#0A6856"
                    />
                    <path
                        id="svg_5"
                        d="m261.74998,101.22662l59.74964,-0.22674l0,19.49998l-39.99995,0l0,19.49998l39.99995,0l0,20.49998l-40.49995,0l0,20.49998l40.49995,0l0,19.49998l-59.99993,0l0.25029,-99.27314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#209680"
                        fill="#209680"
                    />
                    <path
                        id="svg_13"
                        d="m340.7499,100.72663l19.74968,-0.22674l59.99993,99.49988l-19.99998,0l-59.74963,-99.27314z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#0A6856"
                        fill="#0A6856"
                    />
                    <path
                        id="svg_14"
                        d="m340.7499,200.22651l19.74968,-0.22675l60.49993,-99.49988l-20.49998,0l-59.74963,99.72663z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#209680"
                        fill="#209680"
                    />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";
export default {
    mounted() {
        let path_one = document.querySelectorAll("#one path");
        let path_two = document.querySelectorAll("#two path");
        for (let i = 0; i < path_one.length; i++) {
            anime({
                targets: path_one[i],
                delay: i * 300,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeInOutSine",
                duration: 3000,
                loop: 1,
                complete: function () {
                    anime({
                        targets: path_two[i],
                        delay: i * 300,
                        opacity: 1,
                    });
                },
            });
        }
    },
};
</script>

<style lang="less" scoped>
.overall {
    width: 50%;
    // background: #f0f0f0;
}
.box {
    width: 500px;
    height: 300px;
    position: relative;
    svg {
        position: absolute;
        left: 0;
        top: 0;
    }
}
path {
    stroke-width: 3px;
}
#two {
    path {
        opacity: 0;
    }
}
</style>