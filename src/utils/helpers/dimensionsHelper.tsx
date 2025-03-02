import { Dimensions } from 'react-native';

export class DimensionsHelper {
  static getScreenWidth(): number {
    return Dimensions.get('window').width;
  }

  static getScreenHeight(): number {
    return Dimensions.get('window').height;
  }

  static getScreenDimensions(): { width: number; height: number } {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  }

  static isLandscape(): boolean {
    const { width, height } = this.getScreenDimensions();
    return width > height;
  }
}
