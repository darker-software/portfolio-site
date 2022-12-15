import { useState } from "react";
import { NAVIGATION_ITEMS } from "../lib/constants";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { 
	Drawer, 
	Box, 
	List, 
	ListItem, 
	ListItemButton, 
	ListItemIcon, 
	ListItemText
} from '@mui/material';

export default function MobileNav() {
	const [state, setState] = useState({
		open: false
	});

	const toggleDrawer = (isOpen) => (event) => {
		// Prevent tab or shift closing menu
		if (event.type === "keydown" && (event.key === "tab" || event.key === "shift")) {
			return;
		}

		setState({...state, open: isOpen});
	}

	return (
		<>
			{/*
				Mobile Navigation Menu
			*/}
			<button onClick={toggleDrawer(true)}>
				{state.open ? CloseIcon : MenuIcon}
			</button>
			<Drawer anchor="top" open={state.open} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: 'auto'}}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
					>
					<List>
						{NAVIGATION_ITEMS.map((navLink) => (
							<ListItem key={navLink.name} disablePadding>
								<ListItemButton>
									{
										navLink.icon 
										? (<ListItemIcon>
												{navLink.icon}
											</ListItemIcon>)
										: <></>
									}
									<ListItemText primary={navLink.name} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	)
}