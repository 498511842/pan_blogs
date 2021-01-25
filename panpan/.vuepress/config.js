module.exports = {
  "title": "PanBlog",
  "description": "我的个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/plan.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    //****************************导航栏****************** */
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "搭建记录",
            "link": "/docs/mylog/"
          },
          {
            "text": "随便写写",
            "link": "/docs/sketch/"
          },
          {
            "text": "Linux",
            "link": "/docs/Linux/"
          },
          {
            "text": "主题模板",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/498511842",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/PlanPan",
            "icon": "reco-mayun"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/cm_panpan",
            "icon": "reco-csdn"
          }
        ]
      }
    ],
    //*************************************侧边栏设置******************************
    "subSidebar": 'auto',
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/Linux/": [
        "",
        "Ubuntu",
        "centos"
      ],
      "/docs/mylog/": [
        ""
      ],
      "/docs/sketch/": [
        "",
        {//以下是分组形式的侧边栏
          title: "Group 1",//必要的 侧边栏名称
          path: '/docs/sketch/',//可选的路径
          collapsable: true, // 默认为true
          sidebarDepth: 1,  // 可选的,默认为1 深度
          children: [    //子侧边栏
            'gg1',
            {
              title: 'Group 2',
              path: '/docs/sketch/',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                'gg2',
              ]
            }
          ]
        }
      ]
    },
    //************************************类型*************************** */
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    //****************************************友情链接******************* */
    "friendLink": [//设置友情链接
      {
        "title": "我的个人简历",
        "desc": "Self-confidence can change the future.",
        "email": "498511842@qq.com",
        "link": "https://panplan.top/RESUME/"
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/plan.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "pan",
    "authorAvatar": "/plan.jpg",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}