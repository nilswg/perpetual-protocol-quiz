export class System {
  private _twdReserve: number;
  public get twdReserve(): number {
    return this._twdReserve;
  }
  private _usdReserve: number;
  public get usdReserve(): number {
    return this._usdReserve;
  }
  readonly constProduct: number;

  constructor(initial: { twdReserve: number; usdReserve: number }) {
    this._twdReserve = initial.twdReserve;
    this._usdReserve = initial.usdReserve;
    this.constProduct = this._twdReserve * this._usdReserve;
  }

  tradeTwdtoUsd(twdCost: number) {
    const minusUsd =
      this.constProduct / (this._twdReserve + twdCost) - this._usdReserve;
    this._usdReserve += minusUsd;
    this._twdReserve += twdCost;
    return minusUsd;
  }

  tradeUsdtoTwd(usdCost: number) {
    const minusTwd =
      this.constProduct / (this._usdReserve + usdCost) - this._twdReserve;
    this._twdReserve += minusTwd;
    this._usdReserve += usdCost;
    return minusTwd;
  }
}
