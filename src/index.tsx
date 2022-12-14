/**
 * Copyright Composiv Inc and its affiliates
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as ViewBuilder from './ViewBuilder';
import * as Registry from './Registry';

let config;

function initializeApp(_config) {
  config = _config;
  Registry.register(config.shares, config.remotes, config.renderer);
}

const liveui = { ViewBuilder, Registry, initializeApp, config };

export { ViewBuilder, Registry, initializeApp, config };

export default liveui;
