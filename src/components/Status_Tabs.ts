const allTabs3 = ['Books', 'Movies', 'Laptops'] as const;
type TabsV = (typeof allTabs3)[number];
// "Books" | "Movies" | "Laptops"
