export type MainStackParamList = {
    BottomTab: undefined;
    ProductDetail: { item: any };
};

export type BottomTabParamList = {
    HomeStack: undefined;
    Cart: undefined;
    Favorites: undefined;
    Account: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    Search: undefined;
    SearchResult: { searchQuery?: string };
};