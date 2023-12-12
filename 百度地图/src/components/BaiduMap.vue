<template>
    <baidu-map class="bm-view" :zoom="zoom" :center="center" :scroll-wheel-zoom="true">
        <!-- 地图类型的切换 -->
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"></bm-map-type>
        <!-- 移动缩放组件 -->
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
        <!-- 缩略图 -->
        <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
        <!-- 城市搜索 -->
        <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
        <!-- 标点 dragging 是否允许拖拽 -->
        <bm-marker :position="markerPosition" :dragging="true" @click="handleClick"></bm-marker>
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="false" :autoLocation="false" :locationIcon="false"
            @locationSuccess="handelRes"></bm-geolocation>
    </baidu-map>
</template>

<script setup>
import { reactive, ref } from 'vue'


// 设置地图的缩放大小(3-19)
const zoom = ref(12)
// 设置地图的初始经纬度
const center = reactive({
    lng: 116.404,
    lat: 39.915
})

const markerPosition = reactive({
    lng: 116.404,
    lat: 39.915
})

const handleClick = (type) => {
    alert(`这个是您当前的经纬度: ${type.point.lng},${type.point.lat}`)
}

const handelRes = (point) => {
    markerPosition.lat = point.point.lat
    markerPosition.lng = point.point.lng
    console.log(markerPosition.lat, markerPosition.lng);
}
</script>

<style scoped>
.bm-view {
    width: 100%;
    height: 700px;
}
</style>
