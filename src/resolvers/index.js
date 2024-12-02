"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var cardResolver_1 = require("./cardResolver");
var fileResolver_1 = require("./fileResolver");
exports.resolvers = [cardResolver_1.cardResolver, fileResolver_1.fileResolver];
