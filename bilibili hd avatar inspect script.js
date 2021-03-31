// ==UserScript==
// @name         查看B站用户高清头像
// @namespace    https://github.com/YouMoeYi/bilibili-hd-avatar-inspect-script
// @namespace    https://greasyfork.org/zh-CN/scripts/423589-%E6%9F%A5%E7%9C%8Bb%E7%AB%99%E7%94%A8%E6%88%B7%E9%AB%98%E6%B8%85%E5%A4%B4%E5%83%8F
// @email        hy.s@foxmail.com
// @version      1.2
// @description  查看B站用户高清头像 可自由配置
// @author       YouMoeYi
// @match        https://space.bilibili.com/*
// @grant        none
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8=
// ==/UserScript==

(function () {
    'use strict';

    // 控制台运行提示
    console.log('查看B站用户高清头像脚本努力运行中 => 作者: YouMoeYi => https://github.com/YouMoeYi/bilibili-hd-avatar-inspect-script')

    // 配置
    const config = {
        // 是否在新标签页打开头像 推荐 false
        isOpenInNewTab: false,
        // 高清头像的大小 单位px 推荐 480/360/240 
        hdAvatarSize: 360,
        // 警告文本前缀
        alertTextPrefix: '查看B站用户高清头像脚本: ',
        // 脚本创建的节点的ID和类的前缀 (以防和原页面重复)
        scriptNodeIdOrClassPrefix: ''
    }

    // 工具函数
    // 判断一个变量是否是对象(而不是数组)
    function isTrueObject(any) {
        return Object.prototype.toString.call(any) === '[object Object]'
    }

    // 判断一个对象是否为空
    function isEmptyObject(obj) {
        return isTrueObject(obj)
            ? (Object.keys(obj).length) === 0
            : false
    }

    // 弹出警告框并抛出错误
    function alterThenThrow(message) {
        alert(config.alertTextPrefix + message)
        throw new Error(message)
    }

    // 修改元素节点的css样式
    function css(element, config) {
        if (isTrueObject(config) && !isEmptyObject(config)) {
            for (const [key, value] of Object.entries(config)) {
                element.style[key] = value
            }
        } else {
            alterThenThrow('css函数参数错误')
        }
    }

    // 拆分的小块
    // 隐藏高清头像
    function hideHdAvatar() {
        css(document.getElementById('hd-avatar-back-mask-layer'), { display: 'none' })
        css(document.getElementById('hd-avatar-div'), { display: 'none' })
    }

    // 显示高清头像
    function showHdAvatar() {
        css(document.getElementById('hd-avatar-back-mask-layer'), { display: 'block' })
        css(document.getElementById('hd-avatar-div'), { display: 'block' })
    }


    // 页面加载完 正式运行脚本
    function work() {
        // 获取相应的DOM节点
        const userInfoDiv = document.querySelector('.h-basic div')
        const avatarImg = document.querySelector('#h-avatar')

        // 获取头像URL
        let avatarImgUrl = avatarImg.src
        let avatarImgUrlWithoutZoom = avatarImgUrl.split('@')[0]

        // 创建查看头像按钮
        let inspectAvatarButton = document.createElement('div')

        // 配置查看头像按钮的属性和样式
        inspectAvatarButton.id = 'inspect-avatar-button'
        inspectAvatarButton.innerText = '查看头像'
        css(inspectAvatarButton, {
            display: 'inline-block',
            height: '16px',
            'line-height': '16px',
            'border-radius': '4px',
            'font-size': '12px',
            color: '#fff',
            padding: '0 5px',
            'background-color': '#f45a8d',
            'vertical-align': 'middle',
            'margin-left': '5px',
            cursor: 'pointer'
        })

        // 将查看头像按钮插入进用户信息div中
        userInfoDiv.appendChild(inspectAvatarButton)

        // 高清头像是否插入DOM中
        let isHdImageInserted = false
        // 为查看头像按钮绑定click事件
        inspectAvatarButton.addEventListener('click', function () {
            // 如果配置为在新窗口打开高清头像
            if (config.isOpenInNewTab) {
                window.open(avatarImgUrlWithoutZoom, '_blank')
            } else { // 如果配置为在当前窗口打开高清头像
                // 如果高清头像还没插入DOM中时
                if (!isHdImageInserted) {   // 将高清头像插入DOM
                    // 创建并配置遮罩层
                    let maskLayer = document.createElement('div')
                    maskLayer.id = 'hd-avatar-back-mask-layer'
                    css(maskLayer, {
                        'z-index': '99998',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: document.documentElement.clientWidth + 'px',
                        height: document.documentElement.clientHeight + 'px',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    })

                    // 为遮罩层绑定click事件
                    maskLayer.addEventListener('click', function () {
                        hideHdAvatar()
                    })

                    // 创建并配置高清头像div (容器)
                    let hdAvatarDiv = document.createElement('div')
                    hdAvatarDiv.id = 'hd-avatar-div'
                    css(hdAvatarDiv, {
                        'z-index': '99999',
                        position: 'fixed',
                        'margin-top': `calc(50vh - ${config.hdAvatarSize / 2}px)`,
                        'margin-left': `calc(50vw - ${config.hdAvatarSize / 2}px)`,
                        width: config.hdAvatarSize + 'px',
                        height: config.hdAvatarSize + 'px',
                    })

                    // 创建并配置高清头像img
                    let hdAvatarImg = document.createElement('img')
                    hdAvatarImg.src = avatarImgUrlWithoutZoom
                    css(hdAvatarImg, {
                        width: config.hdAvatarSize + 'px',
                        height: config.hdAvatarSize + 'px',
                        position: 'fixed',
                        border: '0.6px solid rgba(0, 0, 0, 0.6)'
                    })

                    // 高清头像img装载进div
                    hdAvatarDiv.appendChild(hdAvatarImg)

                    // 高清头像右上角叉的base64编码
                    const unHoverCloseButtonSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGrGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozQjk3QUY1OEZBNUJFMzExQjExOTg2REFEMkRFM0JFMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE1MGFlMWZjLThjYzQtMTc0ZS1iYTQyLThhYjYwM2YzOGQ3ZiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzA5MThjNy02ZjRjLTdmNGUtYTg3Yi05YmMwYmE1NDRmYjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMTlUMjI6MzM6MjYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTE5VDIyOjM1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTE5VDIyOjM1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUU3NzQwNTYwQTVDRTMxMTk5MUZCNjY5N0M1Qjg0RDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0I5N0FGNThGQTVCRTMxMUIxMTk4NkRBRDJERTNCRTMiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjZiZmE4NzQtOGMwMC0zZDRmLWIxMWQtN2NlYzFhNjAzYTI1IiBzdEV2dDp3aGVuPSIyMDIxLTAzLTE5VDIyOjM1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzA5MThjNy02ZjRjLTdmNGUtYTg3Yi05YmMwYmE1NDRmYjkiIHN0RXZ0OndoZW49IjIwMjEtMDMtMTlUMjI6MzUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bWcI6wAAAHBJREFUOI3N1FEOgDAIA1Dq/e9cv0zmBi2amcg3eYEBA8nYFcc26VMMAAG0+s5ybxhJXIkOGvNTrANWUIopUEElloEOioiA27OxOgXJyt6ExObW3JRLbIY6YIpVj+3ABXNTU+ByTgpyoF2NJ/HfL+gEDzRWIzgJEQgAAAAASUVORK5CYII='

                    const onHoverCloseButtonSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozQjk3QUY1OEZBNUJFMzExQjExOTg2REFEMkRFM0JFMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEwNjJhM2ZmLTc2MDktN2M0Ny04MDYyLThiMmIzNWQ2ZDlkZSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjOTJhMGVmMC0yZGYxLTAyNDEtODBiZi03YTMwMTk0MDllYWMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMTlUMjI6MzM6MjYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTE5VDIyOjM1OjUzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTE5VDIyOjM1OjUzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUU3NzQwNTYwQTVDRTMxMTk5MUZCNjY5N0M1Qjg0RDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0I5N0FGNThGQTVCRTMxMUIxMTk4NkRBRDJERTNCRTMiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjQ4NmQ5ZDMtZDk4Ny02ZjQyLWE0ZTQtNGU0NjA3NmRlYmU0IiBzdEV2dDp3aGVuPSIyMDIxLTAzLTE5VDIyOjM1OjUzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjOTJhMGVmMC0yZGYxLTAyNDEtODBiZi03YTMwMTk0MDllYWMiIHN0RXZ0OndoZW49IjIwMjEtMDMtMTlUMjI6MzU6NTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rutM1QAAAHJJREFUOI2lkzEOwCAIRdUOOHoTwuj9r+TgRgdNh5bol/6N+J5oAlettbXWew9wSikiEogId574rE9UVVWdwOJse69N7DWTQ7UXvdDiQp5EtJmEPgM0R8PRzfNJs0Q1VHZOwq/pO0vO2WclZj5dNiJi5hsaAn1s2riTjgAAAABJRU5ErkJggg=='

                    // 创建关闭按钮
                    let closeButton = document.createElement('img')
                    // 设置关闭按钮默认图片和样式 (未聚焦)
                    closeButton.src = unHoverCloseButtonSrc
                    css(closeButton, {
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer'
                    })

                    // 关闭按钮默认图片聚焦时
                    closeButton.addEventListener('mouseenter', function () {
                        closeButton.src = onHoverCloseButtonSrc
                    })

                    // 关闭按钮默认图片未聚焦时
                    closeButton.addEventListener('mouseleave', function () {
                        closeButton.src = unHoverCloseButtonSrc
                    })

                    // 点击关闭按钮图片关闭高清头像显示
                    closeButton.addEventListener('click', function () {
                        hideHdAvatar()
                    })

                    // 将关闭按钮插入进高清头像div中
                    hdAvatarDiv.appendChild(closeButton)

                    // 插入遮罩层和高清图片到body中
                    document.body.prepend(maskLayer)
                    document.body.prepend(hdAvatarDiv)
                    // 插入后更改状态
                    isHdImageInserted = true
                } else { // 已经将遮罩层插入DOM 但被隐藏时 点击按钮恢复显示
                    showHdAvatar()
                }
            }
        })
    }

    document.body.addEventListener('load', e => {
        if (e.target.id == 'h-avatar') {
            work()
        }
    }, true)
})();