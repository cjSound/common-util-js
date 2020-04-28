/*
 * @Author: 曹捷
 * @Date: 2020-04-27 11:08:41
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-04-27 11:21:10
 * @Description: 发布-订阅模式 
 *  各模块相互独立
    存在一对多的依赖关系（1发布 多订阅）
    依赖模块不稳定、依赖关系不稳定
    各模块由不同的人员、团队开发
 */
const EventEmit = function () {
    this.events = {};
    // 订阅 不同的人订阅同一个发布条件，发布者不需要添加完成事件之后要调用的其他逻辑，只管发布
    this.on = function (name, cb) {
        if (this.events[name]) {
            this.events[name].push(cb);
        } else {
            this.events[name] = [cb];
        }
    };
    // 事件完成  只需要发布一个事件  
    // 适用场景 事件完成之后需要调用很多的后续操作，可能这些后续操作不是同一个人维护。
    // 不同人维护的不同事件可以采用订阅模式，订阅在这个事件上面
    // 发布者不需要关系我事情完成之后需要干嘛，我只需要发布一次触发
    // 订阅者之间相互独立，可以自己订阅处理自己的逻辑，逻辑部分不影响发布者的操作
    this.trigger = function (name, ...arg) {
        if (this.events[name]) {
            this.events[name].forEach(eventListener => {
                eventListener(...arg);
            });
        }
    };
};
export default EventEmit;