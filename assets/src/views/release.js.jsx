import RouteLink from './route-link';

var ReleaseComponent = React.createClass({
	render: function () {
		var props = this.props;
		return (
			<section>
				<div style={{ marginTop: '2rem' }}>
					<RouteLink path="/">‹‹ Back to releases</RouteLink>
				</div>

				<h1>
					Flynn Release: {props.channel.name} {props.release.version}
				</h1>

				{props.release.changelog.match(/^\s*$/) ? (
					<p>&lt;Changelog empty&gt;</p>
				) : (
					<p dangerouslySetInnerHTML={{__html: markdown.toHTML(props.release.changelog)}}/>
				)}
			</section>
		);
	}
});

export default ReleaseComponent;
