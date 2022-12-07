import { NAVIGATION_ITEMS } from "../lib/constants";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	return (
		<>
			{/*
				Desktop nav menu
			*/}
			<div className="hidden md:block">
				<div className="flex items-baseline ml-10 space-x-4">
					{NAVIGATION_ITEMS.map((item) => (
						<a 
						key={item.name}
						href={item.href}
						className={classNames(item.current 
							? 'bg-blue-light text-gray-dark' 
							: 'text-gray-light hover:bg-blue', 
							'px-3 py-2 rounded-md text-sm font-medium')} 
						aria-current={item.current ? 'page' : undefined}>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</>
	)
}