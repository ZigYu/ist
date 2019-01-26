import { generateColors, injectColors } from '../utils';
import { music, sound } from '../utils/sounds';

export const CONFIG_UPDATE = 'CONFIG_UPDATE';

export function update(config) {
  music.setVolume(config.volumeMusic / 100);
  sound.setVolume(config.volumeSound / 100);

  const updatedConfig = {
    ...config,
    colors: generateColors(config.baseColor)
  };

  injectColors(updatedConfig.colors);

  return {
    type: CONFIG_UPDATE,
    payload: updatedConfig
  };
}
