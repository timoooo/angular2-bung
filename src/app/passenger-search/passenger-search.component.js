"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(http) {
        this.http = http;
        this.passengers = [];
    }
    PassengerSearchComponent.prototype.search = function () {
        var _this = this;
        var url = "http://www.angular.at/api/passenger";
        var search = new http_1.URLSearchParams();
        search.set('name', this.name);
        search.set('firstname', this.firstname);
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (passengers) {
            _this.passengers = passengers;
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    PassengerSearchComponent.prototype.select = function (passenger) {
        this.selectedPassenger = passenger;
    };
    PassengerSearchComponent = __decorate([
        core_1.Component({
            selector: 'passenger-search',
            templateUrl: './passenger-search.component.html'
        })
    ], PassengerSearchComponent);
    return PassengerSearchComponent;
}());
exports.PassengerSearchComponent = PassengerSearchComponent;
//# sourceMappingURL=passenger-search.component.js.map