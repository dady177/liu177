let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：刘娇'
            },{
                name: 'div',
                text: '年龄：22'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '邮箱:liujiao15181473371@163.com'
            },{
                name: 'div',
                text: '联系电话：15181473371'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：川南幼儿师范高等专科学校'
        },{
            name: 'div',
            text: '毕业时间：2019.07',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'熟练使用',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'HTML、CSS、JavaScript等前端技术，完成网页静态布局，开发兼容主流浏   览器的页面，以及实现页面的交互，提升用户体验'
            }]
        }, {
            name: 'li',
            text:'掌握localStorage、sessionStorage等前端存储方案，记录用户操作习惯或常用数据，从而降低HTTP请求，提升用户体验'
        }, {
            name: 'li',
            text:'掌握JSONP和CORS等跨域解决方案'
        }, {
            name: 'li',
            text:'熟练使用git版本控制工具，进行代码管理，实现敏捷开发'
        }, {
            name: 'li',
            text:'熟练使用Bootstarp框架，通过栅格系统快速布局响应式页面以适应不同设备'
        }, {
            name: 'li',
            text:'熟练掌握Vue前端MVVM框架'
        }, {
            name: 'li',
            text:'熟悉Angular、React等主流MVC框架'
        }, {
            name: 'li',
            text:'熟悉Node.js开发，能够使用node.js和express实现服务器端功能，访问数据库'
        }, {
            name: 'li',
            text:'熟悉微信小程序的开发'
        }, {
            name: 'li',
            text:'简单处理图片、音视频'
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：刘老师的娃(混合APP开发)'
            },{
                name: 'li',
                text: 'github地址：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'https://github.com/dady177/teacherliu177'
                }]
            },{
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'Vue全家桶、'
                }, {
                    name: 'span',
                    text: '饿了吗官方mint-ui框架、'
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'node.js、'
                }, {
                    name: 'span',
                    text: 'express、'
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'MySQL'
                }]
            }, {
                name: 'li',
                text: '项目描述：刘老师是一个专为在校幼儿家长提供家园共育的资料分享平台。该项目分为“后台管理子系统”和“客户端子系统（APP）”.后端管理子系统使用Node.js/Express和MySQL搭建数据访问API。客户端子系统（APP版）使用了Vue.js和MintUI组件库搭建用户界面，使用Axios异步请求服务器端数据API，具体实现了“首页内容的预览和详情查看”、“课程预览和课程详情查看”、“推荐书读物预览、详情查看加入购物车购买功能”、“用户登录注册账号的功能”等。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：个人简历'
            },{
                name: 'li',
                text: 'github地址：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'https://github.com/dady177/liu177'
                }]
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'prism'
                }]
            }, {
                name: 'li',
                text: ' 项目描述：该项目的样式代码和简历分离在页面的左右'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：新东方响应式网页'
            },{
                name: 'li',
                text: 'github地址：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'https://github.com/dady177/neworiental'
                }]
            } ,{
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'Bootdtrap'
                }]
            }, {
                name: 'li',
                text: ' 项目描述：新东方响应式网页利用了Bootstrap前端开发框架，包含了所有的课程，根据不同尺寸呈现不同的布局，增加客户体验度。'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [ {
            name: 'li',
            text:'常混迹于',
            children: [{
                name: 'span',
                class: 'tag',
                text: '前端主流社区'
            }, {
                name: 'span',
                text: '（CSDN、掘金、知乎、简书），翻阅前端'
            }, {
                name: 'span',
                class: 'tag',
                text: '大咖'
            }, {
                name: 'span',
                text: '博客（张鑫旭、阮一峰、黄轶）'
            }]
        }, {
            name: 'li',
            text:'热爱前端、思维活跃、学习能力强，抗压能力强。'
        }, {
            name: 'li',
            text:'性格随和、诚恳稳重、身体素质较好、能够适应出差和加班。'
        }]
    }
]
let style = `
    /*
    * 面试官你好，我是刘娇，四川南充人
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeLiujiao{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeLiujiao{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="images/index/balloon.png" id="bg-balloon-small">
        <img src="images/index/balloon.png" id="bg-balloon-large">
        <img src="images/index/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


