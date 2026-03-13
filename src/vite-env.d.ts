/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | Element[], vars?: any);
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
    revert(): void;
  }
}
