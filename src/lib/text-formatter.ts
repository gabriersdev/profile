export default class TextFormatter {
  static capitalize (text: string) {
    if (!text) return ''
    if (text.length == 0) return text.toUpperCase();
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}