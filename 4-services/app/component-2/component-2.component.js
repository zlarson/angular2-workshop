"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var logger_service_1 = require('../common/logger.service');
var Component2Component = (function () {
    function Component2Component(_loggerService) {
        this._loggerService = _loggerService;
    }
    Component2Component.prototype.onLog = function (message) {
        this._loggerService.log(message);
    };
    Component2Component = __decorate([
        core_1.Component({
            selector: 'my-component-2',
            template: "\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\"><h4>Component 2</h4></div>\n            <div class=\"panel-body\">\n                <input type=\"text\" class=\"form-control\" #message><BR>\n                <button class=\"btn btn-success\" (click)=\"onLog(message.value)\">Log Message</button>\n            </div>\n        </div>        \n    ",
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], Component2Component);
    return Component2Component;
}());
exports.Component2Component = Component2Component;
//# sourceMappingURL=component-2.component.js.map