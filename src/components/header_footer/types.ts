export type IDs = 'home' | 'movies' | 'series';

export type IDProp<T extends string> = T | Omit<string, T>;
type LinkProp = { [P in IDs]: P extends 'home' ? '/' : `/${P}` };

export type Nav = {
	id: IDProp<IDs>;
	name: IDProp<Capitalize<IDs>>;
	link: LinkProp[keyof LinkProp];
};

export interface NavbarItemProps {
	key: IDProp<IDs>;
	nav: Nav;
}
