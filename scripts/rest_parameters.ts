function somarRenda(...meses: number[]): number {
  return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual);
}

console.log(somarRenda(1000, 2000, 500));