<template>
    <div class="overall">
        <div class="aperture_Container">
            <!-- 光环1 -->
            <div class="halo_1"></div>
            <!-- 光环2 -->
            <div class="halo_2"></div>
            <!-- 光圈 -->
            <div class="aperture"></div>
            <svg
                id="circle_line_1"
                width="1700"
                height="1700"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="860"
                    cy="860"
                    r="720"
                    stroke="#58638d"
                    stroke-width="1"
                    fill="transparent"
                />
            </svg>
            <svg
                id="circle_line_2"
                width="2000"
                height="2000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="1000"
                    cy="1000"
                    r="920"
                    stroke="#58638d"
                    stroke-width="1"
                    fill="transparent"
                />
            </svg>
        </div>
        <!-- 24节气背景图 -->
        <div class="solar_terms">
            <img src="@/static/images/solar_terms.png" alt="" />
        </div>
        <!-- 24节气图标和标题 -->
        <div class="solar_terms_item" v-show="show_solar_terms_img">
            <img
                v-for="(item, index) in solar_terms_datas"
                :key="index"
                :class="`item item${index + 1}`"
                :src="item.img"
                alt=""
            />
            <h1 class="title1" :style="titleStyle">智 慧新 桥</h1>
            <h1 class="title2">智 慧新 桥</h1>
        </div>
        <!-- 一级标题移动轨迹 -->
        <!-- <svg
            class="primary_title_path"
            width="600"
            height="800"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="none"
                stroke="transparent"
                d="M792,5.33333c-779,3 -789,790 -789,789.86667"
            />
        </svg> -->
        <!-- 一级标题 -->
        <div class="primary_title">
            <div
                class="item"
                :class="`item${index + 1}`"
                v-for="(value, index) in primary_title_datas"
                :key="index"
                @click="OpenSubTitle"
            >
                <div class="title">{{ value.title }}</div>
                <img
                    src="@/static/images/title.png"
                    @mouseover="EnlargePrimaryTitle"
                    @mouseleave="NarrowPrimaryTitle"
                    alt=""
                />
            </div>
        </div>
        <!-- 二级标题移动轨迹 -->
        <!-- <svg
            class="sub_title_path"
            width="1000"
            height="1100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="none"
                stroke="red"
                d="M-218,1100c1190,-5 956,-1046 956,-1046"
            />
        </svg> -->
        <!-- 二级标题 -->
        <div class="sub_title">
            <div
                class="sub_item"
                :class="`sub_item${index + 1}`"
                v-for="(item, index) in sub_title_datas"
                :key="index"
            >
                <div class="title" @click="OpenSubTitleContent(index)">
                    {{ item.title }}
                </div>
                <div
                    v-for="(v, k) of 9"
                    :key="k"
                    :class="[k == 0 ? 'big_scale' : 'small_scale', `item${v}`]"
                    class="scale"
                ></div>
                <div class="sign" v-show="sub_title_selete_index == index">
                    <div class="sign_2">
                        <div class="sign_3"></div>
                    </div>
                </div>
            </div>
            <div
                class="sub_item close"
                :class="`sub_item${sub_title_datas.length + 1}`"
                @click="CloseSubTitle"
            >
                <div class="title">关闭</div>
                <div class="scale big_scale"></div>
            </div>
        </div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    name: "",
    data() {
        return {
            show_solar_terms_img: false,
            // 24节气
            solar_terms_datas: [
                {
                    time: "20220104",
                    solar_terms: "立春",
                    img: "",
                },
                {
                    time: "20220219",
                    solar_terms: "雨水",
                    img: "",
                },
                {
                    time: "20220305",
                    solar_terms: "惊蜇",
                    img: "",
                },
                {
                    time: "20220320",
                    solar_terms: "春分",
                    img: "",
                },
                {
                    time: "20220405",
                    solar_terms: "清明",
                    img: "",
                },
                {
                    time: "20220420",
                    solar_terms: "谷雨",
                    img: "",
                },
                {
                    time: "20220505",
                    solar_terms: "立夏",
                    img: "",
                },
                {
                    time: "20220521",
                    solar_terms: "小满",
                    img: "",
                },
                {
                    time: "20220606",
                    solar_terms: "芒种",
                    img: "",
                },
                {
                    time: "20220621",
                    solar_terms: "夏至",
                    img: "",
                },
                {
                    time: "20220707",
                    solar_terms: "小暑",
                    img: "",
                },
                {
                    time: "20220723",
                    solar_terms: "大暑",
                    img: "",
                },
                {
                    time: "20220807",
                    solar_terms: "立秋",
                    img: "",
                },
                {
                    time: "20220823",
                    solar_terms: "处暑",
                    img: "",
                },
                {
                    time: "20220907",
                    solar_terms: "白露",
                    img: "",
                },
                {
                    time: "20220923",
                    solar_terms: "秋分",
                    img: "",
                },
                {
                    time: "20221008",
                    solar_terms: "寒露",
                    img: "",
                },
                {
                    time: "20221023",
                    solar_terms: "霜降",
                    img: "",
                },
                {
                    time: "20221107",
                    solar_terms: "立冬",
                    img: "",
                },
                {
                    time: "20221122",
                    solar_terms: "小雪",
                    img: "",
                },
                {
                    time: "20221207",
                    solar_terms: "大雪",
                    img: "",
                },
                {
                    time: "20221222",
                    solar_terms: "冬至",
                    img: "",
                },
                {
                    time: "20230105",
                    solar_terms: "小寒",
                    img: "",
                },
                {
                    time: "20230120",
                    solar_terms: "大寒",
                    img: "",
                },
            ],
            // 一级标题
            primary_title_datas: [
                {
                    title: "一级标题",
                },
                {
                    title: "一级标题",
                },
                {
                    title: "一级标题",
                },
                {
                    title: "一级标题",
                },
                {
                    title: "一级标题",
                },
            ],
            // 子标题
            sub_title_datas: [],
            sub_title_selete_index: null,
            sub_title_show: false,
            titleStyle: {
                textShadow: "",
            },
        };
    },
    mounted() {
        const that = this;
        that.SetSolarTermsImg();

        //#region 执行背景动画
        // halo_1动画
        anime({
            // targets: document.querySelector(".halo_1"),
            // rotate: -360,
            // duration: 60000,
            // easing: "linear",
            // loop: true,
        });
        // halo_2动画
        anime({
            // targets: document.querySelector(".halo_2"),
            // rotate: 360,
            // duration: 60000,
            // easing: "linear",
            // loop: true,
        });
        // aperture动画
        anime.timeline({
            targets: document.querySelector(".aperture"),
            loop: true,
        });
        // .add({
        //     rotate: 360,
        //     duration: 60000,
        //     easing: "linear",
        // });
        // solar_terms动画
        anime
            .timeline({
                targets: document.querySelector(".solar_terms"),
            })
            .add({
                scale: 30.5,
                duration: 2000,
                easing: "easeInOutQuad",
                complete: function () {
                    // 运行24节气动画
                    let solar_terms_Array = document.querySelectorAll(
                        ".solar_terms_item .item"
                    );

                    for (let i = 0; i < solar_terms_Array.length; i++) {
                        anime
                            .timeline({
                                targets: solar_terms_Array[i],
                                easing: "linear",
                                loop: 1,
                            })
                            .add({
                                rotate: i * 15,
                                duration: 0,
                            })
                            .add({
                                scale: 1.3,
                                duration: 300, // 持续时间
                            })
                            .add({
                                scale: 1,
                                duration: 300, // 持续时间
                            });
                    }

                    // 主标题显示
                    that.show_solar_terms_img = true;
                    // 主标题动画
                    anime
                        .timeline({
                            targets: document.querySelectorAll(
                                ".solar_terms_item .title1"
                            ),
                            easing: "linear",
                        })
                        .add({
                            translateY: 6,
                            duration: 1500,
                            loop: 1,
                            complete: function () {
                                that.titleStyle.textShadow = "0 7px 0 #091225";
                            },
                        });
                },
            });
        //#endregion

        //#region 执行一级标题显示动画
        let primary_title_el = document.querySelectorAll(
            ".primary_title .item"
        );

        for (let i = 0; i < primary_title_el.length; i++) {
            let rotate = 0;
            switch (i) {
                case 0:
                    rotate = 20;
                    break;
                case 1:
                    rotate = 10;
                    break;
                case 3:
                    rotate = -10;
                    break;
                case 4:
                    rotate = -20;
                    break;
            }
            anime({
                targets: primary_title_el[i],
                loop: 1,
                rotate: rotate,
                easing: "linear",
                duration: 0,
            });
            anime({
                targets: primary_title_el[i],
                delay: i * 300,
                loop: 1,
                opacity: [
                    { value: ".2" },
                    { value: ".4" },
                    { value: ".6" },
                    { value: ".8" },
                    { value: "1" },
                ],
                translateX: 350,
                easing: "linear",
                duration: 1000,
            });
        }
        // var primary_title_path = anime.path(".primary_title_path path");
        // anime({
        //     targets: ".primary_title",
        //     translateX: primary_title_path("x"),
        //     translateY: primary_title_path("y"),
        //     rotate: primary_title_path("angle"),
        //     easing: "linear",
        //     duration: 2500,
        //     loop: 1,
        // });
        //#endregion

        //#region 执行子标题动画
        // var sub_title_path = anime.path(".sub_title_path path");
        // anime({
        //     targets: ".sub_title",
        //     translateX: sub_title_path("x"),
        //     translateY: sub_title_path("y"),
        //     rotate: sub_title_path("angle"),
        //     easing: "linear",
        //     duration: 5500,
        //     loop: 1,
        // });

        //#endregion
    },
    methods: {
        // 设置24节气图片
        SetSolarTermsImg() {
            let solar_terms = this.solar_terms_datas;
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            let s = null;

            if (month < 10) {
                month = `0${month}`;
            }

            if (day < 10) {
                day = `0${day}`;
            }

            s = year + month + day;
            let target_index = 0;
            // 获取当前节气
            while (
                target_index < solar_terms.length &&
                s >= solar_terms[target_index].time
            ) {
                target_index++;
            }

            target_index--;

            for (let i = 0; i < solar_terms.length; i++) {
                let item = solar_terms[i];
                let img_index = i < 9 ? `0${i + 1}` : i + 1;

                if (target_index == i) {
                    solar_terms[
                        i
                    ].img = require(`../../static/images/solar_terms/${img_index}-3.png`);
                } else if (s > item.time) {
                    solar_terms[
                        i
                    ].img = require(`../../static/images/solar_terms/${img_index}-2.png`);
                } else if (s < item.time) {
                    solar_terms[
                        i
                    ].img = require(`../../static/images/solar_terms/${img_index}-1.png`);
                }
            }

            this.solar_terms_datas = solar_terms;
        },
        // 放大一级标题图标
        EnlargePrimaryTitle(e) {
            anime({
                targets: e.target,
                loop: 1,
                easing: "linear",
                scale: 1.3,
                duration: 200,
            });
        },
        // 缩小一级标题图标
        NarrowPrimaryTitle(e) {
            anime({
                targets: e.target,
                loop: 1,
                easing: "linear",
                scale: 1,
                duration: 200,
            });
        },
        // 获取子标题数据
        GetSubTitleDatas() {
            let sub_title_datas = [];
            let count = Math.floor(Math.random() * (7 - 1) + 1);

            for (let i = 0; i < 6; i++) {
                sub_title_datas.push({
                    title: `二级标题${i + 1}`,
                });
            }

            this.sub_title_datas = sub_title_datas;
        },
        // 打开子标题
        OpenSubTitle() {
            let that = this;
            that.sub_title_selete_index = null;
            that.GetSubTitleDatas();

            setTimeout(() => {
                let sub_item_el = document.querySelectorAll(
                    ".sub_title .sub_item"
                );
                let sub_title_el =
                    document.querySelectorAll(".sub_title .title");

                // sign复位
                let sub_title_sign =
                    document.querySelectorAll(".sub_title .sign");

                if (that.sub_title_selete_index != null) {
                    anime({
                        targets: sub_title_sign[that.sub_title_selete_index],
                        easing: "linear",
                        scale: 1,
                        duration: 0, // 持续时间
                        loop: 1,
                    });
                }

                for (let i = 0; i < sub_item_el.length; i++) {
                    let scale_el = sub_item_el[i].querySelectorAll(".scale");

                    // 元素复位
                    if (that.sub_title_show) {
                        anime({
                            targets: sub_title_el[i],
                            translateX: 0,
                            opacity: [{ value: "0" }],
                            loop: 1,
                            easing: "linear",
                            duration: 0,
                        });

                        for (let j = 0; j < scale_el.length; j++) {
                            anime({
                                targets: scale_el[j],
                                delay: 0,
                                opacity: [{ value: "0" }],
                                loop: 1,
                                easing: "linear",
                                duration: 0,
                            });
                        }
                    }

                    // 显示元素
                    anime({
                        targets: sub_title_el[i],
                        delay: i * 200,
                        translateX: -160,
                        opacity: [
                            { value: ".2" },
                            { value: ".4" },
                            { value: ".6" },
                            { value: ".8" },
                            { value: "1" },
                        ],
                        loop: 1,
                        easing: "linear",
                        duration: 500,
                    });

                    for (let j = 0; j < scale_el.length; j++) {
                        anime({
                            targets: scale_el[j],
                            delay: i * 200,
                            opacity: [
                                { value: ".2" },
                                { value: ".4" },
                                { value: ".6" },
                                { value: ".8" },
                                { value: "1" },
                            ],
                            loop: 1,
                            easing: "linear",
                            duration: 500,
                        });
                    }
                }
            }, 100);

            that.sub_title_show = true;
        },
        // 打开子标题内容
        OpenSubTitleContent(index) {
            let that = this;
            let sub_title = document.querySelectorAll(".sub_title .sign");

            // sign元素复位
            if (that.sub_title_selete_index != null) {
                anime({
                    targets: sub_title[that.sub_title_selete_index],
                    easing: "linear",
                    scale: 1,
                    duration: 300, // 持续时间
                    loop: 1,
                });
            }

            that.sub_title_selete_index = index;

            anime({
                targets: sub_title[index],
                easing: "linear",
                scale: 10,
                duration: 300, // 持续时间
                loop: 1,
            });
        },
        // 关闭子标题
        CloseSubTitle() {
            let that = this;
            let sub_item_el = document.querySelectorAll(".sub_title .sub_item");
            let sub_title_el = document.querySelectorAll(".sub_title .title");
            let sub_title_sign = document.querySelectorAll(".sub_title .sign");

            // sign元素复位
            if (that.sub_title_selete_index != null) {
                anime({
                    targets: sub_title_sign[that.sub_title_selete_index],
                    easing: "linear",
                    scale: 1,
                    duration: 300, // 持续时间
                    loop: 1,
                    complete: function () {
                        that.sub_title_selete_index = null;
                    },
                });
            }

            for (let i = 0; i < sub_item_el.length; i++) {
                let scale_el = sub_item_el[i].querySelectorAll(".scale");

                anime({
                    targets: sub_title_el[i],
                    translateX: 0,
                    delay: i * 10,
                    opacity: [
                        { value: ".8" },
                        { value: ".6" },
                        { value: ".4" },
                        { value: ".2" },
                        { value: "0" },
                    ],
                    loop: 1,
                    easing: "linear",
                    duration: 500,
                });

                for (let j = 0; j < scale_el.length; j++) {
                    anime({
                        targets: scale_el[j],
                        delay: j * 10,
                        opacity: [
                            { value: ".8" },
                            { value: ".6" },
                            { value: ".4" },
                            { value: ".2" },
                            { value: "0" },
                        ],
                        loop: 1,
                        easing: "linear",
                        duration: 500,
                    });
                }
            }
        },
    },
};
</script>

<style lang="less" scoped>
.overall {
    width: 90%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 194px;
    overflow: hidden;
    .aperture_Container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        .halo_1 {
            width: 3100px;
            height: 3100px;
            position: absolute;
            top: -92%;
            left: 10px;
            right: 0;
            margin: 0 auto;
            background-image: url("@/static/images/halo.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            opacity: 0.05;
        }
        .halo_2 {
            width: 2300px;
            height: 2300px;
            position: absolute;
            top: -55.5%;
            left: 12px;
            right: 0;
            margin: 0 auto;
            background-image: url("@/static/images/halo.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            opacity: 0.05;
        }
        .aperture {
            width: 1500px;
            height: 1500px;
            position: absolute;
            top: -206px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            background-image: url("@/static/images/aperture.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        #circle_line_1 {
            position: absolute;
            top: -320px;
            left: 857px;
        }
        #circle_line_2 {
            position: absolute;
            top: -460px;
            left: 729px;
        }
    }
    .solar_terms {
        width: 40px;
        height: 35px;
        position: absolute;
        top: 48.1%;
        left: 0;
        right: 0;
        margin: 0 auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .solar_terms_item {
        width: 1000px;
        height: 1000px;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        margin: 0 auto;
        // display: flex;
        .item {
            width: 6rem;
            height: 6rem;
            position: absolute;
        }
        .item1 {
            top: 15px;
            left: 452px;
        }
        .item2 {
            top: 30px;
            left: 573px;
        }
        .item3 {
            top: 74px;
            left: 681px;
        }
        .item4 {
            top: 145px;
            left: 777px;
        }
        .item5 {
            top: 237px;
            left: 848px;
        }
        .item6 {
            top: 346px;
            left: 894px;
        }
        .item7 {
            top: 456px;
            left: 907px;
        }
        .item8 {
            top: 577px;
            left: 892px;
        }
        .item9 {
            top: 683px;
            left: 847px;
        }
        .item10 {
            top: 776px;
            left: 774px;
        }
        .item11 {
            top: 846px;
            left: 681px;
        }
        .item12 {
            top: 890px;
            left: 570px;
        }
        .item13 {
            top: 904px;
            left: 456px;
        }
        .item14 {
            top: 890px;
            left: 336px;
        }
        .item15 {
            top: 844px;
            left: 227px;
        }
        .item16 {
            top: 774px;
            left: 132px;
        }
        .item17 {
            top: 683px;
            left: 60px;
        }
        .item18 {
            top: 575px;
            left: 14px;
        }
        .item19 {
            top: 458px;
            left: -1px;
        }
        .item20 {
            top: 344px;
            left: 13px;
        }
        .item21 {
            top: 237px;
            left: 61px;
        }
        .item22 {
            top: 146px;
            left: 134px;
        }
        .item23 {
            top: 75px;
            left: 228px;
        }
        .item24 {
            top: 32px;
            left: 336px;
        }
        .title1 {
            width: 210px;
            font-size: 6.5rem;
            position: absolute;
            top: 315px;
            left: 396px;
            color: #7f6c4a;
        }
        .title2 {
            width: 210px;
            font-size: 6.5rem;
            position: absolute;
            top: 315px;
            left: 396px;
            background-image: linear-gradient(
                -45deg,
                #ebe6de,
                #ebe6de,
                #d5bb8c,
                #d5bb8c,
                #5f4f33,
                #a4967e,
                #d5bb8c,
                #d5bb8c,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #d5bb8c,
                #68583e,
                #68583e,
                #68583e,
                #68583e
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    // .primary_title_path {
    //     position: absolute;
    //     top: -261px;
    //     left: 1007px;
    // }
    .primary_title {
        width: 10px;
        height: 10px;
        position: absolute;
        // top: -261px;
        top: 540px;
        left: 1007px;
        // display: flex;
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            opacity: 0;
            // margin-bottom: 6rem;
            .title {
                width: 200px;
                color: white;
                font-size: 3rem;
                text-align: left;
            }
            img {
                width: 7em;
                height: 7rem;
            }
        }
        .item1 {
            // top: 35px;
            // left: -456px;
            // transform: rotate(-69deg);
            // -ms-transform: rotate(-69deg); /* IE 9 */
            // -moz-transform: rotate(-69deg); /* Firefox */
            // -webkit-transform: rotate(-69deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-69deg); /* Opera */

            top: -509px;
            left: -525px;
        }
        .item2 {
            // top: 78px;
            // left: -302px;
            // transform: rotate(-80deg);
            // -ms-transform: rotate(-80deg); /* IE 9 */
            // -moz-transform: rotate(-80deg); /* Firefox */
            // -webkit-transform: rotate(-80deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-80deg); /* Opera */

            top: -280px;
            left: -593px;
        }
        .item3 {
            // top: 93px;
            // left: -142px;
            // transform: rotate(-91deg);
            // -ms-transform: rotate(-91deg); /* IE 9 */
            // -moz-transform: rotate(-91deg); /* Firefox */
            // -webkit-transform: rotate(-91deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-91deg); /* Opera */

            top: -50px;
            left: -609px;
        }
        .item4 {
            // top: 72px;
            // left: 13px;
            // transform: rotate(-102deg);
            // -ms-transform: rotate(-102deg); /* IE 9 */
            // -moz-transform: rotate(-102deg); /* Firefox */
            // -webkit-transform: rotate(-102deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-102deg); /* Opera */

            top: 184px;
            left: -593px;
        }
        .item5 {
            // top: 19px;
            // left: 160px;
            // transform: rotate(-114deg);
            // -ms-transform: rotate(-114deg); /* IE 9 */
            // -moz-transform: rotate(-114deg); /* Firefox */
            // -webkit-transform: rotate(-114deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-114deg); /* Opera */

            top: 407px;
            left: -527px;
        }
    }
    // .sub_title_path {
    //     position: absolute;
    //     top: 258px;
    //     left: 1652px;
    // }
    .sub_title {
        width: 521px;
        position: absolute;
        top: 82px;
        left: 2390px;
        transform: rotate(1deg);
        -ms-transform: rotate(1deg); /* IE 9 */
        -moz-transform: rotate(1deg); /* Firefox */
        -webkit-transform: rotate(1deg); /* Safari 和 Chrome */
        -o-transform: rotate(1deg); /* Opera */
        .sub_item {
            height: 151px;
            color: white;
            font-size: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            .title {
                position: absolute;
                left: 200px;
                top: -3px;
                opacity: 0;
            }
            .big_scale {
                width: 20px;
                height: 3px;
                background: white;
                margin-top: 12px;
            }
            .small_scale {
                width: 10px;
                height: 2px;
                background: white;
                margin-top: 12px;
            }
            .scale {
                opacity: 0;
            }
            .sign {
                width: 6px;
                height: 6px;
                top: 11px;
                left: -13px;
                position: absolute;
                border-radius: 60px;
                background-color: rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                .sign_2 {
                    width: 4.5px;
                    height: 4.5px;
                    background-color: rgba(255, 255, 255, 0.3);
                    border-radius: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    .sign_3 {
                        width: 3px;
                        height: 3px;
                        border-radius: 30px;
                        background: white;
                        position: absolute;
                    }
                }
            }
            .item1 {
            }
            .item2 {
                position: absolute;
                top: 17px;
                left: 0px;
                transform: rotate(5deg);
                -ms-transform: rotate(5deg); /* IE 9 */
                -moz-transform: rotate(5deg); /* Firefox */
                -webkit-transform: rotate(5deg); /* Safari 和 Chrome */
                -o-transform: rotate(5deg); /* Opera */
            }
            .item3 {
                position: absolute;
                top: 34px;
                left: -1px;
                transform: rotate(7deg);
                -ms-transform: rotate(7deg); /* IE 9 */
                -moz-transform: rotate(7deg); /* Firefox */
                -webkit-transform: rotate(7deg); /* Safari 和 Chrome */
                -o-transform: rotate(7deg); /* Opera */
            }
            .item4 {
                position: absolute;
                top: 51px;
                left: -3px;
                transform: rotate(7deg);
                -ms-transform: rotate(7deg); /* IE 9 */
                -moz-transform: rotate(7deg); /* Firefox */
                -webkit-transform: rotate(7deg); /* Safari 和 Chrome */
                -o-transform: rotate(7deg); /* Opera */
            }
            .item5 {
                position: absolute;
                top: 68px;
                left: -5px;
                transform: rotate(7deg);
                -ms-transform: rotate(7deg); /* IE 9 */
                -moz-transform: rotate(7deg); /* Firefox */
                -webkit-transform: rotate(7deg); /* Safari 和 Chrome */
                -o-transform: rotate(7deg); /* Opera */
            }
            .item6 {
                position: absolute;
                top: 85px;
                left: -7px;
                transform: rotate(9deg);
                -ms-transform: rotate(9deg); /* IE 9 */
                -moz-transform: rotate(9deg); /* Firefox */
                -webkit-transform: rotate(9deg); /* Safari 和 Chrome */
                -o-transform: rotate(9deg); /* Opera */
            }
            .item7 {
                position: absolute;
                top: 102px;
                left: -10px;
                transform: rotate(10deg);
                -ms-transform: rotate(10deg); /* IE 9 */
                -moz-transform: rotate(10deg); /* Firefox */
                -webkit-transform: rotate(10deg); /* Safari 和 Chrome */
                -o-transform: rotate(10deg); /* Opera */
            }
            .item8 {
                position: absolute;
                top: 119px;
                left: -13px;
                transform: rotate(12deg);
                -ms-transform: rotate(12deg); /* IE 9 */
                -moz-transform: rotate(12deg); /* Firefox */
                -webkit-transform: rotate(12deg); /* Safari 和 Chrome */
                -o-transform: rotate(12deg); /* Opera */
            }
            .item9 {
                position: absolute;
                top: 136px;
                left: -17px;
                transform: rotate(9deg);
                -ms-transform: rotate(9deg); /* IE 9 */
                -moz-transform: rotate(9deg); /* Firefox */
                -webkit-transform: rotate(9deg); /* Safari 和 Chrome */
                -o-transform: rotate(9deg); /* Opera */
            }
        }
        .sub_item1 {
            top: -164px;
            left: -181px;
            transform: rotate(-42deg);
            -ms-transform: rotate(-42deg); /* IE 9 */
            -moz-transform: rotate(-42deg); /* Firefox */
            -webkit-transform: rotate(-42deg); /* Safari 和 Chrome */
            -o-transform: rotate(-42deg); /* Opera */
        }
        .sub_item2 {
            top: -127px;
            left: -72px;
            transform: rotate(-29deg);
            -ms-transform: rotate(-29deg); /* IE 9 */
            -moz-transform: rotate(-29deg); /* Firefox */
            -webkit-transform: rotate(-29deg); /* Safari 和 Chrome */
            -o-transform: rotate(-29deg); /* Opera */
        }
        .sub_item3 {
            top: -70px;
            left: -9px;
            transform: rotate(-14.5deg);
            -ms-transform: rotate(-15.5deg); /* IE 9 */
            -moz-transform: rotate(-15.5deg); /* Firefox */
            -webkit-transform: rotate(-15.5deg); /* Safari 和 Chrome */
            -o-transform: rotate(-15.5deg); /* Opera */
        }
        .sub_item4 {
            left: 3px;
            transform: rotate(-1deg);
            -ms-transform: rotate(-1deg); /* IE 9 */
            -moz-transform: rotate(-1deg); /* Firefox */
            -webkit-transform: rotate(-1deg); /* Safari 和 Chrome */
            -o-transform: rotate(-1deg); /* Opera */
        }
        .sub_item5 {
            top: 51px;
            left: -31px;
            transform: rotate(11deg);
            -ms-transform: rotate(11deg); /* IE 9 */
            -moz-transform: rotate(11deg); /* Firefox */
            -webkit-transform: rotate(11deg); /* Safari 和 Chrome */
            -o-transform: rotate(11deg); /* Opera */
        }
        .sub_item6 {
            top: 92px;
            left: -108px;
            transform: rotate(23deg);
            -ms-transform: rotate(23deg); /* IE 9 */
            -moz-transform: rotate(23deg); /* Firefox */
            -webkit-transform: rotate(23deg); /* Safari 和 Chrome */
            -o-transform: rotate(23deg); /* Opera */
        }
        .sub_item7 {
            top: 125px;
            left: -238px;
            transform: rotate(38deg);
            -ms-transform: rotate(38deg); /* IE 9 */
            -moz-transform: rotate(38deg); /* Firefox */
            -webkit-transform: rotate(38deg); /* Safari 和 Chrome */
            -o-transform: rotate(38deg); /* Opera */
        }
    }
}
</style>