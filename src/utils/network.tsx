import NetInfo from '@react-native-community/netinfo';

export class NetworkUtils {
  static async isConnected(): Promise<boolean> {
    const state = await NetInfo.fetch();
    return state.isConnected ?? false;
  }

  static addConnectionListener(callback: (isConnected: boolean) => void) {
    return NetInfo.addEventListener((state) => {
      callback(state.isConnected ?? false);
    });
  }
}
