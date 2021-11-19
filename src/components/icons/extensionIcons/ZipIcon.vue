<template>
  <fragment>
    <path v-if="size === 'little'" d="M4.76193 19.762H2.38098V21.1905H4.76193V19.762Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M2.38095 21.1904H0V22.619H2.38095V21.1904Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M4.76193 16.9048H2.38098V18.3334H4.76193V16.9048Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M2.38095 18.3334H0V19.7619H2.38095V18.3334Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M4.76193 14.0476H2.38098V15.4762H4.76193V14.0476Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M2.38095 15.4762H0V16.9048H2.38095V15.4762Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M4.76193 11.1904H2.38098V12.619H4.76193V11.1904Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M2.38095 12.619H0V14.0476H2.38095V12.619Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M4.76193 8.33337H2.38098V9.76195H4.76193V8.33337Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M2.38095 9.76196H0V11.1905H2.38095V9.76196Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M4.52375 0H0.714228C0.452323 0 0.238037 0.214286 0.238037 0.47619V6.42857C0.238037 6.69048 0.452323 6.90476 0.714228 6.90476H4.52375C4.78566 6.90476 4.99994 6.69048 4.99994 6.42857V0.47619C4.99994 0.214286 4.78566 0 4.52375 0ZM3.80947 3.80952H1.42851V1.19048H3.80947V3.80952Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>

    <path v-if="size === 'big'" d="M7.61909 34.0737H3.80957V36.5369H7.61909V34.0737Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M3.80952 36.5367H0V38.9999H3.80952V36.5367Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M7.61909 29.1475H3.80957V31.6106H7.61909V29.1475Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M3.80952 31.6106H0V34.0738H3.80952V31.6106Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M7.61909 24.2211H3.80957V26.6842H7.61909V24.2211Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M3.80952 26.6842H0V29.1474H3.80952V26.6842Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M7.61909 19.2947H3.80957V21.7578H7.61909V19.2947Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M3.80952 21.7578H0V24.221H3.80952V21.7578Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M7.61909 14.3685H3.80957V16.8317H7.61909V14.3685Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M3.80952 16.8317H0V19.2948H3.80952V16.8317Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'big'" d="M7.238 0H1.14276C0.723717 0 0.380859 0.369474 0.380859 0.821053V11.0842C0.380859 11.5358 0.723717 11.9053 1.14276 11.9053H7.238C7.65705 11.9053 7.99991 11.5358 7.99991 11.0842V0.821053C7.99991 0.369474 7.65705 0 7.238 0ZM6.09515 6.56842H2.28562V2.05263H6.09515V6.56842Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
  </fragment>
</template>

<script>
export default {
  name: "ZipIcon",
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
