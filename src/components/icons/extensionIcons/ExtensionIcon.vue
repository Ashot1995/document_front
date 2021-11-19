<template>
  <svg
      :width="width"
      :height="height"
      :viewBox="viewBox"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-if="isset_icon_with_extension"
  >
    <audio-icon
        v-if="iconType === 'audio'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <doc-icon
        v-else-if="iconType === 'doc'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <img-icon
        v-else-if="iconType === 'img'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <pdf-icon
        v-else-if="iconType === 'pdf'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <txt-icon
        v-else-if="iconType === 'txt'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <video-icon
        v-else-if="iconType === 'video'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <xls-icon
        v-else-if="iconType === 'xls'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
    <zip-icon
        v-else-if="iconType === 'zip'"
        :size="size"
        :fillOpacity="fillOpacity"
    />
  </svg>
  <div v-else class="other-extension">
    <p>{{ iconType }}</p>
  </div>
</template>

<script>
import AudioIcon from "./AudioIcon";
import DocIcon from "./DocIcon";
import ImgIcon from "./ImgIcon";
import PdfIcon from "./PdfIcon";
import TxtIcon from "./TxtIcon";
import VideoIcon from "./VideoIcon";
import XlsIcon from "./XlsIcon";
import ZipIcon from "./ZipIcon";

export default {
  name: "ExtensionIcon",
  components: {ZipIcon, XlsIcon, VideoIcon, TxtIcon, PdfIcon, ImgIcon, DocIcon, AudioIcon},
  props:{
    iconType: {
      type: String,
      required: true
    },
    size: {
      type:String,
      default: 'little'
    },
    fillOpacity: {
      type:Number,
      default: 0.6
    }
  },
  beforeMount() {
    this.getSize()
    this.getExtension()
  },
  data() {
    return {
      width:24,
      height:24,
      viewBox:'0 0 24 24',
      extensions: [
        {type:'zip'},
        {type:'xls'},
        {type:'video'},
        {type:'txt'},
        {type:'pdf'},
        {type:'img'},
        {type:'doc'},
        {type:'audio'}
      ],
      isset_icon_with_extension:false
    }
  },
  methods: {
    getSize() {
      if (this.size === 'big') {
        this.width = 48
        this.height = 48
        this.viewBox = '0 0 48 48'
      }
    },
    getExtension() {
      this.extensions.forEach(elem => {
        if (elem.type === this.iconType) {
          this.isset_icon_with_extension = true
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.other-extension {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    color: var(--control-point);
    cursor:default;
    word-break: break-all;
  }
  &:hover {
    p {
      color: var(--control-point-hover);
    }
  }
}
</style>
