<template>
  <img :src="srcLogo" :alt="type">
</template>

<script>
import ydisk from "../../../assets/images/ydisk.jpeg";
import google_drive from "../../../assets/images/google_drive.jpeg";
import ssh from "../../../assets/images/ssh.png";
import onedrive from "../../../assets/images/onedrive.jpg";
import github from "../../../assets/images/github.svg";
import dropbox from "../../../assets/images/dropbox.png";
import gitlab from "../../../assets/images/gitlab.jpeg";
import figma from "../../../assets/images/figma.png";
import copy from "../../../assets/icons/copy.svg";

export default {
  name: "MyImageRepositoryLogo",
  props: {
    type: {
      type:String
    }
  },
  beforeMount() {
    this.receiveLogo()
  },
  data() {
    return {
      srcLogo: '',
      google_drive: google_drive,
      ydisk: ydisk,
      ssh: ssh,
      copy: copy,
      onedrive: onedrive,
      github: github,
      dropbox: dropbox,
      gitlab: gitlab,
      figma: figma
    }
  },
  methods: {
    receiveLogo() {
      switch (this.type) {
        case 'ydisk':
          this.srcLogo = ydisk
          break;
        case 'google_drive':
          this.srcLogo = google_drive
          break;
        case 'ssh':
          this.srcLogo = ssh
          break;
        case 'onedrive':
          this.srcLogo = onedrive
          break;
        case 'github':
          this.srcLogo = github
          break;
        case 'dropbox':
          this.srcLogo = dropbox
          break;
        case 'gitlab':
          this.srcLogo = gitlab
          break;
        case 'figma':
          this.srcLogo = figma
          break;
        default:
          this.srcLogo = ssh
          break;
      }
    },
  }
}
</script>

<style scoped lang="scss">
  img {
    width: auto;
    height: 40px;
    margin-left: 33px;
    margin-right: 22px;
  }
</style>

