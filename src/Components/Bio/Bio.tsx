import React from 'react';

import style from './Bio.module.scss';

export const Bio: React.FC = () => {
	return (
		<div className={style.container + ' ' + style.extend}>
			<div className={style.text}>
				<h2 className={style.header + ' ' + style.gradient}>Connor McDermott</h2>
				<h3 className={style.subheader + ' ' + style.gradient}>Software Engineer</h3>
        <div className={style.gradient}>
          ________________________________________________________________
        </div>
        <p>
          Delivering high quality software solutions with
          high performance, scalability, and maintainability.
        </p>
			</div>
		</div>
	);
};
