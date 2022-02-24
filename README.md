# 腾讯云微搭低代码组件库模板

[腾讯云微搭低代码]平台支持你将自己的组件导入成低码平台可运行的自定义代码组件，本项目即是腾讯云微搭低代码平台的组件库模板，介绍如何编写一个可以在微搭使用的组件库。

当前支持[小程序组件]和 [react] 组件。

## 组件库

微搭低码组件库使用各平台/框架标准的组件格式，通过配置类型文件描述组件的行为、出参、入参及元数据等信息和微搭平台做对接。

## 项目目录

主要目录说明：

```
.
├── .storybook              # storybook 配置目录
└── src
    ├── test                # 测试目录
    ├── configs             # 组件类型申明目录
    │   ├── actions         # 组件库方法类型申明
    │   └── components      # 组件目录类型申明
    ├── mp                  # 小程序组件
    │   ├── actions         # 小程序组件方法实现
    │   └── components      # 小程序组件实现
    ├── stories             # 组件 story / 测试
    └── web                 # web（react） 组件
        ├── actions         # web 组件方法实现
        └── components      # web 组件实现
```

## 开发

组件库开发前置依赖：

1. 进入组件库更目录，安装依赖： `npm i` or `yarn`
2. 安装云开发命令行工具：`npm i -g @cloudbase/cli` or `yarn global add @cloudbase/cli`
3. 登录云开发命令行：`tcb login` 并输入密码
4. 去腾讯云微搭低码控制台创建组件库

### 编写组件

编写能在低码平台运行的组件需要各自平台的**标准组件源码**和**组件描述**。
#### 组件描述

TODO

在腾讯云微搭低代码编辑器调试组件库，在当前目录执行：

```
tcb lowcode debug
```

组件开发完成后，提交组件到微搭低代码平台：

```
tcb lowcode publish
```

组件开发更多信息请[参考文档](https://docs.cloudbase.net/lowcode/custom-components/quick-start/comps.html)。

## 其他

为了让你的组件开发工作更加便捷和稳定，我们集成了 [storybook] 及组件测试工具来辅助组件的开发。虽然 storybook 和组件测试不是必须的，我们仍然建议你使用他们来保证组件始终工作正常。

### 使用 storybook 本地开发

我们已在模板中集成好了 [stroybook] 的使用环境。对于每一个组件你需要

1. 编写 [story](https://storybook.js.org/docs/react/get-started/whats-a-story)，story 是 storybook 的组件状态单元，描述了组件在一组特定状态下的行为。
2. 当你为组件编写了足够多的用例后，你可以运行 `npm run storybook` 命令来

### 组件测试

我们建议你为你的定义组件编写必要的测试。我们集成进了 jest 和 小程序模拟器来协助组件的多端测试。

对于 web 组件我们建议利用编写的 [story 来进行组件测试](https://storybook.js.org/docs/react/workflows/testing-with-storybook)。

编写完测试用例后运行 `npm test` 执行测试命令。

组件测试请参考：
- https://github.com/wechat-miniprogram/miniprogram-simulate
- https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/unit-test.html
- https://jestjs.io/docs/snapshot-testing
- https://storybook.js.org/tutorials/intro-to-storybook/react/en/test/

[腾讯云微搭低代码]: (https://cloud.tencent.com/product/weda)
[小程序组件]: (https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
[react]: (https://reactjs.org/)
[storybook]: (https://storybook.js.org/)
