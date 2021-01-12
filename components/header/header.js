export default {
  props: {
    isToggleable: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      innerTitle: 'Brand',
      menus: [
        {
          title: 'bundle-pakey',
          label: 'Bundle Paket',
          url: '/bundle-pakey'
        },
        {
          title: 'high-effort',
          label: 'High Effort',
          url: '/high-effort'
        }
      ]
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      if (this.title) {
        this.innerTitle = this.title
      }
    }
  }
}
