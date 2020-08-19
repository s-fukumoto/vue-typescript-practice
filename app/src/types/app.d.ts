// ナビゲーション項目
export interface NavigationItem {
  readonly title: string;
  readonly icon?: string;
  readonly path: string;
}

// ナビゲーション項目
export interface Navigation {
  items: NavigationItem[];
}
