import { HTagProps } from './HTag.props';
import './HTag.scss';
import { FC } from 'react';
import cn from 'classnames';

export const HTag: FC<HTagProps> = ({ tag, children, className = '', variant = '', line }) => {
	const classNames = cn(className, tag, 'title', variant, { ['line']: line });

	switch (tag) {
		case 'h1':
			return <h1 className={classNames}>{children}</h1>;
		case 'h2':
			return <h2 className={classNames}>{children}</h2>;
		case 'h3':
			return <h3 className={classNames}>{children}</h3>;
		case 'h4':
			return <h4 className={classNames}>{children}</h4>;
		default:
			return <>{children}</>;
	}
};
