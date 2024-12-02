"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardResolver = void 0;
var mockData_1 = require("../data/mockData");
exports.cardResolver = {
    Query: {
        cards: function () { return mockData_1.cards; },
        card: function (_, _a) {
            var id = _a.id;
            return mockData_1.cards.find(function (card) { return card.id === id; });
        },
    },
};
