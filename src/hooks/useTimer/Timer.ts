export class Timer extends EventTarget {
  private _elapsedTime: number;

  private _startTimestamp: number = Date.now();
  private _stopTimestamp: number = Date.now();

  private _interval?: NodeJS.Timer;

  constructor(elapsed?: number) {
    super();
    this._elapsedTime = elapsed || 0;
  }

  start(): void {
    this._startTimestamp = Date.now();
    this._interval = setInterval(() => {
      this.dispatchEvent(new Event('tick'));
    }, 200);
  }

  stop(): number {
    this._stopTimestamp = Date.now();
    this._elapsedTime = this._stopTimestamp - this._startTimestamp;
    clearInterval(this._interval);

    return this._elapsedTime;
  }

  timeFormat(format: string): string {
    const ms = this._elapsedTime || Date.now() - this._startTimestamp;
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);

    return format
      .replace('%ms', String(ms % 1000).padStart(3, '0'))
      .replace('%s', String(s % 60).padStart(2, '0'))
      .replace('%m', String(m).padStart(2, '0'));
  }

  time(): number {
    return this._elapsedTime;
  }
}
