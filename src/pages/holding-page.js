import Logo from  "./../lib/assets/logo.svg"

export default function HoldingPage() {
	document.querySelector("html").classList.add("h-full", "bg-gray-dark");
	document.querySelector("body").classList.add("h-full");
	document.querySelector("#root").classList.add("h-full");
	return (<>
		<div className="flex items-center justify-center min-h-full px-4 py-12 my-auto sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img title="Darker Software" alt="Darker Software" src={Logo} className="w-auto h-64 mx-auto" />
					<h2 className="mt-6 font-bold tracking-tight text-center text-gray-light">Holding Page...</h2>
					<h3 className="mt-3 tracking-tight text-center text-gray-light">
						This site is currently being worked on, please come back in the future.
					</h3>
				</div>
			</div>
		</div>
	</>);
}