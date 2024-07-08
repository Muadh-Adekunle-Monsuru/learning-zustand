import { create } from 'zustand';

type NameStore = {
	name: string;
	count: number;
	increment: () => void;
	decrement: () => void;
	setName: (val: string) => void;
	list: string[];
	updateList: (val: string) => void;
};

export const useNameStore = create<NameStore>((set) => ({
	name: 'Ali',
	count: 0,
	list: [''],
	increment: () => {
		set((state) => ({ count: state.count + 1 }));
	},
	decrement: () => {
		set((state) => ({ count: state.count - 1 }));
	},
	setName: (val) => {
		set((state) => ({ name: val }));
	},
	updateList: (val) => {
		set((state) => ({ list: [...state.list, val] }));
	},
}));
