<template>
  <div id="humburger">
    <a id="menu" href="javascript:void(0);" @click="showMobileNav">
      <span v-if="isOpenIcon" id="open-icon">
        <span class="menu-bar bar-1"></span>
        <span class="menu-bar bar-2"></span>
        <span class="menu-bar bar-3"></span>
      </span>
      <span v-if="!isOpenIcon" id="close-icon">
        <span class="menu-bar bar-1"></span>
        <span class="menu-bar bar-2"></span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isOpenIcon: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    showMobileNav() {
      this.$emit('showMobileNav')
    }
  }
}
</script>

<style scoped>
#menu {
  position: relative;
  display: block;
  padding: 10px;
  color: #06c4d1;
  width: 0;
}
#menu::after {
  content: 'MENU';
  position: absolute;
  top: 6px;
  right: -60px;
  font-weight: 700;
}
.menu-bar {
  display: block;
  width: 1em;
  background-color: #06c4d1;
  height: 2px;
}
.bar-2 {
  margin: 3px 0;
}
#close-icon .bar-1 {
  transform: translateY(5px) translateX(2px) rotate(45deg);
}
#close-icon .bar-2 {
  transform: translateX(2px) rotate(-45deg);
}
</style>
