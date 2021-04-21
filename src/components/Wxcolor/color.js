import tinycolor from 'tinycolor2'

function _colorChange (datas, oldHue) {
  let data  = datas; 
  var alpha = data && data.a
  var color

  // hsl is better than hex between conversions
  if (data && data.hsl) {
    color = tinycolor(data.hsl)
  } else if (data && data.hex && data.hex.length > 0) {
    color = tinycolor(data.hex)
  } else {
    for (let index = 0; index < wx.color.length; index++) {
      const wxcolor = wx.color[index];
      if (wxcolor.wxhex == data) {
        data  = {
          hex: wxcolor.hex,
          wxhex: data,
          source: 'hex'
        }
        color = tinycolor(wxcolor.hex);
        break;
      }
    }
    if (typeof data === 'string') {
      color = tinycolor('#000000');
    }
  }

  if (color && (color._a === undefined || color._a === null)) {
    color.setAlpha(alpha || 1)
  }

  // var hsl = color.toHsl()
  // var hsv = color.toHsv()

  // if (hsl.s === 0) {
  //   hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0
  // }

  // return {
  //   hsl: hsl,
  //   hex: color.toHexString().toUpperCase(),
  //   hex8: color.toHex8String().toUpperCase(),
  //   rgba: color.toRgb(),
  //   hsv: hsv,
  //   oldHue: data.h || oldHue || hsl.h,
  //   source: data.source,
  //   a: data.a || color.getAlpha()
  // }

  return {
    hex: color.toHexString().toUpperCase(),
    wxhex: data.wxhex || '',
    rgba: color.toRgb(),
    source: data.source
  }
}

import wx from '@/system/constant/wx.js';
export default {
  props: ['value'],
  data () {
    return {
      val: _colorChange(this.value)
    }
  },
  computed: {
    colors: {
      get () {
        return this.val
      },
      set (newVal) {
        this.val = newVal
        this.$emit('input', newVal)
      }
    }
  },
  watch: {
    value (newVal) {
      this.val = _colorChange(newVal)
    }
  },
  create() {
    // console.log('wx',wx)
  },
  methods: {
    colorChange (data, oldHue) {
      this.colors = _colorChange(data, oldHue)
    },
    isValidHex (hex) {
      return tinycolor(hex).isValid()
    },
    simpleCheckForValidColor (data) {
      var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v']
      var checked = 0
      var passed = 0

      for (var i = 0; i < keysToCheck.length; i++) {
        var letter = keysToCheck[i]
        if (data[letter]) {
          checked++
          if (!isNaN(data[letter])) {
            passed++
          }
        }
      }

      if (checked === passed) {
        return data
      }
    },
    paletteUpperCase (palette) {
      return palette.map(c => {
        if (c.hex) {
          c.hex = c.hex.toUpperCase();
        }
        return c;
      })
    },
    isTransparent (color) {
      return tinycolor(color).getAlpha() === 0
    }
  }
}
