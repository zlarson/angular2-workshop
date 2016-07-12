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
var child_component_component_1 = require('../child-component/child-component.component');
var ParentComponent = (function () {
    function ParentComponent() {
        this.fromChildComponent = '';
    }
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'my-parent-component',
            template: "\n    <h2>Custom Component Bindings Example</h2>\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\"><h4>Parent Component</h4></div>\n        <div class=\"panel-body\">\n            <my-child-component \n            [myName]=\"'Zach'\" \n            (emitValueChanged)=\"fromChildComponent = $event\"\n            [myAge]=33></my-child-component><BR>\n            From the Child Component: {{fromChildComponent}}\n        </div>\n    </div>\n  ",
            directives: [child_component_component_1.ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent-component.component.js.map