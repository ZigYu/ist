import { Howl } from 'howler';

const pathUtil = require('path');
const _ = require('lodash');

/**
 * Класс управляющий группой звуков.
 */
class Sounds {
  playingName = null;

  playlistOps = {};

  /**
   * @typedef {object} Sounds.SoundsOptions   Настройки для создания группы звуков.
   * @property {string} name        Название файла с расширением ('example.mp3').
   * @property {string[]} playlist  Массив с названиями плэйлистов в которых находится звук.
   */

  /**
   * Принимает данные для формирования плэйлистов.
   * Создает объекты звуков.
   * @param  {string} ops.pathDir     Путь каталога с файлами звуков.
   * @param  {Sounds.SoundsOptions[]} ops.files     Массив с объектами настройки звуков.
   * @param  {number} ops.volume      Изначальная громкость.
   */
  constructor({ pathDir, files, volume = 1 }) {
    this.volume = volume;
    this.playlists = {};
    this.sounds = {};

    files.forEach(({ playlist, name }) => {
      const fileName = pathUtil.parse(name).name;
      const filePath = pathUtil.join(
        process.env.EXTRA_RESOURCES_PATH,
        pathDir,
        name
      );

      this.sounds[fileName] = new Sound({
        name: fileName,
        context: this,
        path: filePath,
        onend: this._onend
      });

      if (playlist) {
        playlist.forEach(listName => {
          if (!this.playlists[listName]) this.playlists[listName] = [];
          this.playlists[listName].push(fileName);
        });
      }
    });
  }

  /**
   * Устанавливает уровень громкости.
   * @param {number} volume Уровень громкости от 0 до 1.
   */
  setVolume(volume) {
    this.volume = volume;
    if (this.playingName)
      this.sounds[this.playingName].audio.volume(volume, this.playingId);
  }

  /**
   * Запускает проигрывание плэйлиста.
   * @param {string} listName Название плэйлиста.
   * @param {object} [ops] Опции.
   * @param {boolean} [ops.once] Если true то запустится один случайный звук из плэйлиста.
   */
  playlist(listName, ops = {}) {
    const playlist = this.playlists[listName];
    if (!playlist)
      throw new Error(`Sounds.playlist: playlist ${listName} не существует`);

    this.currentPlaylist = _.shuffle(playlist);
    this.playlistOps = ops;

    this.play(this.currentPlaylist[0]);
  }

  /**
   * Запускает проигрывание звукового файла.
   * @param {string} soundName Название звукого файла.
   */
  play(soundName) {
    const sound = this.sounds[soundName];
    if (!sound) throw new Error(`Sounds.play: звук ${soundName} отсутствует`);
    if (this.playingName === soundName) return;

    if (this.playingName) this.sounds[this.playingName].stop();
    this.playingName = soundName;
    this.playingId = this.sounds[soundName].play();
  }

  /**
   * Коллбэк запускающийся после проигрывания звука.
   */
  _onend = () => {
    const { playingName } = this;
    this.playingName = null;

    if (this.currentPlaylist) {
      const nextName = this.currentPlaylist[
        this.currentPlaylist.indexOf(playingName) + 1
      ];
      if (!this.playlistOps.once) {
        setTimeout(() => {
          this.play(nextName || this.currentPlaylist[0]);
        }, 3 * 60 * 1000);
      }
    }
  };
}

/**
 * Предоставляет функционал для управления конкретным звуком.
 */
class Sound {
  /**
   * Создает объект конткретного звука.
   * @param  {string} options.name    Название звука (название файла без расширения).
   * @param  {string} options.path    Путь к звуковому файлу.
   * @param  {object} options.context Контекст родительского объекта (Sounds).
   * @param  {function} options.onend Коллбэк запускающийся после проигрывания звука.
   */
  constructor({ name, path, context, onend }) {
    this.name = name;
    this.context = context;

    this.audio = new Howl({
      onend,
      src: path
    });
  }

  /**
   * Запускает проигрывание звукового файла.
   * @return {number} Идентификатор проигрывания (от Howl).
   */
  play() {
    this.audio.volume(this.context.volume);
    return this.audio.play();
  }

  /**
   * Останавливает воспроизведение.
   */
  stop() {
    this.audio.stop();
    this.context.playingName = null;
  }
}

export const sound = new Sounds({
  pathDir: 'sound',
  files: [{ name: 'put.mp3' }, { name: 'denied.mp3' }, { name: 'success.wav' }]
});

export const music = new Sounds({
  pathDir: 'music',
  files: [
    { name: 'home.mp3', playlist: ['lesson'] }
    // { name: 'bossa_nova.mp3', playlist: ['lesson'] },
    // { name: 'buddy.mp3', playlist: ['lesson'] },
    // { name: 'clear_day.mp3', playlist: ['lesson'] },
    // { name: 'cute.mp3', playlist: ['lesson'] },
    // { name: 'funny.mp3', playlist: ['lesson'] },
    // { name: 'jazzy.mp3', playlist: ['lesson'] },
    // { name: 'light_of_hope.mp3', playlist: ['lesson'] },
    // { name: 'sunny.mp3', playlist: ['lesson'] },
    // { name: 'the_lounge.mp3', playlist: ['lesson'] },
    // { name: 'ukulele.mp3', playlist: ['lesson'] },
    // { name: 'goat.mp3', playlist: ['lesson'] },
    // { name: 'toy_piano.mp3', playlist: ['lesson'] },
    // { name: 'sand_castles.mp3', playlist: ['lesson'] },
    // { name: 'bike_rides.mp3', playlist: ['lesson'] },
    // { name: 'rainy_day_games.mp3', playlist: ['lesson'] },
    // { name: 'dancing_on_green_grass.mp3', playlist: ['lesson'] },
    // { name: 'this_old_man_instrumental.mp3', playlist: ['lesson'] }
  ]
});
