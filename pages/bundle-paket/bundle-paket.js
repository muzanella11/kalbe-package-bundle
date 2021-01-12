export default {
  data () {
    return {
      entries: {
        package: [
          {
            id: 1,
            packageName: 'Paket 1',
            data: [
              {
                value: 'pkg-0101',
                image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/29/770888/770888_3e58d24e-ae65-4143-906d-aa45fbc1fbb5_700_700.jpg',
                label: '2 Chilgo Coklat free 1 Zee Bar'
              },
              {
                value: 'pkg-0102',
                image: 'https://cf.shopee.co.id/file/2468422df8c1ab9420bc2fa493967401',
                label: '2 Fitbar Nut free 1 Entrasol UHT Vanila'
              }
            ]
          },
          {
            id: 2,
            packageName: 'Paket 2',
            data: [
              {
                value: 'pkg-0201',
                image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2417671/morinaga_morinaga-chilkid-madu-susu-formula--800-g-_full04.jpg',
                label: 'Chilkid 1600gr free 1 tas backpack'
              },
              {
                value: 'pkg-0202',
                image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2417671/morinaga_morinaga-chilkid-madu-susu-formula--800-g-_full04.jpg',
                label: 'Chilkid 800gr free 1 set launch box'
              },
              {
                value: 'pkg-0203',
                image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-3491064/morinaga_susu-bubuk-chill-mill-400gr-klg-lactoferin-dha_full02.jpg',
                label: 'Chilmill 2x300gr free 1 Chilgo Banana'
              }
            ]
          },
          {
            id: 3,
            packageName: 'Paket 3',
            data: [
              {
                value: 'pkg-0301',
                image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/29/961887/961887_144ace1c-5190-4bd7-b919-91ac9bc4eee9_800_800.jpg',
                label: '2 Prenagen Mommy free 1 Prenagen UHT'
              }
            ]
          }
        ]
      },
      entry: {
        package: {
          1: '',
          2: '',
          3: ''
        }
      }
    }
  },

  computed: {
    packageBundle () {
      const packageList = Object.values(this.entry.package)
      const result = []

      this.entries.package.forEach((itemEntries) => {
        const findPackage = itemEntries.data.find(itemFind => packageList.includes(itemFind.value))

        if (findPackage) {
          result.push(findPackage)
        }
      })

      return result
    }
  },

  mounted () {
    //
  },

  methods: {
    //
  }
}
