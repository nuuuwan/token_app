const URL_BASE = [
  "https://raw.githubusercontent.com",
  "nuuuwan/token_app/main/public",
].join("/");

const URL_SHORT = URL_BASE + "/tabla-short.mp3";
const URL_LONG = URL_BASE + "/tabla-long.mp3";

export default class AudioX {
  static tracks = {
    short: new Audio(URL_SHORT),
    long: new Audio(URL_LONG),
  };

  static async playIfNotNull(track) {
    if (track && track.play) {
      await track.play();
    }
  }

  static async playLong() {
    await this.playIfNotNull(this.tracks.long);
  }

  static async playShort() {
    await this.playIfNotNull(this.tracks.short);
  }
}
