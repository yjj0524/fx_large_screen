<template>
    <div class="life_affluent_chart_container">
        <div id="life_affluent"></div>
        <div class="datas_container">
            <div class="data_item" v-for="(item, index) in datas" :key="index">
                {{ item }}
            </div>
        </div>
    </div>
</template>
 
<script>
import * as echarts from "echarts";
import "echarts-gl"; // 3d图表库

let life_affluent_chart;

export default {
    name: "LifeAffluent",
    props: ["run_life_affluent_chart"],
    data() {
        return {
            datas: [],
            timer: null,
        };
    },
    mounted() {},
    methods: {
        GetRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        Init() {
            let that = this;

            // 销毁
            if (
                life_affluent_chart != null &&
                life_affluent_chart != "" &&
                life_affluent_chart != undefined
            ) {
                life_affluent_chart.dispose();
            }
            let chart = document.getElementById("life_affluent");
            life_affluent_chart = echarts.init(chart);
            let pie_datas = [
                {
                    name: "数据一 :",
                    value: that.GetRandomNumber(45, 60),
                    itemStyle: {
                        opacity: 1,
                        color: "#afc8ef",
                    },
                },
                {
                    name: "数据二 :",
                    value: that.GetRandomNumber(25, 45),
                    itemStyle: {
                        opacity: 1,
                        color: "#d16649",
                    },
                },
                {
                    name: "数据三 :",
                    value: that.GetRandomNumber(10, 25),
                    itemStyle: {
                        opacity: 1,
                        color: "#c7b08e",
                    },
                },
            ];

            that.datas = [];

            let value_sum = 0;

            for (let i = 0; i < pie_datas.length; i++) {
                value_sum += pie_datas[i].value;
            }

            for (let i = 0; i < pie_datas.length; i++) {
                let value = pie_datas[i].value;
                let ratio = `${((value / value_sum) * 100).toFixed(0)}%`;
                that.datas.push(ratio);
            }

            let option = that.getPie3D(pie_datas);
            life_affluent_chart.setOption(option);

            window.addEventListener("resize", function () {
                life_affluent_chart.resize();
            });
        },
        // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
        getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            height
        ) {
            // 计算
            let midRatio = (startRatio + endRatio) / 2;

            let startRadian = startRatio * Math.PI * 2;
            let endRadian = endRatio * Math.PI * 2;
            let midRadian = midRatio * Math.PI * 2;

            // 如果只有一个扇形，则不实现选中效果。
            if (startRatio === 0 && endRatio === 1) {
                isSelected = false;
            }

            // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
            k = typeof k !== "undefined" ? 1 : 1 / 3;

            // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
            let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
            let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

            // 计算高亮效果的放大比例（未高亮，则比例为 1）
            let hoverRate = isHovered ? 1.05 : 1;

            // 返回曲面参数方程
            return {
                u: {
                    min: -Math.PI,
                    max: Math.PI * 3,
                    step: Math.PI / 32,
                },

                v: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20,
                },

                x: function (u, v) {
                    if (u < startRadian) {
                        return (
                            offsetX +
                            Math.cos(startRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    if (u > endRadian) {
                        return (
                            offsetX +
                            Math.cos(endRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    return (
                        offsetX +
                        Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
                    );
                },

                y: function (u, v) {
                    if (u < startRadian) {
                        return (
                            offsetY +
                            Math.sin(startRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    if (u > endRadian) {
                        return (
                            offsetY +
                            Math.sin(endRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    return (
                        offsetY +
                        Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
                    );
                },

                z: function (u, v) {
                    if (u < -Math.PI * 0.5) {
                        return Math.sin(u);
                    }
                    if (u > Math.PI * 2.5) {
                        return Math.sin(u);
                    }
                    return Math.sin(v) > 0 ? 1 * height : -1;
                },
                z: function (u, v) {
                    if (u < -Math.PI * 0.5) {
                        return Math.sin(u);
                    }
                    if (u > Math.PI * 2.5) {
                        return Math.sin(u);
                    }
                    return Math.sin(v) > 0 ? 1 * height : -1;
                },
            };
            // console.log('getparams');
        },
        getPie3D(pieData, internalDiameterRatio = 2) {
            let series = [];
            let sumValue = 0;
            let startValue = 0;
            let endValue = 0;
            let legendData = [];
            let k =
                typeof internalDiameterRatio !== "undefined"
                    ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
                    : 1 / 3;

            // 为每一个饼图数据，生成一个 series-surface 配置
            for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value;

                let seriesItem = {
                    name:
                        typeof pieData[i].name === "undefined"
                            ? `series${i}`
                            : pieData[i].name,
                    type: "surface",
                    parametric: true,
                    wireframe: {
                        show: false,
                    },
                    pieData: pieData[i],
                    pieStatus: {
                        selected: false,
                        hovered: false,
                        k: k,
                    },
                    silent: false,
                    animation: true,
                    animationDurationUpdate: 2000,
                    animationEasingUpdate: "cubicOut",
                };

                if (typeof pieData[i].itemStyle != "undefined") {
                    let itemStyle = {};

                    typeof pieData[i].itemStyle.color != "undefined"
                        ? (itemStyle.color = pieData[i].itemStyle.color)
                        : null;
                    typeof pieData[i].itemStyle.opacity != "undefined"
                        ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                        : null;

                    seriesItem.itemStyle = itemStyle;
                }
                series.push(seriesItem);
                // console.log('get3d');
            }

            // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
            // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
            for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value;
                // console.log(series[i]);
                series[i].pieData.startRatio = startValue / sumValue;
                series[i].pieData.endRatio = endValue / sumValue;
                series[i].parametricEquation = this.getParametricEquation(
                    series[i].pieData.startRatio,
                    series[i].pieData.endRatio,
                    false,
                    false,
                    k,
                    series[i].pieData.value
                );

                startValue = endValue;

                legendData.push({
                    name: series[i].name,
                    icon: "rect",
                });
            }

            // 准备待返回的配置项，把准备好的 legendData、series 传入。
            let option = {
                // 鼠标移入事件
                tooltip: {
                    formatter: (params) => {
                        if (params.seriesName !== "mouseoutSeries") {
                            return `${
                                params.seriesName
                            }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                                params.color
                            };"></span>${
                                option.series[params.seriesIndex].pieData.value
                            }`;
                        }
                    },
                },
                legend: {
                    selectedMode: false, // 禁止点击
                    data: legendData,
                    top: "center",
                    right: "22%",
                    width: 100,
                    textStyle: {
                        color: "#93d5f6",
                        fontSize: 20,
                        padding: [0, 0, 0, 35],
                    },
                    itemGap: 35,
                    itemWidth: 15,
                },
                xAxis3D: {
                    min: -1,
                    max: 1,
                },
                yAxis3D: {
                    min: -1,
                    max: 1,
                },
                zAxis3D: {
                    min: -1,
                    max: 1,
                },
                grid3D: {
                    show: false,
                    boxHeight: 1.5,
                    top: "-5%",
                    left: "-18%",
                    // bottom: "100%",
                    backgroundColor: "transparent",
                    // environment: "white", // 图层背景
                    viewControl: {
                        autoRotate: false, // 自动旋转
                        // autoRotateDirection: "ccw", // 旋转方向
                        distance: 300,
                        // maxDistance: 300,
                        // minDistance: 300,
                        // rotateSensitivity: 0, //设置为0无法旋转
                        zoomSensitivity: 0, //设置为0无法缩放
                        panSensitivity: 0, //设置为0无法平移
                        alpha: 25,
                        beta: 50,
                    },
                },
                series: series,
            };
            // console.log(option);
            return option;
        },
    },
    watch: {
        run_life_affluent_chart(value) {
            if (value) {
                let that = this;
                that.Init();
                that.timer = setInterval(() => {
                    that.Init();
                }, 5000);
            }
        },
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
};
</script>
 
<style scoped lang="less">
.life_affluent_chart_container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    #life_affluent {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .datas_container {
        width: 100px;
        margin-right: 50px;
        .data_item {
            font-size: 2.5rem;
            color: #ffc47f;
            margin: 8px 0 15px;
        }
    }
}
</style>