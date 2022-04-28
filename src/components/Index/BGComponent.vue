<template>
    <div class="bg_component">
        <div class="aperture_container">
            <svg
                id="circle_line_1"
                width="1700"
                height="1700"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="860"
                    cy="860"
                    r="600"
                    stroke="#58638d"
                    stroke-width="2"
                    fill="transparent"
                />
            </svg>
            <svg
                id="circle_line_2"
                width="1700"
                height="1700"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="860"
                    cy="860"
                    r="655"
                    stroke="#58638d"
                    stroke-width="1"
                    fill="transparent"
                />
            </svg>
            <svg
                id="circle_line_3"
                width="1100"
                height="1100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="550"
                    cy="550"
                    r="550"
                    stroke="#1c2c57"
                    stroke-width="2"
                    fill="#172653"
                />
            </svg>
            <svg
                id="circle_line_4"
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
                id="circle_line_5"
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
            <div id="circle_line_6"></div>
            <div id="circle_line_7"></div>
            <div id="circle_line_8"></div>
            <!-- 光环1 -->
            <div class="halo_1"></div>
            <!-- 光环2 -->
            <div class="halo_2"></div>
            <!-- 光圈 -->
            <div class="aperture"></div>
        </div>
        <!-- 24节气背景图 -->
        <div class="pointer_img">
            <img class="img_1" src="@/static/images/light.png" alt="" />
            <img class="img_2" src="@/static/images/mirage.png" alt="" />
        </div>
        <div class="solar_terms">
            <img class="img_bg" src="@/static/images/solar_terms.png" alt="" />
        </div>
        <!-- 24节气图标和标题 -->
        <div class="solar_terms_item" v-show="show_solar_terms_img">
            <img
                v-for="(item, index) in solar_terms_datas"
                :key="index"
                :class="`item item${index + 1}`"
                :src="item.img"
                alt=""
                @click="PointerRotate(index)"
                @mouseover="EnlargeSolarTerms"
                @mouseleave="NarrowSolarTerms"
            />
            <div class="title1" :style="titleStyle">智 慧新 桥</div>
            <div class="title2" @click.stop="JumpToDataView">智 慧新 桥</div>
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
        <!-- 二级标题点击后的背景和描述信息 -->
        <div class="sub_title_bg_img" v-if="show_sub_title_bg_img">
            <div class="bg_img">
                <img src="@/static/images/sub_title_bg.jpg" alt="" />
            </div>
            <div class="description_container">
                <div class="outer_ring">
                    <div class="sub_title_description_img">
                        <div class="description">
                            我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文
                        </div>
                    </div>
                </div>
                <img
                    class="close_img"
                    src="@/static/images/sub_title_description_close.png"
                    alt=""
                    @click="CloseSubTitleBGImg"
                />
            </div>
        </div>
        <!-- 新桥24景 -->
        <div
            class="scenery_container"
            v-show="show_scenery_container"
        >
            <div class="covering_layer" v-if="show_scenery_container">
                <div class="scenery_container_bg_img">
                    <div class="scenery_img_container">
                        <div class="imgs_container">
                            <img
                                v-for="(item, index) of 5"
                                :key="index"
                                src="@/static/images/scenery_img.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        class="title_container same"
                        v-show="show_title_and_btns"
                    >
                        <div class="title_1">新桥二十四景 · 春分</div>
                        <div class="title_2">
                            立春阳气转，雨水雁河边；惊蛰乌鸦叫，春分地皮干。
                        </div>
                    </div>
                    <div
                        class="btn_container same"
                        v-show="show_title_and_btns"
                    >
                        <img
                            class="scroll_pre"
                            src="@/static/images/scroll_pre.png"
                            alt=""
                            @click="ScrollToPre"
                        />
                        <img
                            class="scroll_next"
                            src="@/static/images/scroll_next.png"
                            alt=""
                            @click="ScrollToNext"
                        />
                        <img
                            class="scroll_close"
                            src="@/static/images/scroll_close.png"
                            alt=""
                            @click.stop="CloseScroll"
                        />
                    </div>
                </div>
            </div>
            <div
                class="scroll_container"
                v-if="show_scenery_container"
            >
                <div class="scroll_1">
                    <div class="scroll_1_1"></div>
                    <div class="scroll_1_2">
                        <div class="scroll_img_1"></div>
                    </div>
                </div>
                <div class="scroll_2">
                    <div class="scroll_2_1"></div>
                    <div class="scroll_2_2">
                        <div class="scroll_img_2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="left_title" @click="OpenSceneryContainer">
            <img
                class="left_title_img"
                src="@/static/images/index_title.png"
                alt=""
            />
        </div>
        <div class="right_title" @click="OpenSceneryContainer">
            <img
                class="right_title_img"
                src="@/static/images/index_title.png"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    name: "BGComponent",
    components: {},
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
            // 24节气选中项下标
            solar_terms_index: 0,
            // 节气动画是否完成
            solar_terms_animation_complete: false,
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
            // 子标题的选中项
            sub_title_selete_index: null,
            sub_title_show: false,
            titleStyle: {
                textShadow: "",
            },
            show_sub_title_bg_img: false,
            // 显示卷轴容器
            show_scenery_container: false,
            // 未展开卷轴前允许点击空白处关闭卷轴容器
            allow_close_scenery_container: true,
            // 允许展开卷轴
            allow_open_scroll: true,
            // 显示卷轴中的描述和按钮
            show_title_and_btns: false,
            // 允许切换24景图片
            allow_switch_scenery_img: true,
            // 当前24景显示的图片下标
            current_show_scenery_img_index: 1,
        };
    },
    mounted() {
        this.SetSolarTermsImg();

        this.RunAllAnimation();
    },
    methods: {
        // 运行所有开场动画
        RunAllAnimation() {
            let that = this;

            //#region 执行背景动画
            // halo_1动画
            anime({
                targets: ".halo_1",
                rotate: 360,
                duration: 10000,
                easing: "linear",
                loop: true,
            });

            // halo_2动画
            anime({
                targets: ".halo_2",
                easing: "linear",
                rotate: -360,
                duration: 10000,
                loop: true,
            });

            // aperture动画
            anime({
                targets: ".aperture",
                loop: true,
                rotate: 360,
                duration: 25000,
                easing: "linear",
            });

            // 逐渐扩大的圈
            anime({
                targets: "#circle_line_3",
                loop: true,
                scale: 1.19,
                duration: 3000,
                easing: "linear",
            });

            // 滚动的圆弧6
            anime({
                targets: "#circle_line_6",
                loop: true,
                rotate: -360,
                duration: 6000,
                easing: "linear",
            });

            // 滚动的圆弧7
            anime({
                targets: "#circle_line_7",
                loop: true,
                rotate: 360,
                duration: 10000,
                easing: "linear",
            });

            // 滚动的圆弧8
            anime({
                targets: "#circle_line_8",
                loop: true,
                rotate: 360,
                duration: 6000,
                easing: "linear",
            });

            // 运行24节气动画
            let solar_terms_el = document.querySelectorAll(
                ".solar_terms_item .item"
            );

            for (let i = 0; i < solar_terms_el.length; i++) {
                anime
                    .timeline({
                        targets: solar_terms_el[i],
                        easing: "linear",
                        loop: 1,
                    })
                    .add({
                        rotate: i * 15,
                        duration: 0,
                    })
                    .add({
                        translateX: -120,
                        translateY: -15,
                        opacity: "1",
                        delay: i * 120,
                        duration: 1000,
                        complete: function () {
                            if (i + 1 == solar_terms_el.length) {
                                that.solar_terms_animation_complete = true;
                            }
                        },
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
                    rotateX: 25,
                    translateY: 5,
                    duration: 2000,
                    loop: 1,
                    complete: function () {
                        that.titleStyle.textShadow = "0 7px 0 #091225";
                    },
                });
            anime
                .timeline({
                    targets: document.querySelectorAll(
                        ".solar_terms_item .title2"
                    ),
                    easing: "linear",
                })
                .add({
                    rotateX: 25,
                    duration: 2000,
                    loop: 1,
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
                    opacity: "1",
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

            this.solar_terms_index = target_index;

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

            this.PointerRotate(target_index);
        },
        // 放大24节气图标
        EnlargeSolarTerms(e) {
            if (this.solar_terms_animation_complete) {
                anime({
                    targets: e.target,
                    loop: 1,
                    easing: "linear",
                    scale: 1.2,
                    duration: 200,
                });
            }
        },
        // 缩小24节气图标
        NarrowSolarTerms(e) {
            if (this.solar_terms_animation_complete) {
                anime({
                    targets: e.target,
                    loop: 1,
                    easing: "linear",
                    scale: 1,
                    duration: 200,
                });
            }
        },
        // 指针旋转动画
        PointerRotate(index) {
            let that = this;
            let pointer_img = document.querySelector(".pointer_img");

            let solar_terms_item_title = document.querySelector(
                ".solar_terms_item .title2"
            );

            // console.log(that.solar_terms_index * 15);

            anime({
                targets: solar_terms_item_title,
                easing: "linear",
                backgroundImage: [
                    {
                        value:
                            "linear-gradient(" +
                            (that.solar_terms_index * 15 + 90) +
                            "deg,#68583e,#68583e,#68583e,#d5bb8c,#d5bb8c,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#d5bb8c,#5f4f33,#897552,#d5bb8c,#ebe6de,#ebe6de)",
                    },
                    {
                        value:
                            "linear-gradient(" +
                            (index * 15 + 90) +
                            "deg,#68583e,#68583e,#68583e,#d5bb8c,#d5bb8c,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#ffeecf,#d5bb8c,#5f4f33,#897552,#d5bb8c,#ebe6de,#ebe6de)",
                    },
                ],
                duration: 1400,
                loop: 1,
            });

            anime({
                targets: pointer_img,
                easing: "linear",
                delay: 250,
                rotate: index * 15,
                duration: 1200,
                loop: 1,
            });

            that.solar_terms_index = index;
        },
        // 放大一级标题图标
        EnlargePrimaryTitle(e) {
            anime({
                targets: e.target,
                loop: 1,
                easing: "linear",
                scale: 1.2,
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

            that.$nextTick(() => {
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
                        opacity: 0,
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
                            opacity: 0,
                            loop: 1,
                            easing: "linear",
                            duration: 0,
                        });

                        for (let j = 0; j < scale_el.length; j++) {
                            anime({
                                targets: scale_el[j],
                                delay: 0,
                                opacity: 0,
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
                        opacity: "1",
                        loop: 1,
                        easing: "linear",
                        duration: 500,
                    });

                    for (let j = 0; j < scale_el.length; j++) {
                        anime({
                            targets: scale_el[j],
                            delay: i * 200,
                            opacity: "1",
                            loop: 1,
                            easing: "linear",
                            duration: 500,
                        });
                    }
                }
            });

            that.sub_title_show = true;
        },
        // 打开子标题内容
        OpenSubTitleContent(index) {
            let that = this;

            if (that.sub_title_selete_index != index) {
                let sub_title = document.querySelectorAll(".sub_title .sign");

                // sign元素复位
                if (that.sub_title_selete_index != null) {
                    anime({
                        targets: sub_title[that.sub_title_selete_index],
                        easing: "linear",
                        opacity: 0,
                        duration: 0, // 持续时间
                        loop: 1,
                    });
                }

                that.sub_title_selete_index = index;

                // 显示sign元素
                anime
                    .timeline({
                        targets: sub_title[index],
                        easing: "linear",
                    })
                    .add({
                        opacity: [
                            {
                                value: "1",
                            },
                        ],
                        duration: 600, // 持续时间
                        loop: 1,
                    });

                that.show_sub_title_bg_img = true;

                this.$nextTick(() => {
                    let sub_title_bg_img =
                        document.querySelectorAll(".sub_title_bg_img");
                    let sub_title_description = document.querySelectorAll(
                        ".sub_title_bg_img .description_container"
                    );

                    // 显示二级标题的大背景
                    anime({
                        targets: sub_title_bg_img,
                        opacity: [{ value: "0" }],
                        loop: 1,
                        easing: "linear",
                        duration: 0,
                        complete: function () {
                            // 显示二级标题的描述信息
                            anime({
                                targets: sub_title_description,
                                opacity: [{ value: "0" }],
                                loop: 1,
                                easing: "linear",
                                duration: 0,
                                complete: function () {
                                    anime({
                                        targets: sub_title_bg_img,
                                        opacity: "1",
                                        loop: 1,
                                        easing: "linear",
                                        duration: 1000,
                                        complete: function () {
                                            // 显示二级标题的描述信息
                                            anime({
                                                targets: sub_title_description,
                                                opacity: "1",
                                                loop: 1,
                                                easing: "linear",
                                                duration: 1000,
                                            });
                                        },
                                    });
                                },
                            });
                        },
                    });
                });
            }
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
                    opacity: "0",
                    loop: 1,
                    easing: "linear",
                    duration: 500,
                });

                for (let j = 0; j < scale_el.length; j++) {
                    anime({
                        targets: scale_el[j],
                        delay: j * 10,
                        opacity: "0",
                        loop: 1,
                        easing: "linear",
                        duration: 500,
                    });
                }
            }

            that.CloseSubTitleBGImg();
        },
        // 关闭子标题大背景和描述
        CloseSubTitleBGImg() {
            let that = this;
            let sub_title_bg_img =
                document.querySelectorAll(".sub_title_bg_img");
            let sub_title_description = document.querySelectorAll(
                ".sub_title_bg_img .description_container"
            );
            let sub_title_sign = document.querySelectorAll(".sub_title .sign");

            if (that.sub_title_selete_index != null) {
                anime({
                    targets: sub_title_sign[that.sub_title_selete_index],
                    easing: "linear",
                    opacity: [{ value: "0" }],
                    duration: 500,
                    loop: 1,
                    complete: function () {
                        that.sub_title_selete_index = null;
                    },
                });
            }

            anime({
                targets: sub_title_bg_img,
                opacity: [{ value: "0" }],
                loop: 1,
                easing: "linear",
                duration: 500,
                complete: function () {
                    // 隐藏二级标题的描述信息
                    anime({
                        targets: sub_title_description,
                        opacity: [{ value: "0" }],
                        loop: 1,
                        easing: "linear",
                        duration: 500,
                        complete: function () {
                            that.show_sub_title_bg_img = false;
                        },
                    });
                },
            });
        },
        // 打开24景容器
        OpenSceneryContainer() {
            let that = this;
            if (that.allow_close_scenery_container) {
                that.show_scenery_container = true;
                let scenery_container =
                    document.querySelector(".scenery_container");

                anime({
                    targets: scenery_container,
                    opacity: "1",
                    loop: 1,
                    easing: "linear",
                    duration: 1500,
                    complete: function() {
                        that.OpenScroll();
                    }
                });
            }
        },
        // 关闭24景（未展开时）
        // CloseSceneryContainer() {
        //     let that = this;

        //     if (that.allow_close_scenery_container) {
        //         let scenery_container =
        //             document.querySelector(".scenery_container");

        //         anime({
        //             targets: scenery_container,
        //             opacity: "0",
        //             loop: 1,
        //             easing: "linear",
        //             duration: 1500,
        //             complete: function () {
        //                 that.show_scenery_container = false;
        //             },
        //         });
        //     }
        // },
        // 展开24景卷轴
        OpenScroll() {
            let that = this;

            if (that.allow_open_scroll) {
                // 防止重复展开
                that.allow_open_scroll = false;
                that.allow_close_scenery_container = false;

                // 背景移动
                anime({
                    targets: ".scenery_container .covering_layer",
                    translateX: -1500,
                    width: 3000,
                    loop: 1,
                    easing: "linear",
                    duration: 2500,
                    // 背景移动完成后展示描述信息和按钮
                    complete: function () {
                        that.show_title_and_btns = true;

                        anime({
                            targets: [".scenery_container .title_container", ".scenery_container .btn_container"],
                            opacity: "1",
                            loop: 1,
                            easing: "linear",
                            duration: 1000,
                        });
                    },
                });

                // 左卷轴向左移动
                anime({
                    targets: ".scroll_1",
                    translateX: -1494,
                    loop: 1,
                    easing: "linear",
                    duration: 2500,
                });

                // 左卷轴里的图片向左移动
                anime({
                    targets: ".scroll_1 .scroll_img_1",
                    translateX: -1100,
                    loop: 1,
                    easing: "linear",
                    duration: 2500,
                });

                // 右卷轴向右移动
                anime({
                    targets: ".scroll_2",
                    translateX: 1494,
                    loop: 1,
                    easing: "linear",
                    duration: 2500,
                });

                // 右卷轴里的图片向右移动
                anime({
                    targets: ".scroll_2 .scroll_img_2",
                    loop: 1,
                    easing: "linear",
                    translateX: 1200,
                    duration: 2500,
                });
            }
        },
        // 上一页
        ScrollToPre() {
            let that = this;

            if (
                that.current_show_scenery_img_index > 1 &&
                that.allow_switch_scenery_img
            ) {
                that.allow_switch_scenery_img = false;

                anime({
                    targets: ".imgs_container",
                    translateX:
                        (that.current_show_scenery_img_index - 2) * -2941,
                    loop: 1,
                    easing: "linear",
                    duration: 1000,
                    complete: function () {
                        that.allow_switch_scenery_img = true;
                    },
                });

                that.current_show_scenery_img_index--;
            }
        },
        // 下一页
        ScrollToNext() {
            let that = this;

            if (
                that.current_show_scenery_img_index < 5 &&
                that.allow_switch_scenery_img
            ) {
                that.allow_switch_scenery_img = false;

                anime({
                    targets: ".imgs_container",
                    translateX: that.current_show_scenery_img_index * -2941,
                    loop: 1,
                    easing: "linear",
                    duration: 1000,
                    complete: function () {
                        that.allow_switch_scenery_img = true;
                    },
                });

                that.current_show_scenery_img_index++;
            }
        },
        // 关闭24景（展开时）
        CloseScroll() {
            let that = this;

            // 隐藏标题和按钮
            anime({
                targets: [".scenery_container .title_container", ".scenery_container .btn_container"],
                opacity: "0",
                loop: 1,
                easing: "linear",
                duration: 500,
                complete: function () {
                    that.show_title_and_btns = false;

                    // 背景移动
                    anime({
                        targets: ".scenery_container .covering_layer",
                        translateX: 0,
                        width: 0,
                        loop: 1,
                        easing: "linear",
                        duration: 2600,
                    });

                    // 左卷轴向左移动
                    anime({
                        targets: ".scroll_1",
                        translateX: 0,
                        loop: 1,
                        easing: "linear",
                        duration: 2500,
                    });

                    // 左卷轴里的图片向左移动
                    anime({
                        targets: ".scroll_1 .scroll_img_1",
                        translateX: 0,
                        loop: 1,
                        easing: "linear",
                        duration: 2500,
                    });

                    // 右卷轴向右移动
                    anime({
                        targets: ".scroll_2",
                        translateX: 0,
                        loop: 1,
                        easing: "linear",
                        duration: 2500,
                    });

                    // 右卷轴里的图片向右移动
                    anime
                        .timeline({
                            targets: ".scroll_2 .scroll_img_2",
                            loop: 1,
                            easing: "linear",
                        })
                        .add({
                            translateX: 0,
                            duration: 2500,
                            complete: function () {
                                anime({
                                    targets: ".scenery_container",
                                    opacity: "0",
                                    loop: 1,
                                    easing: "linear",
                                    duration: 1500,
                                    complete: function () {
                                        anime({
                                            targets: ".imgs_container",
                                            translateX: 0,
                                            loop: 1,
                                            easing: "linear",
                                            duration: 0,
                                        });

                                        that.current_show_scenery_img_index = 1;
                                        that.allow_close_scenery_container = true;
                                        that.allow_open_scroll = true;
                                        that.show_scenery_container = false;
                                    },
                                });
                            },
                        });
                },
            });
        },
        // 跳转到数据展示页
        JumpToDataView() {
            // 清除动画
            anime.remove([
                ".halo_1",
                ".halo_2",
                ".aperture",
                "#circle_line_3",
                "#circle_line_6",
                "#circle_line_7",
                "#circle_line_8",
            ]);

            this.$router.push({ path: "/dataView" });
        },
    },
};
</script>

<style lang="less" scoped>
.bg_component {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    .left_title {
        width: 5rem;
        height: 10rem;
        position: absolute;
        top: 469px;
        left: 54px;
        border-radius: 0 10rem 10rem 0;
        background: rgba(40, 56, 88, 0.8);
        .left_title_img {
            width: 1rem;
            height: 9rem;
            position: absolute;
            top: 0.6rem;
            left: 0.6rem;
        }
    }
    .right_title {
        width: 5rem;
        height: 10rem;
        position: absolute;
        top: 469px;
        left: 3716px;
        border-radius: 10rem 0 0 10rem;
        background: rgba(40, 56, 88, 0.8);
        .right_title_img {
            width: 1rem;
            height: 9rem;
            position: absolute;
            top: 0.6rem;
            right: 0.6rem;
        }
    }
    .aperture_container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        .halo_1 {
            width: 2956px;
            height: 2956px;
            position: absolute;
            top: -87%;
            left: 20px;
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
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-image: url("@/static/images/aperture.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        #circle_line_1 {
            position: absolute;
            top: -320px;
            left: 1059px;
        }
        #circle_line_2 {
            position: absolute;
            top: -320px;
            left: 1059px;
            opacity: 0.2;
        }
        #circle_line_3 {
            position: absolute;
            top: -10px;
            left: 1369px;
            opacity: 0.5;
        }
        #circle_line_4 {
            position: absolute;
            top: -320px;
            left: 1059px;
        }
        #circle_line_5 {
            position: absolute;
            top: -460px;
            left: 923px;
        }
        #circle_line_6 {
            width: 1012px;
            height: 1012px;
            border: 20px solid transparent;
            border-right: 20px solid #273f74;
            border-radius: 50%;
            position: absolute;
            top: 16px;
            left: -7px;
            right: 0;
            margin: 0 auto;
        }
        #circle_line_7 {
            width: 1150px;
            height: 1150px;
            border: 20px solid transparent;
            border-left: 20px solid #273f74;
            border-radius: 50%;
            position: absolute;
            top: -56px;
            left: -1px;
            right: 0;
            margin: 0 auto;
        }
        #circle_line_8 {
            width: 1250px;
            height: 1250px;
            border: 20px solid transparent;
            border-top: 20px solid #273f74;
            border-radius: 50%;
            position: absolute;
            top: -105px;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
    .pointer_img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 519px;
        left: -10px;
        right: 0;
        margin: 0 auto;
        .img_1 {
            width: 128px;
            height: 490px;
            position: absolute;
            top: -472px;
            left: -44px;
            right: 0;
            margin: 0 auto;
            transform: rotate(-0.2deg);
            -ms-transform: rotate(-0.2deg); /* IE 9 */
            -moz-transform: rotate(-0.2deg); /* Firefox */
            -webkit-transform: rotate(-0.2deg); /* Safari 和 Chrome */
            -o-transform: rotate(-0.2deg); /* Opera */
        }
        .img_2 {
            width: 228.5px;
            height: 483px;
            position: absolute;
            top: -485px;
            left: -96px;
            right: 0;
            margin: 0 auto;
        }
    }
    .solar_terms {
        width: 1196px;
        height: 1080px;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        margin: auto;
        .img_bg {
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
            // top: 12px;
            // left: 452px;
            top: 27px;
            left: 571px;
            opacity: 0;
        }
        .item2 {
            // top: 27px;
            // left: 571px;
            top: 73px;
            left: 682px;
            opacity: 0;
            transform: rotate(15deg);
            -ms-transform: rotate(15deg); /* IE 9 */
            -moz-transform: rotate(15deg); /* Firefox */
            -webkit-transform: rotate(15deg); /* Safari 和 Chrome */
            -o-transform: rotate(15deg); /* Opera */
        }
        .item3 {
            // top: 72px;
            // left: 678px;
            top: 145px;
            left: 773px;
            opacity: 0;
            transform: rotate(30deg);
            -ms-transform: rotate(30deg); /* IE 9 */
            -moz-transform: rotate(30deg); /* Firefox */
            -webkit-transform: rotate(30deg); /* Safari 和 Chrome */
            -o-transform: rotate(30deg); /* Opera */
        }
        .item4 {
            // top: 143px;
            // left: 769px;
            top: 240px;
            left: 845px;
            opacity: 0;
            transform: rotate(45deg);
            -ms-transform: rotate(45deg); /* IE 9 */
            -moz-transform: rotate(45deg); /* Firefox */
            -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
            -o-transform: rotate(45deg); /* Opera */
        }
        .item5 {
            // top: 237px;
            // left: 848px;
            top: 346px;
            left: 886px;
            opacity: 0;
            transform: rotate(60deg);
            -ms-transform: rotate(60deg); /* IE 9 */
            -moz-transform: rotate(60deg); /* Firefox */
            -webkit-transform: rotate(60deg); /* Safari 和 Chrome */
            -o-transform: rotate(60deg); /* Opera */
        }
        .item6 {
            // top: 346px;
            // left: 894px;
            top: 463px;
            left: 902px;
            opacity: 0;
            transform: rotate(75deg);
            -ms-transform: rotate(75deg); /* IE 9 */
            -moz-transform: rotate(75deg); /* Firefox */
            -webkit-transform: rotate(75deg); /* Safari 和 Chrome */
            -o-transform: rotate(75deg); /* Opera */
        }
        .item7 {
            // top: 456px;
            // left: 907px;
            top: 575px;
            left: 885px;
            opacity: 0;
            transform: rotate(90deg);
            -ms-transform: rotate(90deg); /* IE 9 */
            -moz-transform: rotate(90deg); /* Firefox */
            -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
            -o-transform: rotate(90deg); /* Opera */
        }
        .item8 {
            // top: 577px;
            // left: 892px;
            top: 688px;
            left: 838px;
            opacity: 0;
            transform: rotate(105deg);
            -ms-transform: rotate(105deg); /* IE 9 */
            -moz-transform: rotate(105deg); /* Firefox */
            -webkit-transform: rotate(105deg); /* Safari 和 Chrome */
            -o-transform: rotate(105deg); /* Opera */
        }
        .item9 {
            // top: 683px;
            // left: 847px;
            top: 777px;
            left: 765px;
            opacity: 0;
            transform: rotate(120deg);
            -ms-transform: rotate(120deg); /* IE 9 */
            -moz-transform: rotate(120deg); /* Firefox */
            -webkit-transform: rotate(120deg); /* Safari 和 Chrome */
            -o-transform: rotate(120deg); /* Opera */
        }
        .item10 {
            // top: 776px;
            // left: 774px;
            top: 850px;
            left: 672px;
            opacity: 0;
            transform: rotate(135deg);
            -ms-transform: rotate(135deg); /* IE 9 */
            -moz-transform: rotate(135deg); /* Firefox */
            -webkit-transform: rotate(135deg); /* Safari 和 Chrome */
            -o-transform: rotate(135deg); /* Opera */
        }
        .item11 {
            // top: 846px;
            // left: 681px;
            top: 892px;
            left: 565px;
            opacity: 0;
            transform: rotate(150deg);
            -ms-transform: rotate(150deg); /* IE 9 */
            -moz-transform: rotate(150deg); /* Firefox */
            -webkit-transform: rotate(150deg); /* Safari 和 Chrome */
            -o-transform: rotate(150deg); /* Opera */
        }
        .item12 {
            // top: 890px;
            // left: 570px;
            top: 906px;
            left: 448px;
            opacity: 0;
            transform: rotate(165deg);
            -ms-transform: rotate(165deg); /* IE 9 */
            -moz-transform: rotate(165deg); /* Firefox */
            -webkit-transform: rotate(165deg); /* Safari 和 Chrome */
            -o-transform: rotate(165deg); /* Opera */
        }
        .item13 {
            // top: 904px;
            // left: 456px;
            top: 890px;
            left: 336px;
            opacity: 0;
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* IE 9 */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
        }
        .item14 {
            // top: 890px;
            // left: 336px;
            top: 843px;
            left: 223px;
            opacity: 0;
            transform: rotate(195deg);
            -ms-transform: rotate(195deg); /* IE 9 */
            -moz-transform: rotate(195deg); /* Firefox */
            -webkit-transform: rotate(195deg); /* Safari 和 Chrome */
            -o-transform: rotate(195deg); /* Opera */
        }
        .item15 {
            // top: 844px;
            // left: 227px;
            top: 772px;
            left: 134px;
            opacity: 0;
            transform: rotate(210deg);
            -ms-transform: rotate(210deg); /* IE 9 */
            -moz-transform: rotate(210deg); /* Firefox */
            -webkit-transform: rotate(210deg); /* Safari 和 Chrome */
            -o-transform: rotate(210deg); /* Opera */
        }
        .item16 {
            // top: 774px;
            // left: 132px;
            top: 676px;
            left: 63px;
            opacity: 0;
            transform: rotate(225deg);
            -ms-transform: rotate(225deg); /* IE 9 */
            -moz-transform: rotate(225deg); /* Firefox */
            -webkit-transform: rotate(225deg); /* Safari 和 Chrome */
            -o-transform: rotate(225deg); /* Opera */
        }
        .item17 {
            // top: 683px;
            // left: 60px;
            top: 570px;
            left: 21px;
            opacity: 0;
            transform: rotate(240deg);
            -ms-transform: rotate(240deg); /* IE 9 */
            -moz-transform: rotate(240deg); /* Firefox */
            -webkit-transform: rotate(240deg); /* Safari 和 Chrome */
            -o-transform: rotate(240deg); /* Opera */
        }
        .item18 {
            // top: 575px;
            // left: 14px;
            top: 454px;
            left: 6px;
            opacity: 0;
            transform: rotate(255deg);
            -ms-transform: rotate(255deg); /* IE 9 */
            -moz-transform: rotate(255deg); /* Firefox */
            -webkit-transform: rotate(255deg); /* Safari 和 Chrome */
            -o-transform: rotate(255deg); /* Opera */
        }
        .item19 {
            // top: 458px;
            // left: -1px;
            top: 336px;
            left: 22px;
            opacity: 0;
            transform: rotate(270deg);
            -ms-transform: rotate(270deg); /* IE 9 */
            -moz-transform: rotate(270deg); /* Firefox */
            -webkit-transform: rotate(270deg); /* Safari 和 Chrome */
            -o-transform: rotate(270deg); /* Opera */
        }
        .item20 {
            // top: 344px;
            // left: 13px;
            top: 230px;
            left: 69px;
            opacity: 0;
            transform: rotate(285deg);
            -ms-transform: rotate(285deg); /* IE 9 */
            -moz-transform: rotate(285deg); /* Firefox */
            -webkit-transform: rotate(285deg); /* Safari 和 Chrome */
            -o-transform: rotate(285deg); /* Opera */
        }
        .item21 {
            // top: 237px;
            // left: 61px;
            top: 139px;
            left: 140px;
            opacity: 0;
            transform: rotate(300deg);
            -ms-transform: rotate(300deg); /* IE 9 */
            -moz-transform: rotate(300deg); /* Firefox */
            -webkit-transform: rotate(300deg); /* Safari 和 Chrome */
            -o-transform: rotate(300deg); /* Opera */
        }
        .item22 {
            // top: 146px;
            // left: 134px;
            top: 68px;
            left: 234px;
            opacity: 0;
            transform: rotate(315deg);
            -ms-transform: rotate(315deg); /* IE 9 */
            -moz-transform: rotate(315deg); /* Firefox */
            -webkit-transform: rotate(315deg); /* Safari 和 Chrome */
            -o-transform: rotate(315deg); /* Opera */
        }
        .item23 {
            // top: 75px;
            // left: 228px;
            top: 24px;
            left: 341px;
            opacity: 0;
            transform: rotate(330deg);
            -ms-transform: rotate(330deg); /* IE 9 */
            -moz-transform: rotate(330deg); /* Firefox */
            -webkit-transform: rotate(330deg); /* Safari 和 Chrome */
            -o-transform: rotate(330deg); /* Opera */
        }
        .item24 {
            // top: 32px;
            // left: 336px;
            top: 9px;
            left: 457px;
            opacity: 0;
            transform: rotate(345deg);
            -ms-transform: rotate(345deg); /* IE 9 */
            -moz-transform: rotate(345deg); /* Firefox */
            -webkit-transform: rotate(345deg); /* Safari 和 Chrome */
            -o-transform: rotate(345deg); /* Opera */
        }
        .title1 {
            width: 210px;
            font-size: 6.5rem;
            position: absolute;
            top: 372px;
            left: 393px;
            color: #b8a990;
            font-weight: bold;
        }
        .title2 {
            width: 210px;
            font-size: 6.5rem;
            position: absolute;
            top: 372px;
            left: 393px;
            font-weight: bold;
            background: linear-gradient(
                -45deg,
                #ebe6de,
                #ebe6de,
                #d5bb8c,
                #897552,
                #5f4f33,
                #d5bb8c,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #ffeecf,
                #d5bb8c,
                #d5bb8c,
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
        left: 1215px;
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
            left: -596px;
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
            left: -619px;
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
            left: -597px;
        }
        .item5 {
            // top: 19px;
            // left: 160px;
            // transform: rotate(-114deg);
            // -ms-transform: rotate(-114deg); /* IE 9 */
            // -moz-transform: rotate(-114deg); /* Firefox */
            // -webkit-transform: rotate(-114deg); /* Safari 和 Chrome */
            // -o-transform: rotate(-114deg); /* Opera */

            top: 408px;
            left: -528px;
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
        left: 2603px;
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
                width: 60px;
                height: 60px;
                top: -17px;
                left: -39px;
                position: absolute;
                border-radius: 60px;
                background-color: rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                .sign_2 {
                    width: 45px;
                    height: 45px;
                    background-color: rgba(255, 255, 255, 0.3);
                    border-radius: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    .sign_3 {
                        width: 30px;
                        height: 30px;
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
    .sub_title_bg_img {
        width: 1050px;
        height: 1050px;
        position: absolute;
        top: 15px;
        left: 1px;
        right: 0;
        margin: auto;
        opacity: 0;
        .bg_img {
            width: 1050px;
            height: 1050px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 50%;
        }
        .description_container {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 692px;
            left: -38px;
            opacity: 0;
            .outer_ring {
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background-image: url("@/static/images/outer_ring.png");
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .sub_title_description_img {
                    width: 360px;
                    height: 360px;
                    background-image: url("@/static/images/sub_title_description.png");
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .description {
                        width: 224px;
                        height: 210px;
                        text-align: left;
                        color: white;
                        overflow-y: scroll;
                        text-indent: 34px;
                        letter-spacing: 3px;
                    }
                    .description::-webkit-scrollbar {
                        width: 0 !important;
                    }
                }
            }
            .close_img {
                width: 57px;
                height: 57px;
                position: absolute;
                top: 301px;
                left: 297px;
            }
        }
    }
    .scenery_container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        overflow: hidden;
        .covering_layer {
            width: 4px;
            height: 913px;
            position: absolute;
            top: 84px;
            left: 1915px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            .scenery_container_bg_img {
                width: 3000px;
                height: 100%;
                background-image: url("@/static/images/scroll_4.png");
                background-size: 100% 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                .scenery_img_container {
                    width: 2941px;
                    height: 794px;
                    overflow: hidden;
                    .imgs_container {
                        display: flex;
                    }
                }
            }
            .title_container {
                position: absolute;
                top: 641px;
                left: 110px;
                color: white;
                .title_1 {
                    font-size: 5rem;
                    text-align: left;
                    margin-bottom: 15px;
                    letter-spacing: 5px;
                }
                .title_2 {
                    font-size: 2.5rem;
                    letter-spacing: 5px;
                }
            }
            .btn_container {
                width: 129px;
                height: 30px;
                position: absolute;
                top: 804px;
                left: 2828px;
                display: flex;
                justify-content: space-around;
            }
            .same {
                opacity: 0;
            }
        }

        .scroll_1 {
            width: 150px;
            height: 1025px;
            position: absolute;
            top: 27px;
            left: 1768px;
            .scroll_1_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
            }
            .scroll_1_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_1 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -217px;
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
        .scroll_2 {
            width: 148px;
            height: 1025px;
            position: absolute;
            top: 27px;
            left: 1918px;
            .scroll_2_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
                overflow: hidden;
            }
            .scroll_2_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_2 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -1286px;
                    transform: rotateY(180deg);
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
    }
}
</style>