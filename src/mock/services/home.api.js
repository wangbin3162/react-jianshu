import Mock from 'mockjs'
import { builder } from '../util'

const getHomeInfo = (options) => {
  const mockData = {
    articleList: [
      {
        id: 1,
        title: '推荐几个好用的手机软件',
        imgUrl: '/images/ds.webp',
        nickname: '大俗少年',
        read: 31,
        like: 19,
        desc: '手机软件那么多，到底有哪些是比较好，比较方便的呢？经过我多次尝试和使用，给大家推荐几个好用的app软件。 1.时光日历   这款app是适...'
      },
      {
        id: 2,
        title: '我们不再需要 Chrome？',
        imgUrl: '/images/lx.webp',
        nickname: '疯狂的鹅',
        read: 65,
        like: 56,
        desc: '上位 十年前，浏览器的主要市场还在被微软的 IE 牢牢占据着。IE 作为 Windows 的默认浏览器，基本上控制了绝大部分人访问互联网的方式。...'
      },
      {
        id: 3,
        title: '☁两年大学，这几件事正改变着我的青春。🍃',
        imgUrl: '/images/sh.webp',
        nickname: '就这样吧~',
        read: 12,
        like: 22,
        desc: '说句题外话，我们应该找对一个准确的方向去面对我们的生活。 一、班委竞选失败 在我刚上大学的时候，还对一切未知充满好奇。 从小养成的自傲的脾气，我...'
      },
      {
        id: 4,
        title: '人生中有三大“天规”，一旦违背，后半生会越过越艰难！',
        imgUrl: '/images/sy.webp',
        nickname: '王树鹏',
        read: 45,
        like: 24,
        desc: '一、薄福之人过享其福，必有忽然之祸。贯贫之人不安其贫，必有意外之忧。 一个福德薄弱的人如果太过享受福报，就必然会有灾祸降临；一个一贯贫困的人突然...'
      }
    ],
    topicList: [
      { id: 1, title: '读书', imgUrl: '/images/ds.webp' },
      { id: 2, title: '绘画', imgUrl: '/images/hh.webp' },
      { id: 3, title: '社会热点', imgUrl: '/images/shrd.webp' },
      { id: 4, title: '历史', imgUrl: '/images/dy.webp' },
      { id: 5, title: '影音视听', imgUrl: '/images/ls.webp' },
      { id: 6, title: '文艺', imgUrl: '/images/lx.webp' },
      { id: 7, title: '励志故事', imgUrl: '/images/sh.webp' },
      { id: 8, title: '影视', imgUrl: '/images/sy.webp' }
    ],
    recommendList: [
      { id: 1, imgUrl: '/images/jshy.png' },
      { id: 2, imgUrl: '/images/yxlz.png' },
      { id: 3, imgUrl: '/images/jsbq.png' },
      { id: 4, imgUrl: '/images/jsdxt.png' }
    ],
    writerList: [
      {
        id: 1,
        name: '董克平日记',
        imgUrl: '/images/ds.webp',
        desc: '写了851k字 · 2.9k喜欢'
      },
      {
        id: 2,
        name: '简书钻首席小管家',
        imgUrl: '/images/sh.webp',
        desc: '写了751k字 · 3.9k喜欢'
      },
      {
        id: 3,
        name: '美诗应',
        imgUrl: '/images/hh.webp',
        desc: '写了851k字 · 2.9k喜欢'
      },
      {
        id: 4,
        name: '哲哲',
        imgUrl: '/images/lx.webp',
        desc: '写了851k字 · 2.9k喜欢'
      },
      {
        id: 5,
        name: '噶归属地',
        imgUrl: '/images/sy.webp',
        desc: '写了151k字 · 1.9k喜欢'
      }
    ]
  }
  return builder(mockData)
}

const addList = (options) => {
  return builder([
    {
      id: 5,
      title: '推荐几个好用的手机软件',
      imgUrl: '/images/ds.webp',
      nickname: '大俗少年',
      read: 31,
      like: 19,
      desc: '手机软件那么多，到底有哪些是比较好，比较方便的呢？经过我多次尝试和使用，给大家推荐几个好用的app软件。 1.时光日历   这款app是适...'
    },
    {
      id: 6,
      title: '我们不再需要 Chrome？',
      imgUrl: '/images/lx.webp',
      nickname: '疯狂的鹅',
      read: 65,
      like: 56,
      desc: '上位 十年前，浏览器的主要市场还在被微软的 IE 牢牢占据着。IE 作为 Windows 的默认浏览器，基本上控制了绝大部分人访问互联网的方式。...'
    },
    {
      id: 7,
      title: '☁两年大学，这几件事正改变着我的青春。🍃',
      imgUrl: '/images/sh.webp',
      nickname: '就这样吧~',
      read: 12,
      like: 22,
      desc: '说句题外话，我们应该找对一个准确的方向去面对我们的生活。 一、班委竞选失败 在我刚上大学的时候，还对一切未知充满好奇。 从小养成的自傲的脾气，我...'
    },
    {
      id: 8,
      title: '人生中有三大“天规”，一旦违背，后半生会越过越艰难！',
      imgUrl: '/images/sy.webp',
      nickname: '王树鹏',
      read: 45,
      like: 24,
      desc: '一、薄福之人过享其福，必有忽然之祸。贯贫之人不安其贫，必有意外之忧。 一个福德薄弱的人如果太过享受福报，就必然会有灾祸降临；一个一贯贫困的人突然...'
    }
  ])
}

Mock.mock(/\/api\/home/, 'get', getHomeInfo)
Mock.mock(/\/api\/addList/, 'get', addList)
