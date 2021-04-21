<template>
  <div role="application" aria-label="Compact color picker" class="wx-compact">
    <ul :class="{'wx-color-disabled': noEdit, 'wx-compact-colors': true}" role="listbox">
      <li
        v-for="c in paletteUpperCase(palette)"
        role="option"
        :aria-label="'color:' + c.hex"
        :aria-selected="c.wxhex === pick"
        class="wx-compact-color-item"
        :key="c.wxhex"
        :class="{'wx-compact-color-item--white': c.hex === '#FFFFFF'}"
        :style="{background: c.hex}"
        @click="handlerClick(c)"
      >
        <div class="wx-compact-dot" v-show="c.wxhex === pick"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import colorMixin from './color'
import editableInput from './common/EditableInput.vue'
import wx from '@/system/constant/wx.js';

export default {
  name: 'wxColor',
  mixins: [ colorMixin ],
  props: {
    palette: {
      type: Array,
      default () {
        return wx.color || []
      }
    },
    noEdit: Boolean
  },
  components: {
    'ed-in': editableInput
  },
  computed: {
    pick () {
      return this.colors.wxhex
    }
  },
  methods: {
    handlerClick (c) {
      if (!this.noEdit) {
        this.colorChange({
          hex: c.hex,
          wxhex: c.wxhex,
          source: 'hex'
        })
      }      
    }
  }
}

</script>

<style>
.wx-compact {
  padding-top: 5px;
  padding-left: 5px;
  /* width: 240px; */
  border-radius: 2px;
  /* box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16); */
  /* background-color: #fff; */
}
.wx-compact-colors {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.wx-color-disabled {
  opacity: 0.5;
}
.wx-color-disabled li {
  cursor: not-allowed;
}
.wx-compact-color-item {
  list-style: none;
  width: 25px;
  height: 25px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.wx-compact-color-item--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.wx-compact-color-item--white .wx-compact-dot {
  background: #000;
}

.wx-compact-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
</style>
