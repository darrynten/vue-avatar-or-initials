<template>
  <div>
    <div class="avatar">
      <img class="avatar-image"
           v-if="image"
           :style="imageStyle"
           :width="width"
           :height="height"
           :src="image">
      <div v-else class="avatar-initials" :style="initialsStyle">
        <span class="initials strong" :style="initialsTextStyle">
          {{ initials }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .avatar {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .avatar-initials {
    display: flex;

    background: white;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
export default {
  props: {
    image: {
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    size: {
      required: false,
      default: 40
    },
    fontSize: {
      required: false,
      default: 20
    },
    round: {
      type: Boolean,
      required: false,
      default: false
    },
    radius: {
      required: false,
      default: 0
    },
    backgroundColour: {
      type: String,
      required: false
    },
    colour: {
      type: String,
      required: false
    },
    palette: {
      type: Array,
      required: false,
      default: () => {
        return [
          '#f44336',
          '#e91e63',
          '#9c27b0',
          '#673ab7',
          '#3f51b5',
          '#2196f3',
          '#03a9f4',
          '#00bcd4',
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#cddc39',
          '#ffeb3b',
          '#ffc107',
          '#ff9800',
          '#ff5722',
          '#795548',
          '#9e9e9e',
          '#607d8b'
        ]
      }
    }
  },
  methods: {
    hash(word) {
      var hash = 0
      if (word.length == 0) {
        return hash
      }
      for (var i = 0; i < word.length; i++) {
        var char = word.charCodeAt(i)
        hash = ((hash<<5)-hash)+char
        hash = hash & hash
      }
      return Math.abs(hash)
    },
    defaultColour() {
      if (this.colour) {
        return this.colour
      }

      const length = this.palette.length
      const seed = this.hash(this.title)
      const selected = seed % length
      return this.palette[selected]
    },
    textColour() {
      if (this.colour) {
        return this.colour
      }

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.defaultColour())
      const red = parseInt(result[1], 16)
      const green = parseInt(result[2], 16)
      const blue = parseInt(result[3], 16)
      const luminosity = ((0.299 * red) + (0.587 * green) + (0.114 * blue))

      if (luminosity > 186) {
        return '#000000'
      }

      return '#FFFFFF'
    },
    bgColour() {
      return this.backgroundColour ? this.backgroundColour : this.defaultColour()
    }
  },
  computed: {
    width() {
      return `${this.size}px`
    },
    height() {
      return `${this.size}px`
    },
    initials() {
      return this.title.charAt(0)
    },
    initialsStyle() {
      return `width: ${this.size}px; height: ${this.size}px; border-radius: ${this.radius }px; background-color: ${this.bgColour()}; text-transform: uppercase; color: ${this.textColour()}; display: flex; justify-content: center; align-items: center;`
    },
    initialsTextStyle() {
      return `font-size: ${this.fontSize}px;`
    },
    imageStyle() {
      if (this.round) {
        if (this.radius > 0) {
          return `border-radius: ${this.radius}px`
        }

        return `border-radius: ${this.size}px`
      }
    }
  }
}
</script>
