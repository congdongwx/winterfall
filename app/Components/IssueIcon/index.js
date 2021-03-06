/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

class IssueIcon extends React.Component {
	render() {
		return (
			<svg
				height="1em"
				width="0.875em"
				className={this.props.className}
			>
				<path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z" />
			</svg>
		);
	}
}

IssueIcon.propTypes = {
	className: React.PropTypes.string,
};

export default IssueIcon;
