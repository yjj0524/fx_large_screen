<template>
    <div id="mapView"></div>
</template>

<script>
import { loadModules } from "esri-loader";

var arcgisv4;
var vecBasemap;
var webmap;
var scene;

export default {
    name: "ArcGis",
    mounted() {
        this.createView();
    },
    methods: {
        createView() {
            let options = {
                url: "https://js.arcgis.com/4.15/",
                css: "https://js.arcgis.com/4.15/esri/themes/light/main.css",
            };

            loadModules(
                [
                    "esri/Map",
                    "esri/Basemap",
                    "esri/layers/WebTileLayer",
                    "esri/views/MapView",
                    "esri/views/SceneView",
                    "esri/tasks/FindTask",
                    "esri/tasks/support/FindParameters",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "esri/Color",
                    "esri/layers/GraphicsLayer",
                    "esri/tasks/GeometryService",
                ],
                options
            ).then(
                ([
                    Map,
                    Basemap,
                    WebTileLayer,
                    MapView,
                    SceneView,
                    FindTask,
                    FindParameters,
                    SimpleFillSymbol,
                    SimpleLineSymbol,
                    Color,
                    GraphicsLayer,
                    GeometryService,
                ]) => {
                    var tiandituBaseUrl = "http://{subDomain}.tianditu.gov.cn"; //天地图服务地址
                    var token = "b945512238fbd949ef3b486bb8c27997"; //天地图token

                    arcgisv4 = {
                        appConfig: {
                            mapView: null,
                            SceneView: null,
                            GraphicsLayer: null,
                            activeView: null,
                            GraphicsLayer: null,
                            drawsLayer: null,
                            is3D: null,
                            container: "mapView",
                        },
                        tools: {
                            GeometryService: function () {
                                var me = arcgisv4;
                                var geometryService = new GeometryService({
                                    url: me.layer.layerManage.geometryService
                                        .url,
                                });
                                me.appConfig.GeometryService = geometryService;
                            },
                        },
                        layer: {
                            layerManage: {
                                geometryService: {
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer",
                                    title: "几何计算服务",
                                },
                                //NMG1
                                area: {
                                    id: "area",
                                    // url: 'http://101.227.64.245:6080/arcgis/rest/services/HLBXArea/MapServer',
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/NMGZZQ/MapServer",
                                    title: "行政区划图层",
                                    visible: true,
                                    sublayers: [
                                        // { id: 2, visible: true, definitionExpression: "0=0" },
                                        // { id: 1, visible: true, definitionExpression: "0=0" },
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                                KongJianTuXing: {
                                    id: "KongJianTuXing",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_310116/MapServer",
                                    title: "空间图形图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                                ZaiJiDi: {
                                    id: "ZaiJiDi",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/MENPAIKU_TDT/MapServer",
                                    title: "宅基地图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0 ",
                                        },
                                    ],
                                },
                                ChengBaoDi: {
                                    id: "ChengBaoDi",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/MENPAIKU_TDT/MapServer",
                                    title: "承包地图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0 ",
                                        },
                                    ],
                                },
                                NongYongDi: {
                                    id: "NongYongDi",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/NONGYONGDIKU_TDT/MapServer",
                                    title: "农用地图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                                CaiZhai: {
                                    id: "CaiZhai",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_TDT/MapServer",
                                    title: "采摘",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression:
                                                "0=0 and yewubianma like '%采摘%'",
                                        },
                                    ],
                                },
                                DaoLu: {
                                    id: "DaoLu",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_TDT/MapServer",
                                    title: "道路图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression:
                                                "0=0 and YeWuBianMa ='道路'",
                                        },
                                    ],
                                },

                                HeLiu: {
                                    id: "HeLiu",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_TDT/MapServer",
                                    title: "河流图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression:
                                                "0=0 and YeWuBianMa ='河流'",
                                        },
                                    ],
                                },
                                QiaoLiang: {
                                    id: "QiaoLiang",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_TDT/MapServer",
                                    title: "桥梁图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression:
                                                "0=0 and YeWuBianMa ='桥梁'",
                                        },
                                    ],
                                },
                                LuHeQiao: {
                                    id: "LuHeQiao",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_TDT/MapServer",
                                    title: "路河桥",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                            },
                            featureServer: {
                                area: {
                                    id: "area",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/NMGZZQ/MapServer",
                                    title: "行政区划图层",
                                    visible: true,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                                KongJianTuXing: {
                                    id: "FKongJianTuXing",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/KongJianTuXing_310116/FeatureServer/0",
                                    title: "空间图形图层",
                                    visible: false,
                                    sublayers: [0],
                                },
                                ZaiJiDi: {
                                    id: "ZaiJiDi",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/MENPAIKU_TDT/MapServer/0",
                                    title: "宅基地图层",
                                    visible: false,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                                NongYongDi: {
                                    id: "NongYongDi",
                                    url: "http://101.227.64.245:6080/arcgis/rest/services/NONGYONGDIKU_TDT/MapServer/0",
                                    title: "农用地图层",
                                    visible: false,
                                    sublayers: [
                                        {
                                            id: 0,
                                            visible: true,
                                            definitionExpression: "0=0",
                                        },
                                    ],
                                },
                            },
                        },
                        method: {
                            showAreaShape: function () {
                                var me = arcgisv4;
                                var findTask = new FindTask(
                                    "http://101.227.64.245:6080/arcgis/rest/services/NMGZZQ/MapServer"
                                );
                                var findParam = new FindParameters();
                                findParam.returnGeometry = true;
                                findParam.searchFields = ["OBJECTID"];
                                findParam.contains = false;
                                findParam.layerIds = [0];
                                findParam.searchText = "2";
                                findTask.execute(findParam).then(
                                    function (results) {
                                        var r = results.results;
                                        me.appConfig.drawsLayer.removeAll();
                                        me.appConfig.graphicsLayer.removeAll();
                                        for (let i = 0; i < r.length; i++) {
                                            let item = r[i];
                                            if (item) {
                                                var g = item.feature;
                                                g.symbol =
                                                    me.method.getResultSyboml();
                                                me.appConfig.graphicsLayer.add(
                                                    g
                                                );
                                                me.appConfig.activeView.extent =
                                                    g.geometry.extent;
                                                me.method.blink(g);
                                            } else if (
                                                findParam.searchText != "0"
                                            ) {
                                                console.log("未查到结果...");
                                            }
                                        }
                                    },
                                    function (err) {
                                        console.log(err.message);
                                    }
                                );
                            },
                            getResultSyboml: function () {
                                console.log("红框框");
                                var resultSyboml = new SimpleFillSymbol(
                                    SimpleLineSymbol.STYLE_SOLID,
                                    new SimpleLineSymbol(
                                        "solid",
                                        new Color([254, 94, 94, 1]),
                                        2
                                    ),
                                    new Color([254, 94, 94, 0.1])
                                );
                                return resultSyboml;
                            },

                            blink: function (graphic, times) {
                                var me = arcgisv4;
                                var times = times || 0;
                                setTimeout(function () {
                                    if (times < 10) {
                                        times % 2 != 0
                                            ? (graphic.visible = true)
                                            : (graphic.visible = false);
                                        me.method.blink(graphic, times + 1);
                                    } else {
                                        graphic.visible = true;
                                    }
                                }, 500);
                            },
                        },
                    };

                    var init = function () {
                        var tuCeng = "";
                        var layer = arcgisv4.layer.layerManage.NongYongDi;
                        var layerf = arcgisv4.layer.featureServer.NongYongDi;

                        var mapBaseLayer = new WebTileLayer({
                            urlTemplate:
                                "http://{subDomain}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=" +
                                token,
                            subDomains: [
                                "t0",
                                "t1",
                                "t2",
                                "t3",
                                "t4",
                                "t5",
                                "t6",
                                "t7",
                            ],
                            copyright: "天地图影像图",
                        });
                        var anoBaseLayer = new WebTileLayer({
                            urlTemplate:
                                "http://{subDomain}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=" +
                                token,
                            subDomains: [
                                "t0",
                                "t1",
                                "t2",
                                "t3",
                                "t4",
                                "t5",
                                "t6",
                                "t7",
                            ],
                            copyright: "天地图影像注记",
                        });
                        var imgBasemap = new Basemap({
                            baseLayers: [mapBaseLayer, anoBaseLayer],
                            title: "影像图",
                            id: "img_w",
                            thumbnailUrl:
                                "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/0/0/0",
                        });

                        var mapBaseLayer_vec = new WebTileLayer({
                            urlTemplate:
                                "http://{subDomain}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=" +
                                token,
                            subDomains: [
                                "t0",
                                "t1",
                                "t2",
                                "t3",
                                "t4",
                                "t5",
                                "t6",
                                "t7",
                            ],
                            copyright: "天地图矢量图",
                        });
                        var anoBaseLayer_vec = new WebTileLayer({
                            urlTemplate:
                                "http://{subDomain}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=" +
                                token,
                            subDomains: [
                                "t0",
                                "t1",
                                "t2",
                                "t3",
                                "t4",
                                "t5",
                                "t6",
                                "t7",
                            ],
                            copyright: "天地图矢量注记",
                        });
                        vecBasemap = new Basemap({
                            baseLayers: [mapBaseLayer_vec, anoBaseLayer_vec],
                            title: "矢量图",
                            id: "cva_w",
                            thumbnailUrl:
                                "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/410.png",
                        });

                        var initialViewParams = {
                            zoom: 17,
                            center: [121.726462, 30.956985],
                            container: "mapView",
                            highlightOptions: {
                                fillOpacity: 0,
                                color: [255, 0, 0, 0.8],
                                haloOpacity: 0.8,
                            },
                            constraints: {
                                minZoom: 0,
                                maxZoom: 18,
                            },
                        };

                        webmap = new Map({
                            logo: false,
                            basemap: imgBasemap,
                            spatialReference: {
                                wkid: 4326,
                            },
                        });

                        scene = new Map({
                            logo: false,
                            basemap: vecBasemap,
                            ground: {
                                surfaceColor: [226, 240, 255],
                            },
                        });

                        //创建2D视图并设为当前视图
                        arcgisv4.appConfig.mapView = createView(
                            initialViewParams,
                            "2d"
                        );
                        arcgisv4.appConfig.mapView.map = webmap;
                        arcgisv4.appConfig.activeView =
                            arcgisv4.appConfig.mapView;

                        //创建3D视图
                        initialViewParams.container = null;
                        initialViewParams.map = scene;
                        arcgisv4.appConfig.sceneView = createView(
                            initialViewParams,
                            "3d"
                        );

                        arcgisv4.appConfig.graphicsLayer = new GraphicsLayer({
                            id: "citylyr",
                        });
                        arcgisv4.appConfig.activeView.map.add(
                            arcgisv4.appConfig.graphicsLayer
                        );

                        arcgisv4.appConfig.drawsLayer = new GraphicsLayer({
                            id: "drawlyr",
                        });
                        arcgisv4.appConfig.activeView.map.add(
                            arcgisv4.appConfig.drawsLayer
                        );

                        arcgisv4.tools.GeometryService();

                        //切换视图
                        function switchView() {
                            var is3D = arcgisv4.appConfig.is3D;
                            arcgisv4.appConfig.activeView.container = null;
                            if (is3D) {
                                arcgisv4.appConfig.sceneView.viewpoint =
                                    arcgisv4.appConfig.activeView.viewpoint;
                                arcgisv4.appConfig.sceneView.container =
                                    arcgisv4.appConfig.container;
                                arcgisv4.appConfig.activeView =
                                    arcgisv4.appConfig.sceneView;
                                earthRotate();
                                arcgisv4.appConfig.is3D = false;
                            } else {
                                arcgisv4.appConfig.mapView.viewpoint =
                                    arcgisv4.appConfig.activeView.viewpoint;
                                arcgisv4.appConfig.mapView.container =
                                    arcgisv4.appConfig.container;
                                arcgisv4.appConfig.activeView =
                                    arcgisv4.appConfig.mapView;
                                arcgisv4.appConfig.is3D = true;
                            }
                        }

                        function earthRotate() {
                            var earthRotateTimer = window.setInterval(
                                function () {
                                    arcgisv4.appConfig.sceneView.goTo(
                                        shiftCamera(60),
                                        {
                                            speedFactor: 0.1,
                                            easing: "linear",
                                        }
                                    );
                                },
                                3000
                            );
                            function shiftCamera(deg) {
                                var camera =
                                    arcgisv4.appConfig.sceneView.camera.clone();
                                camera.position.longitude += deg;
                                return camera;
                            }
                            setTimeout(function () {
                                clearInterval(earthRotateTimer);
                                arcgisv4.appConfig.sceneView.goTo(
                                    {
                                        position: {
                                            x: 121.46948,
                                            y: 30.92027,
                                            z: 70000,
                                            spatialReference: {
                                                wkid: 4326,
                                            },
                                        },
                                        heading: 0,
                                        tilt: 0,
                                    },
                                    {
                                        speedFactor: 1,
                                    }
                                );
                            }, 4000);
                        }

                        function createView(params, type) {
                            var view;
                            var is2D = type === "2d";
                            if (is2D) {
                                view = new MapView(params);
                            } else {
                                view = new SceneView(params);
                            }

                            /*      view.when(function () {
                              view.on("click", function (evt) {
                                  arcgisv4.method.findByPoint(evt.mapPoint);
                              });
                          });*/
                            view.ui.remove([
                                "compass",
                                "navigation-toggle",
                                "zoom",
                                "attribution",
                            ]);
                            return view;
                        }

                        switchView();

                        // arcgisv4.method.showAreaShape(2, 0);
                    };

                    init();
                }
            );
        },
    },
};
</script>

<style scoped lang="less">
@import "https://js.arcgis.com/4.12/esri/themes/light/main.css";

#mapView {
    height: 100%;
    width: 100%;
}
</style>
