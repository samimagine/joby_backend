"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileResolver = void 0;
var mockData_1 = require("../data/mockData");
exports.fileResolver = {
    Query: {
        files: function (_, _a) {
            var _b;
            var cardId = _a.cardId;
            return ((_b = mockData_1.cards.find(function (card) { return card.id === cardId; })) === null || _b === void 0 ? void 0 : _b.files) || [];
        },
    },
};
