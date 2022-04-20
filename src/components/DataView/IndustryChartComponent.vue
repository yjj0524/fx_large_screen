<template>
    <div id="industry_chart"></div>
</template>
 
<script>
import * as echarts from "echarts";

let industry_chart;

export default {
    name: "IndustryChart",
    data() {
        return {};
    },
    mounted() {
        let that = this;
        that.Init();

        // setInterval(() => {
        //     that.Init();
        // }, 5000);
    },
    methods: {
        Init() {
            let temp_datas = [];
            let temp_1 = [];
            for (let i = 0; i < 5; i++) {
                let item = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
                temp_1.push(item);
            }
            let temp_2 = [];
            for (let i = 0; i < 5; i++) {
                let item = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
                temp_2.push(item);
            }
            let temp_3 = [];
            for (let i = 0; i < 5; i++) {
                let item = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
                temp_3.push(item);
            }
            temp_datas.push(temp_1, temp_2, temp_3);
            let options = {
                grid: {
                    left: 60,
                    right: 20,
                    top: 50,
                    bottom: 40,
                },
                legend: {
                    selectedMode: false, // 禁止点击
                    show: true,
                    data: [
                        {
                            name: "产业一",
                            icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAADEUlEQVRIiX2UTYscVRSGn3PqVnV3etJtJsFEQQWXGslGCAwE8gPculTM1p0Lf4dLl4q/wZ0bwZXgJosIQYOMBBMhRjrOpDvTXffI/ajq25XONNy+t06d9z3v+bgltgCM7U8YY9xC+BC4gfE28A7CBGOW/Z4hLDGOEf7EuIvwC/ATxgop6NrH/fkm8AXwETANBjO2vt2hFNPZrX91KsL3GF8h/BzMcvZbJPsa+KTEWcF5nu2lQNIL+w743G0WfAN8LHvE7TAPs5BdFXvwnwITefYDS2C8oyRsNgBkhp5IBoH3l27lVn9w5l4rAryiPK9K7Dy/+jJnbvk7j5prWDVlvgOQQZP3/fLLl4bBoHmTxfQDHjuMdv03f7Uj/pUxh+I4AHRYFs7rUcdd4ZurnEze4+noLZ5TIa6jsZalveCheFSEC/E+eMZm1Pi4xDxVINKKlgrTCWsds3aXWNWvswykegGk3qpxWZlIOgiG4TjRhlOtQRpMGkRHmDaIpD3Yw5mqyT41EuRmnljtUGXtsi+GxkRSIAv/u22wKCLbUup9CyyLtaQ2PWtBGN12zmnvALLlTGHyuErOPWGSg+RJF00UuUaW0DlEAluKc06frZ+FlE1pN9cnnbXEQJ6ptUxsHe9HaFntQ5NbKt2EDxitrTEdsWbDGs9KhRU1z8XwXcYWA+TI8Vobh9h2TLtOiRQFSuA4TeZxtmFiZ8xaA7/G65gTJzyVimWAukhWcQ1lblUumqZdAo2mUQjPWuW5K953PpKW4pltTplVLQu9yCMnjjdEmUnVOyX9RSAdEHXP0ZbXjjCNvZy3K8RJw0GsfedcKOuWDRUXpJ0wChEhyxik5UDdnAcyIKYEDollq7InLJTnoqe14YE2Vzmqr3BvR4krMshqyuzi2UHsWZVLljHBJ/aq5Z55jvTkLk9eHHN9/C533BXua43vCfeUrC9NIOp61mVSRex9M+7olOvuMk/k+MsC7GB2xNxaPqPltrW8L8KheS5KjYoSeha+PRtt8DriPxnxj9b8KjU/SsW3eBbh5sSMHPwPHBwThB7lINkAAAAASUVORK5CYII=",
                        },
                        {
                            name: "产业二",
                            icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAACYElEQVRIiaWUz2pTQRTGf/MnNjdJE2g3dqMPYMGNIBQEH8CtS8Fu3fkkLt2KS936AAVXghsXFbqooEgrWFuatklokntk7kzSuZOJFR0YMnfOme/7zjcno5AByWgCD4B7wF3gFnAbKIBuSO0DQ+Ar8A34BHwE3gOjGE4h/dn6PvAceAS065wKkFRILn4BvANeAB8CwVEb1EuQJ/UDRKBqEbMWz+a8BnmmkIM3wOM/yPuf8VYhX4agml5NqkISe1Qmlqtovj+y0L+EZnMxmHqe3sOyvHgUlxZOD2Es0Oj9mxW5Stxon8L6DwsyhcEB2BMwa6A6gP478IVmKKF1DuvH0BmAVtZnKYFyCPIdtAbVCv8HZ13DT5cnJiBN/Rk7hsYYVkbQGsLqAExNn02kBKPVOZiLkCxgFBhxisIvYY8wQ2xulcOosAKVSFRn1DqSGhy+Va6d4vMzzKqCTC/WLs0RKT9jAJVUnbscwdYB1SyWafx4Py64liuJTfMKaqwgbZACyiYod8ENmCjQxsf1FEpX2djP6oEbgXYvZxmgKkIblViArIHuXN1NbJWKe8GEtYWygGnXQ5QlmHNoHEPDvbZVmzqwm6B6VwCaRdtycyGu/ZM+cYSncOPQgt4A1fUJegmQToivI62s7jlbrbckDuhImc6Q5MiXfUtHw8q+/zBRwGRUXQecE1Tua2htQXN3uUq3NzsYr6+7H9kF2dLw8wjONqG7DcUemNBmKVhKnhJXee7sHrANdhOKI4XsJEkbPZCnIA9B7gBrIKtgXIINb8/EC9FnYH6B/gx6B/Qr3z2BHMVvKJq29bpVRYcAAAAASUVORK5CYII=",
                        },
                        {
                            name: "产业三",
                            icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAADFUlEQVRIiX2UPW9cRRSGnzMzN9m1jTcxDaDIFJSJRIOEZCkfPyAuUwaRlo5fQkkZi3+ARJMqSKkipaEIUgoXIJQPxXG0ie013r1z0Jw7cz17veKu7s7H+Xjf8565IzcfLxg8I+Am8A3wNbANfAmMgc3s+gGYAX8BfwN/AM+AJ8BpnU5uPeoBvgV+VLgrsH7uAWg1Dp96XzhG+Q34CXhqW7d/Xawj/Ixyf2WsVBs6NK5Y5onALwo/BDfjIXBvJUsBKfvFpP2y9zcXWQYDvhNlHNwxuysKv0CWJSWWVSt2N/ABdoN/y5muMRrKK1x85H+SDknYfIOzEN7wqr2CconJqh6uQpFBKVL1q9jiVabza7wOKK2f8lIb3mvDljo2MrGOlS5rfQGgYi6O2E44WnzBYdziRB0S+vDITOb8Ix6nwhpq38MIpRGlIVoffdalRVC9xFwb5nGd03aTWfspJ9oAATRXFgoX6Rh2g+MIz7F60FRjQNKoaWxsnSIlBrMnWLOJ709aymG5Qq5Ps0GyuQPqJJDqW+gE08xQc6xYdaopQvo+W5gdgsHRlqUjIWjWvO+l5iQZWIzScn/MV60tSR45z66ZVV4n6awCLZAVm7r3BWhQrUnUO/S1eda1YUzDSAON/bzp71Nf8LTWG8ccz1w8pyqcIpwIRC19zQAdEc+Yy2xpw4YGnImXXy3IsatZra22ExDGmm7ZjnlU5QjhUGCWik0OTi/zmTZMjF3ajVnflCR2VKJmPWJn74FjlrbrkBNlU9MbmeJ4FbThcxyblggrfymw3AUlqZQTlEiUdamsVNqCeCYaUwXpy227xMTz61mkAnLn1di8zcljdUXnSu26cNlX2XAa2O+DC9MiTXrTXpv3U8K2AstzGcbn183Ydwg7OJ5L5SiVo7GsQXMvChEbE1A9puTHPHdTdpz7yIH8yw0VHqC8MHOV0PRN88I2rXOiAlbOuLREd8SLcMCD9io3FtsclLsImbOHZ08iE3V8j3JHPNcRtoBP0glJt1Duy0IW6Z+PIrwj8ifK7xLZO/uKqR2U1BfgP/mBiVcGDXIHAAAAAElFTkSuQmCC",
                        },
                    ],
                    orient: "horizontal",
                    top: "3%",
                    right: "2.3%",
                    itemWidth: 16.5,
                    itemHeight: 6,
                    textStyle: {
                        color: "white",
                    },
                },
                xAxis: [
                    {
                        data:
                            [
                                "数据一",
                                "数据二",
                                "数据三",
                                "数据四",
                                "数据五",
                            ] || [],
                        axisLabel: {
                            show: true,
                            color: "#92d5f5",
                            fontSize: 12,
                            margin: 15, //刻度标签与轴线之间的距离。
                        },
                        axisLine: {
                            show: true, //不显示x轴
                        },
                        axisTick: {
                            show: false, //不显示刻度
                        },
                        boundaryGap: true,
                    },
                ],
                yAxis: [
                    {
                        show: true,
                        axisLabel: {
                            interval: "auto",
                            show: true,
                            fontSize: 14,
                            color: "#585b60",
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                color: "#2e3441",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                color: "#2e3441",
                            },
                        },
                        max: 120,
                    },
                ],
                series: [
                    {
                        //柱底圆片
                        name: "产业一",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [-30, 4],
                        z: 12,
                        itemStyle: {
                            color: "#eb9b00",
                        },
                        data: temp_datas[0] || [],
                    },
                    //柱体
                    {
                        name: "产业一",
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(57, 62, 74, .4)",
                            borderRadius: 5,
                        },
                        barWidth: 20,
                        barGap: "10%",
                        itemStyle: {
                            color: "#a48a15",
                            // color: () => {
                            //     return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            //         { offset: 0, color: '#01AEF6' },
                            //         { offset: 1, color: 'rgba(57,125,213, 0.2)' },
                            //     ])
                            // },
                            opacity: 0.7,
                        },
                        data: temp_datas[0] || [],
                    },
                    //柱顶圆片
                    {
                        name: "产业一",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [-30, -5],
                        z: 12,
                        symbolPosition: "end",
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            offset: [-30, 0],
                        },
                        itemStyle: {
                            color: () => {
                                return new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#fcee01" },
                                        { offset: 1, color: "#e37d00" },
                                    ]
                                );
                            },
                            // color: 'rgba(64,172,252)',
                        },
                        data: temp_datas[0] || [],
                    },

                    {
                        //柱底圆片
                        name: "产业二",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [0, 4],
                        z: 12,
                        itemStyle: {
                            color: "#00ffd7",
                        },
                        data: temp_datas[1] || [],
                    },
                    //柱体
                    {
                        name: "产业二",
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(57, 62, 74, .4)",
                            borderRadius: 5,
                        },
                        barWidth: 20,
                        barGap: "20%",
                        itemStyle: {
                            color: "#0bb6a5",
                            opacity: 0.7,
                        },
                        data: temp_datas[1] || [],
                    },
                    //柱顶圆片
                    {
                        name: "产业二",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [0, -5],
                        z: 12,
                        symbolPosition: "end",
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            offset: [0, 0],
                        },
                        itemStyle: {
                            color: () => {
                                return new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#00fcf4" },
                                        { offset: 1, color: "#00ffc4" },
                                    ]
                                );
                            },
                            // color: 'rgba(64,172,252)',
                        },
                        data: temp_datas[1] || [],
                    },

                    {
                        //柱底圆片
                        name: "产业三",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [30, 4],
                        z: 12,
                        itemStyle: {
                            color: "#458ffc",
                        },
                        data: temp_datas[2] || [],
                    },
                    //柱体
                    {
                        name: "产业三",
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(57, 62, 74, .4)",
                            borderRadius: 5,
                        },
                        barWidth: 20,
                        barGap: "50%",
                        itemStyle: {
                            color: "#396fbe",
                            opacity: 0.7,
                        },
                        data: temp_datas[2] || [],
                    },
                    //柱顶圆片
                    {
                        name: "产业三",
                        type: "pictorialBar",
                        symbolSize: [20, 8], //调整截面形状
                        symbolOffset: [30, -5],
                        z: 12,
                        symbolPosition: "end",
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            offset: [30, 0],
                        },
                        itemStyle: {
                            color: () => {
                                return new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#3dbdfa" },
                                        { offset: 1, color: "#4976fc" },
                                    ]
                                );
                            },
                            // color: 'rgba(64,172,252)',
                        },
                        data: temp_datas[2] || [],
                    },
                ],
            };

            // 销毁
            if (
                industry_chart != null &&
                industry_chart != "" &&
                industry_chart != undefined
            ) {
                industry_chart.dispose();
            }

            industry_chart = echarts.init(
                document.getElementById("industry_chart")
            );
            // 定时适应一次，防止icon图片变形
            setTimeout(() => {
                industry_chart.resize();
            }, 800);
            industry_chart.setOption(options);
            window.addEventListener("resize", function () {
                industry_chart.resize();
            });
        },
    },
};
</script>
 
<style scoped lang="less">
#industry_chart {
    width: 100%;
    height: 100%;
}
</style>