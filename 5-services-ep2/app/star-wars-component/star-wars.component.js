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
var star_wars_service_1 = require('../star-wars-service/star-wars.service');
var StarWarsComponent = (function () {
    function StarWarsComponent(_starWarsInfoService) {
        this._starWarsInfoService = _starWarsInfoService;
    }
    StarWarsComponent.prototype.onGetCharacterClick = function (id) {
        var _this = this;
        this._starWarsInfoService
            .get(id)
            .subscribe(function (c) { return _this.character = c; });
    };
    StarWarsComponent.prototype.ngOnInit = function () {
    };
    StarWarsComponent = __decorate([
        core_1.Component({
            selector: 'my-star-wars',
            templateUrl: './app/star-wars-component/star-wars.component.html',
            providers: [star_wars_service_1.StarWarsService]
        }), 
        __metadata('design:paramtypes', [star_wars_service_1.StarWarsService])
    ], StarWarsComponent);
    return StarWarsComponent;
}());
exports.StarWarsComponent = StarWarsComponent;
//# sourceMappingURL=star-wars.component.js.map