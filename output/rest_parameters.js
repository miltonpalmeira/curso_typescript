"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual);
}
console.log(somarRenda(1000, 2000, 500));
//# sourceMappingURL=rest_parameters.js.map