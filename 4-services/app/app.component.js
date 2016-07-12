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
var header_component_1 = require('./header/header.component');
var component_1_component_1 = require('./component-1/component-1.component');
var component_2_component_1 = require('./component-2/component-2.component');
var logger_service_1 = require('./common/logger.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <my-header></my-header>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <my-component-1></my-component-1>\n        </div>\n        <div class=\"col-md-6\">\n          <my-component-2></my-component-2>\n        </div>\n      </div>\n    </div>\n        ",
            providers: [logger_service_1.LoggerService],
            directives: [header_component_1.HeaderComponent, component_1_component_1.Component1Component, component_2_component_1.Component2Component]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map