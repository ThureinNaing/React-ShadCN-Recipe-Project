/* eslint-disable react/prop-types */
function AuthHeader({ label, title }) {
	return (
		<div className="w-full flex flex-col gap-y-4 justify-center items-center">
			<h1 className="text-3xl font-semibold">{title}</h1>
			<p className="text-muted-foreground  text-sm">{label}</p>
		</div>
	);
}

export default AuthHeader;
