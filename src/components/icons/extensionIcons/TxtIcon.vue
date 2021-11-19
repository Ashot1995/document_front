<template>
  <fragment>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C3 2.22386 3.22991 2 3.51351 2H20.4865C20.7701 2 21 2.22386 21 2.5C21 2.77614 20.7701 3 20.4865 3H3.51351C3.22991 3 3 2.77614 3 2.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 6.22386 3.22991 6 3.51351 6H20.4865C20.7701 6 21 6.22386 21 6.5C21 6.77614 20.7701 7 20.4865 7H3.51351C3.22991 7 3 6.77614 3 6.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.5C3 14.2239 3.22991 14 3.51351 14H20.4865C20.7701 14 21 14.2239 21 14.5C21 14.7761 20.7701 15 20.4865 15H3.51351C3.22991 15 3 14.7761 3 14.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 18.5C3 18.2239 3.22991 18 3.51351 18H20.4865C20.7701 18 21 18.2239 21 18.5C21 18.7761 20.7701 19 20.4865 19H3.51351C3.22991 19 3 18.7761 3 18.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 10.5C3 10.2239 3.22991 10 3.51351 10H20.4865C20.7701 10 21 10.2239 21 10.5C21 10.7761 20.7701 11 20.4865 11H3.51351C3.22991 11 3 10.7761 3 10.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" fill-rule="evenodd" clip-rule="evenodd" d="M3 22.5C3 22.2239 3.22991 22 3.51351 22H10.4865C10.7701 22 11 22.2239 11 22.5C11 22.7761 10.7701 23 10.4865 23H3.51351C3.22991 23 3 22.7761 3 22.5Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>

    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 4C6 3.44772 6.47259 3 7.05556 3H41.9444C42.5274 3 43 3.44772 43 4C43 4.55228 42.5274 5 41.9444 5H7.05556C6.47259 5 6 4.55228 6 4Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.4477 6.47259 11 7.05556 11H41.9444C42.5274 11 43 11.4477 43 12C43 12.5523 42.5274 13 41.9444 13H7.05556C6.47259 13 6 12.5523 6 12Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 28C6 27.4477 6.47259 27 7.05556 27H41.9444C42.5274 27 43 27.4477 43 28C43 28.5523 42.5274 29 41.9444 29H7.05556C6.47259 29 6 28.5523 6 28Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 36C6 35.4477 6.47259 35 7.05556 35H41.9444C42.5274 35 43 35.4477 43 36C43 36.5523 42.5274 37 41.9444 37H7.05556C6.47259 37 6 36.5523 6 36Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 20C6 19.4477 6.47259 19 7.05556 19H41.9444C42.5274 19 43 19.4477 43 20C43 20.5523 42.5274 21 41.9444 21H7.05556C6.47259 21 6 20.5523 6 20Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" fill-rule="evenodd" clip-rule="evenodd" d="M6 44C6 43.4477 6.47259 43 7.05556 43H21.3889C21.9719 43 22.4444 43.4477 22.4444 44C22.4444 44.5523 21.9719 45 21.3889 45H7.05556C6.47259 45 6 44.5523 6 44Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
  </fragment>
</template>

<script>
export default {
  name: "TxtIcon",
  props: {
    size:{
      type:String,
      default:'little'
    },
    fillOpacity: {
      type:Number
    }
  }
}
</script>
