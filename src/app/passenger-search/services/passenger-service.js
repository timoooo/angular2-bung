"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by timo on 25.11.16.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import {BASE_URL} from "../../app.tokens";
var PassengerService = (function () {
    function PassengerService(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    PassengerService.prototype.find = function (name, firstname) {
        var url = this.baseUrl;
        var search = new http_1.URLSearchParams();
        search.set('Name', name);
        search.set('Firstname', firstname);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    PassengerService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(BASE_URL))
    ], PassengerService);
    return PassengerService;
}());
exports.PassengerService = PassengerService;
//# sourceMappingURL=passenger-service.js.map