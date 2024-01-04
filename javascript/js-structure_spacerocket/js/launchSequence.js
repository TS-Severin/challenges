// import the satellite consts and the function

import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";

// import other functions according to steps

import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// create and export launch-function which calls the imported functions

export default function Launch() {
  // load satellites payload satellite by satellite

  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();

  // the loop calls the function 5 times (count 4 because it is zero indexed)

  for (let count = 0; count <= 4; count++) {
    countdown();
  }

  liftoff();

  deployPayload();
}
