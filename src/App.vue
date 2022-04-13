<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
html,
body,
#app {
    width: 3840px;
    height: 1080px;
    padding: 0;
    margin: 0;
    font-size: 14px;
    // 禁止选中文字
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
