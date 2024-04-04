import { ReactNode } from 'react';

export interface PTagProps {
	children: ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'dark';
}
